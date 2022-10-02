import React from 'react';

interface InputProps {
  label?: string
  type: string
  value?: any
  onChange?: any
  readonly?: boolean
  placeholder?: string
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-row justify-start items-center px-2 py-2 w-full">
      <label htmlFor="" className="mx-4 w-1/6 text-right">{props.label}</label>
      <input 
        className="p-2 rounded-md w-5/6"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}

export default Input;