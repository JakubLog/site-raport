import React from 'react';
import NavBar from 'components/organisms/NavBar/NavBar';
import Footer from 'components/molecules/Footer/Footer';

interface props {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: props): JSX.Element => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
