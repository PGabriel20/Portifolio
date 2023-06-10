import Link from 'next/link';
import { useTheme } from 'next-themes';
import Dropdown from './UI/Dropdown';
import { FiMoon, FiSun } from 'react-icons/fi';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className='container w-full flex justify-between items-center lg:items-start font-secondary'>
      <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600'>
        <h1 className='text-2xl'>{'{ PGabriel20 }'}</h1>
        <h3 className='capitalize text-xl'>paulo gabriel</h3>
      </div>
      <nav className='hidden lg:flex gap-4 font-bold text-dark-content dark:text-light-content'>
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Technologies</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Contact</Link>
      </nav>
      <div className='flex'>
        <Dropdown className='block lg:hidden' />
        <button
          className='hidden lg:block text-2xl cursor-pointer'
          type='button'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
