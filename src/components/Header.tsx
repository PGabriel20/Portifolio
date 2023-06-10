import Link from 'next/link';
import { useTheme } from 'next-themes';
import Switch from './UI/Switch';
import Dropdown from './UI/Dropdown';

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
        <Switch
          className='hidden lg:block'
          checked={theme === 'light'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
    </header>
  );
};

export default Header;
