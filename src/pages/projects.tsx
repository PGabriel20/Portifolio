import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects: React.FC = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
        My personal projects
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
        <div className='rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-300 dark:shadow-slate-900'>
          <div className='bg-gradient-to-r from-sky-500 to-purple-500 h-56'></div>
          <div className='dark:bg-dark-card p-4'>
            <h1 className='dark:text-light-heading font-semibold text-lg pt-1'>Project title 1</h1>
            <p className='text-content pt-4 font-light'>
              This is sample project description random things are here in description This is
              sample project lorem ipsum generator for dummy content
            </p>
            <h3 className='text-dark-heading dark:text-light-heading font-medium pt-4'>
              Tech Stack : <span className='font-light'>HTML/CSS, JavaScript</span>
            </h3>
            <div className='flex justify-start gap-8 items-center mt-5'>
              <div className='flex items-center'>
                <FiExternalLink />
                <Link
                  href='https://google.com'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='underline pl-2 font-light dark:text-white'
                >
                  Live Preview
                </Link>
              </div>
              <div className='flex items-center'>
                <FiGithub />
                <Link
                  href='https://google.com'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='underline pl-2 font-light dark:text-white'
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
