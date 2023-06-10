import Header from '@/components/Header';
import { ReactNode } from 'react';
import Metadata from './Metadata';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Metadata />
      <main className='flex min-h-screen w-full flex-col items-center py-4 lg:py-10 px-4 dark:bg-dark-background'>
        <Header />
        <section className='container font-primary'>{children}</section>
      </main>
    </>
  );
};

export default Layout;
