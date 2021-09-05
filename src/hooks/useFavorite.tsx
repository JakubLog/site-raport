/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';
import { db } from 'firebaseConfig';
import { useError } from './useError';

// TypeScript interfaces
interface props {
  children: React.ReactNode;
}

interface contextTypes {
  isFavoritePost: (postId: string, userId: string) => Promise<false | undefined>;
}

// Global error message
const errMessage = 'Sorry, something went wrong with post. Please try again.';

// Context for hook
const FavoriteContext = createContext<contextTypes>({
  isFavoritePost: (postId: string, userId: string) => new Promise<false | undefined>((resolve, reject) => resolve(false))
});
const FavoriteProvider = ({ children }: props): JSX.Element => {
  // Global hooks, states etc.
  const { dispatchError } = useError();

  // Handle error function for this hook
  const handleError = (error: any, displayProvided = false) => {
    console.error(error);
    if (displayProvided) return dispatchError ? dispatchError(error.message) : console.error(error.message);
    return dispatchError ? dispatchError(errMessage) : console.error(errMessage);
  };

  // Hook methods:

  // 1. Getters
  const isFavoritePost = async (postId: string, userId: string) => {
    try {
      if (postId === undefined || postId === null) throw new Error('PostID in "isFavoritePost" function is undefined or null type.');
      if (userId === null || userId === undefined) throw new Error('UserID in "isFavoritePost" function is undefined or null type.');
      let response: boolean;
      response = false;
      await db
        .collection('users')
        .doc(userId)
        .collection('favorite')
        .get()
        .then((favorites) => {
          favorites.forEach((favorite) => {
            if (favorite.get('id') === postId) {
              response = true;
            }
          });
        });
      return response;
    } catch (e) {
      handleError(e, true);
    }
  };

  // 2. Setters

  // Context values object
  const value: contextTypes = {
    isFavoritePost
  };

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};

// Hook declaration with error handling
export const useFavorite = (): contextTypes => {
  const { dispatchError } = useError();

  const favorite = useContext(FavoriteContext);

  const errMessage = 'Something went wrong with your profile. Please try again!';
  if (!favorite) dispatchError ? dispatchError(errMessage) : console.error(errMessage);

  return favorite;
};

export default FavoriteProvider;
