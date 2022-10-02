import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  children: any,
  path: string
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <li className="py-2 px-4 hover:bg-gradient-to-r from-pink-400 to-purple-600 font-bold rounded-md hover:text-white"
    ><Link href={props.path}>{props.children}</Link></li>
  )
}

export default MenuItem;