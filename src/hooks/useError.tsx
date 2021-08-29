import React, { createContext, useContext, useState } from 'react';

interface props {
  children: React.ReactNode;
}

interface contextProps {
  error: string | null;
  dispatchError: (message: string) => void;
}

const ErrorContext = createContext<Partial<contextProps>>({});
const ErrorProvider = ({ children }: props): JSX.Element => {
  const [error, setError] = useState<string | null>(null);

  const dispatchError = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 10000);
  };

  const value: contextProps = {
    error,
    dispatchError
  };
  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export const useError = (): Partial<contextProps> => {
  const error = useContext(ErrorContext);
  if (!error) console.error("Global error service doesn't work! Please contact with support");
  return error;
};

export default ErrorProvider;
