import React from 'react';

interface InputProps {
  label: string;
  type: string | 'text'
}

const InputTailwind = (props: InputProps) => {
  return (
    <label className="block my-2">
      <span className="text-gray-700 font-bold">{props.label}</span>
      <input
        type={props.type}
        className="mt-1 block w-full rounded-md border-gray-300
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </label>
  )
}

export default InputTailwind;