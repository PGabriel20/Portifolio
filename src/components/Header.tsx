import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='container w-full flex justify-between font-secondary'>
      <div className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600'>
        <h1 className='text-2xl'>{'{ PGabriel20 }'}</h1>
        <h3 className='capitalize text-xl'>paulo gabriel</h3>
      </div>
      <nav className='flex gap-4 font-medium text-dark-content'>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  );
};

export default Header;
