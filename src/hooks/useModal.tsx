import React, { useContext, createContext, useState } from 'react';
import { useError } from './useError';

// TypeScript interfaces & types
interface contextTypes {
  openModal: (node: JSX.Element, title: string) => void;
  closeModal: () => void;
  isOpen: boolean;
  content: JSX.Element;
  title: string;
}

interface props {
  children: React.ReactNode;
}

// Global error message for hook
const errMessage = 'Sorry, something went wrong with Modal! Please, contact with us!';

// Context
const ModalContext = createContext<contextTypes>({
  isOpen: false,
  openModal: (node: JSX.Element, title: string) => console.log('Modal has been opened'),
  closeModal: () => console.log('Modal has been closed'),
  content: <div>Empty.</div>,
  title: 'No title'
});
const ModalProvider = ({ children }: props): JSX.Element => {
  // Global variables, hook's functions
  const [isOpen, setOpenState] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element>(<div>Empty.</div>);
  const [title, setTitle] = useState<string>('No title');

  // Modal hook methods
  const openModal = (node: JSX.Element, title: string) => {
    setContent(node);
    setTitle(title);
    setOpenState(true);
  };
  const closeModal = () => {
    setContent(<p>empty</p>);
    setTitle('');
    setOpenState(false);
  };

  // Value object with context content
  const value: contextTypes = {
    openModal,
    closeModal,
    isOpen,
    content,
    title
  };
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

// Modal hook handling
export const useModal = (): contextTypes => {
  const { dispatchError } = useError();
  const modal = useContext(ModalContext);

  if (!modal) dispatchError ? dispatchError(errMessage) : console.error(errMessage);

  return modal;
};

export default ModalProvider;
