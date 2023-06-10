import Header from '@/components/Header';
import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className='flex min-h-screen w-full flex-col items-center py-10 dark:bg-dark-background'>
      <Header />
      <section className='container font-primary'>{children}</section>
    </main>
  );
};

export default Layout;