import Link from 'next/link';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className='container w-full flex justify-between font-secondary'>
      <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600'>
        <h1 className='text-2xl'>{'{ PGabriel20 }'}</h1>
        <h3 className='capitalize text-xl'>paulo gabriel</h3>
      </div>
      <nav className='flex gap-4 font-bold text-dark-content dark:text-light-content'>
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Technologies</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Contact</Link>
      </nav>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Light Mode</button>
    </header>
  );
};

export default Header;
