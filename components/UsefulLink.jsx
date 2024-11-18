import React from 'react'
import Link from 'next/link'
const UsefulLink = ({ name, href }) => {
    return (
      <li className=" text-center lg:text-left w-full px-2 py-1 my-[2px]">
        <Link href={href} className="hover:text-primary text-sm md:text-base text-secondary">
          {name}
        </Link>
      </li>
    );
  };

export default UsefulLink