import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='bg-blue-500 p-4'>
      <nav className='flex justify-between'>
        <h1 className='text-white text-xl'>BCU23D Devs</h1>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/' className='text-white hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' className='text-white hover:underline'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/team' className='text-white hover:underline'>
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
