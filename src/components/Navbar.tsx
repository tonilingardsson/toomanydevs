import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full bg-white shadow-md z-50'>
      <ul className='flex justify-center space-x-8 p-4 text-gray-800'>
        <li>
          <a href='#hero'>Home</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#team'>Team</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
