import React from 'react';

const Footer = () => {
  return (
    <footer className="flex h-20 w-full items-center justify-center bg-blue-800 text-white font-semibold">
      Next.js | Tailwind CSS | {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;