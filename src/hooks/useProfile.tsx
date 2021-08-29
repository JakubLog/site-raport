/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, createContext, useContext } from 'react';
import { db } from 'firebaseConfig';
import { useAuth } from './useAuth';
import { useError } from './useError';

// TypeScript interfaces
interface props {
  children: React.ReactNode;
}

interface userTypes {
  id: any;
  name: any;
  email: any;
  bio: any;
}

interface contextTypes {
  user: userTypes;
  getUserId: (email: string) => Promise<void>;
  getUserData: (data: any, email?: string) => Promise<void>;
  updateUserData: (object: { [key: string]: string }, isEmail?: boolean) => Promise<void>;
  reloadData: (timeout?: number) => void;
}

// Global error message
const errMessage = 'Sorry, something went wrong with your profile. Please try again.';

// Context for hook
const ProfileContext = createContext<contextTypes>({
  user: {
    id: 'Loading...',
    name: 'Loading...',
    email: 'Loading...',
    bio: 'Loading...'
  },
  getUserId: (email: string) => new Promise(() => Promise.resolve()),
  getUserData: (data: any, email = 'none') => new Promise(() => Promise.resolve()),
  updateUserData: (object: { [key: string]: string }, isEmail?: boolean) => new Promise(() => Promise.resolve()),
  reloadData: (timeout?: number) => console.log()
});
const ProfileProvider = ({ children }: props): JSX.Element => {
  // Global hooks, states etc.
  const [user, setUser] = useState<any>({});
  const { dispatchError } = useError();
  const { authUser, logout } = useAuth();

  // Registration user object on hook start
  useEffect(() => {
    (async () =>
      setUser({
        id: await getUserId(authUser?.email),
        name: await getUserData('name'),
        email: await getUserData('email'),
        bio: await getUserData('bio')
      }))();
    return () =>
      setUser({
        id: 'Loading...',
        name: 'Loading...',
        email: 'Loading...',
        bio: 'Loading...'
      });
  }, []);

  // Handle error function for this hook
  const handleError = (error: any, displayProvided = false) => {
    console.error(error);
    if (displayProvided) return dispatchError ? dispatchError(error.message) : console.error(error.message);
    return dispatchError ? dispatchError(errMessage) : console.error(errMessage);
  };

  // Hook methods:

  // Getters
  const getUserId = async (email: string | null | undefined) => {
    try {
      if (email === null || email === undefined) throw new Error('Email in "getUserId" function is undefined or null type.');
      let response;
      await db
        .collection('users')
        .where('email', '==', email)
        .get()
        .then((snapshots) => {
          snapshots.forEach((snapshot) => {
            response = snapshot.id;
          });
        });
      return response;
    } catch (e) {
      handleError(e);
    }
  };

  const getUserData = async (data: string, email: string | null | undefined = authUser?.email) => {
    try {
      if (typeof email === null || typeof email === undefined) throw new Error('Email in "getUserData" function is undefined or null type.');
      let response;
      await db
        .collection('users')
        .where('email', '==', email)
        .get()
        .then((snapshots) => {
          snapshots.forEach((snapshot) => {
            response = snapshot.get(data);
          });
        });
      return response;
    } catch (e) {
      handleError(e);
    }
  };

  const reloadData = (timeout = 1000) => {
    setTimeout(
      async () =>
        setUser({
          id: await getUserId(authUser?.email),
          name: await getUserData('name'),
          email: await getUserData('email'),
          bio: await getUserData('bio')
        }),
      timeout
    );
  };

  // 2. Setters:
  const updateUserData = async (object: { [key: string]: string }, isEmail = false) => {
    try {
      const id = authUser?.email;
      if (isEmail) {
        if (authUser?.updateEmail) await authUser.updateEmail(object.email);
        else throw new Error('authUser is an undefined!');
      }
      await db
        .collection('users')
        .doc(await getUserId(id))
        .update(object);
    } catch (e) {
      handleError(e, true);
      setTimeout(() => logout && logout(), 7000);
    }
  };

  // Context values object
  const value: contextTypes = {
    user,
    getUserId,
    getUserData,
    updateUserData,
    reloadData
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

// Hook declaration with error handling
export const useProfile = (): contextTypes => {
  const { dispatchError } = useError();

  const profile = useContext(ProfileContext);

  const errMessage = 'Something went wrong with your profile. Please try again!';
  if (!profile) dispatchError ? dispatchError(errMessage) : console.error(errMessage);

  return profile;
};

export default ProfileProvider;
