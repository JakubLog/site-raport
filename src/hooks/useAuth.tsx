import Loading from 'components/molecules/Loading/Loading';
import firebase from 'firebase';
import { auth } from 'firebaseConfig';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useError } from './useError';

// Interfaces of types
interface props {
  children: React.ReactNode;
}

interface authContextInterface {
  authUser: Partial<firebase.User> | null;
  login: (data: { email: string; password: string }) => Promise<firebase.auth.UserCredential>;
  loginWithGoogle: () => Promise<void>;
  register: (data: { newEmail: string; newPassword: string; confirmPassword: string }) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<Partial<authContextInterface>>({});

const AuthProvider = ({ children }: props): JSX.Element => {
  // States
  const [currentUser, setCurrentUser] = useState<Partial<firebase.User> | null>(null);
  const [isLoading, setLoadingState] = useState<boolean>(true);

  // Firebase auth methods
  const login = ({ email, password }: { email: string; password: string }) => auth.signInWithEmailAndPassword(email, password);
  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithRedirect(provider);
  };
  const register = ({ newEmail: email, newPassword: password }: { newEmail: string; newPassword: string; confirmPassword: string }) =>
    auth.createUserWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();

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
