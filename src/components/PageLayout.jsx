import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div
      id="page-layout-parent"
      className="flex flex-col bg-body-bg min-h-dvh w-full pb-24 items-center font-primary tracking-tight"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
