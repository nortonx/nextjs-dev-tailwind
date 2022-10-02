import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface ChildrenProp {
  children: any
}

const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Header />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-blue-600">
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout;