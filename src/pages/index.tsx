import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col relative mt-20 md:mt-28'>
      <div className='flex justify-between w-full'>
        <section>
          <h1 className='text-2xl md:text-4xl text-solid-heading dark:text-light-heading font-bold'>
            Hi 👋, <br /> My name is <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500'>
              Gabriel
            </span>
            <br />I build stuff for the web
          </h1>

          <div className='flex gap-4'>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/paulo-gabriel-porreca-937981208/'
              rel='noreferrer noopener'
            >
              <FaLinkedin className='text-3xl mt-8 text-dark-heading dark:text-white hover:scale-110 transition-transform' />
            </Link>
            <Link
              target='_blank'
              href='https://www.github.com/PGabriel20/'
              rel='noreferrer noopener'
            >
              <FaGithub className='text-3xl mt-8 text-dark-heading dark:text-white hover:scale-110 transition-transform' />
            </Link>
          </div>
        </section>

        <section className='w-32 h-32 md:w-64 md:h-64 flex-shrink-0 rounded-full bg-dark-card bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 p-1'>
          <Image
            src='https://avatars.githubusercontent.com/u/62361896?v=4'
            width={296}
            height={296}
            alt='My picture'
            className='rounded-full'
          />
        </section>
      </div>

      <section className='mt-28 mb-56'>
        <p className='md:mt-4 text-md lg:text-xl leading-7'>
          I&apos;m a full-stack developer with a passion for web development. I love crafting
          engaging front-end experiences, building robust back-end solutions, and exploring
          infrastructure technologies like AWS, Cloudflare and Vercel. Currently studying to become
          a software engineer, I constantly strive to learn new technologies to create better
          solutions.
        </p>
      </section>
    </div>
  );
}
