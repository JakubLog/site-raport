import React, { createContext, useContext, useState } from 'react';
import { useError } from './useError';

interface props {
  children: React.ReactNode;
}

interface contextProps {
  popup: string | null;
  displayPopup: (message: string) => void;
}

const PopupContext = createContext<contextProps>({
  popup: 'no popup...',
  displayPopup: (message: string) => console.log(message)
});
const PopupProvider = ({ children }: props): JSX.Element => {
  const [popup, setPopup] = useState<string | null>(null);

  const displayPopup = (message: string) => {
    setPopup(message);
    setTimeout(() => {
      setPopup(null);
    }, 6000);
  };

  const value: contextProps = {
    popup,
    displayPopup
  };
  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};

export const usePopup = (): contextProps => {
  const popup = useContext(PopupContext);
  const { dispatchError } = useError();

  const errMessage = 'Sorry, something went wrong with popups! Please try again later.';
  if (!popup) dispatchError ? dispatchError(errMessage) : console.error(errMessage);

  return popup;
};

export default PopupProvider;
