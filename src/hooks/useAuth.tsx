import Loading from 'components/molecules/Loading/Loading';
import firebase from 'firebase';
import { auth, db } from 'firebaseConfig';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useError } from './useError';

// Interfaces of types
interface props {
  children: React.ReactNode;
}

interface authContextInterface {
  authUser: Partial<firebase.User> | null;
  changeEmail: (email: string) => Promise<void> | Error;
  login: (data: { email: string; password: string }) => Promise<firebase.auth.UserCredential>;
  loginWithGoogle: () => Promise<void | false>;
  register: (data: { newEmail: string; newPassword: string; confirmPassword: string }) => Promise<void | Error>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<Partial<authContextInterface>>({});

const AuthProvider = ({ children }: props): JSX.Element => {
  // States
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const { dispatchError } = useError();

  // Firestore creating account method
  const createFirestoreAccount = async (email: string) => {
    if (!email) throw new Error('Email does not exist in register protocol!');
    await db
      .collection('users')
      .doc()
      .set({
        email: email,
        name: email.split('@')[0],
        bio: 'This is your default BIO. If you want, change this text. BIO is text about you and your profile.',
        img: 'https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png'
      });
  };

  // Firebase auth methods
  const login = ({ email, password }: { email: string; password: string }) => auth.signInWithEmailAndPassword(email, password);
  const loginWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      await auth.signInWithPopup(provider).then(async (result) => {
        if (result.user !== null) {
          let doesExist;
          await db
            .collection('users')
            .where('email', '==', result.user.email)
            .get()
            .then((snapshots) => snapshots.forEach((snapshot) => (doesExist = snapshot.get('name'))));

          if (doesExist !== undefined) {
            return false;
          } else {
            if (result?.user.email) createFirestoreAccount(result.user.email);
            else throw new Error('Result.user.email does not exist in register protocol!');
          }
        } else throw new Error('Result.user does not exist in register protocol!');
      });
    } catch (e) {
      // console.error(e);
      if (e.message === 'The popup has been closed by the user before finalizing the operation.') return false;
      const errMessage = "Sorry, we can't create your account. Please contact with administration";
      dispatchError ? dispatchError(errMessage) : console.error(errMessage);
      auth.signOut();
    }
  };
  const register = async ({ newEmail: email, newPassword: password }: { newEmail: string; newPassword: string; confirmPassword: string }) => {
    await auth.createUserWithEmailAndPassword(email, password);
    await createFirestoreAccount(email);
  };
  const logout = () => auth.signOut();
  const changeEmail = (email: string) => (currentUser ? currentUser.updateEmail(email) : new Error("currentUser doesn't exist in auth hook!"));

  // User mounting and demounting
  useEffect(() => {
    const unregister = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoadingState(false);
    });

    return unregister;
  }, []);

  // Object with context values
  const value: authContextInterface = {
    authUser: currentUser,
    changeEmail,
    login,
    loginWithGoogle,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{isLoading ? <Loading fullScreen /> : children}</AuthContext.Provider>;
};

export const useAuth = (): Partial<authContextInterface> => {
  const { dispatchError } = useError();

  const auth = useContext(AuthContext);

  if (!auth) {
    const errMessage = 'Auth is not available now, we so sorry! Please try again later.';
    dispatchError ? dispatchError(errMessage) : console.error(errMessage);
  }

  return auth;
};

export default AuthProvider;
