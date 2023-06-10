import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex justify-between items-center mt-20 md:mt-28'>
      <h1 className='text-2xl md:text-4xl text-solid-heading dark:text-light-heading font-bold'>
        Hi 👋, <br /> My name is <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500'>
          Gabriel
        </span>
        <br />I build stuff for web
      </h1>
      <div className='w-32 h-32 md:w-64 md:h-64 flex-shrink-0 rounded-full bg-dark-card bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 p-1'>
        <Image
          src='https://avatars.githubusercontent.com/u/62361896?v=4'
          width={296}
          height={296}
          alt='My picture'
          className='rounded-full'
        />
      </div>
    </div>
  );
}
