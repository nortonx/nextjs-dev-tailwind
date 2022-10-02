import React from 'react';
import Head from 'next/head';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';

const About = () => {
  return (
      <div className="flex h-screen flex-col items-center justify-center">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-green-300">
        About content
      </main>
      <Footer />
    </div>
  )
}

export default About;