import Header from '@/components/Header';
import { ReactNode } from 'react';

interface IDefault {
  children: ReactNode;
}

const Default: React.FC<IDefault> = ({ children }) => {
  return (
    <main className='flex items-center flex-col  min-h-screen w-full py-7'>
      <Header />

      <section className='container font-secondary'>{children}</section>
    </main>
  );
};

export default Default;
