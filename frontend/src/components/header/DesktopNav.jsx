import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = ({ menuItems, logo }) => {
  return (
    <>
      <div className="h-16 flex justify-between items-center px-6 lg:px-12">
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-7">
          {menuItems?.map((menu, index) => (
            <li key={index}>
              <Link to={menu} className="font-medium capitalize text-secondary">
                {menu}
              </Link>
            </li>
          ))}
        </ul>
        {/* Login and Signup Button */}
        <ul className='flex items-center gap-4 font-medium'>
          <li>
            <button className='text-secondary px-4 py-2 rounded'>Log In</button>
            <button className='text-secondary px-4 py-2 rounded'>Sign up</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DesktopNav;
