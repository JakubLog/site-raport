import React from 'react';
import NavBar from 'components/organisms/NavBar/NavBar';
import Footer from 'components/molecules/Footer/Footer';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
