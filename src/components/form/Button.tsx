import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: any
}
const Button = (props: ButtonProps) => {
  return (
    <>
      <button 
        className="border border-zinc-700 text-center text-black p-4 font-bold rounded-md bg-blue-400"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </>
  )
}

export default Button;