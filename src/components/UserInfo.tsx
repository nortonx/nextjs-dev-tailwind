import Image from 'next/image';
import React from 'react';

interface userProps {
  name?: string;
  age?: number;
  email?: string;
}

const UserInfo = (user: userProps) => {
  return (
    <div className="flex flex-column border border-zinc-500 p-4">
      <div className="w-20 h-20 p-2 relative">image</div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
    </div>
  )
}

export default UserInfo;