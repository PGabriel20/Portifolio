import Link from 'next/link';

import Dropdown from './UI/Dropdown';
import ThemeToggler from './UI/ThemeToggler';

const Header: React.FC = () => {
  return (
    <header className='container w-full flex justify-between items-center lg:items-start font-secondary'>
      <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600'>
        <h1 className='text-2xl'>{'{ PGabriel20 }'}</h1>
        <h3 className='capitalize text-xl'>paulo gabriel</h3>
      </div>
      <nav className='hidden lg:flex gap-4 font-bold text-dark-content dark:text-light-content'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/tachnologies'>Technologies</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
      <div className='flex gap-4'>
        <Dropdown className='block lg:hidden' />
        <ThemeToggler className='hidden lg:block' />
      </div>
    </header>
  );
};

export default Header;
