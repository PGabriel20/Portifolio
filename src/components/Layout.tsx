import Header from '@/components/Header';
import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className='flex min-h-screen w-full flex-col items-center py-10'>
      <Header />
      <section className='container flex flex-col'>{children}</section>
    </main>
  );
};

export default Layout;
