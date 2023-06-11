import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface IProjectCard {
  title: string;
  description: string;
  externalLink: string;
  githubLink: string;
  imageUrl?: string;
  stack?: Array<string>;
}

const ProjectCard: React.FC<IProjectCard> = ({ title, description, externalLink, githubLink }) => {
  return (
    <div className='rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-300 dark:shadow-slate-900'>
      <div className='bg-gradient-to-r from-sky-500 to-purple-500 h-56'></div>

      <div className='dark:bg-dark-card p-4'>
        <h1 className='dark:text-light-heading font-semibold text-lg pt-1'>{title}</h1>
        <p className='text-content pt-4 font-light'>{description}</p>

        <h3 className='text-dark-heading dark:text-light-heading font-medium pt-4'>
          Tech Stack : <span className='font-light'>HTML/CSS, JavaScript</span>
        </h3>

        <div className='flex justify-start gap-8 items-center mt-5'>
          <div className='flex items-center'>
            <FiExternalLink />
            <Link
              href={externalLink}
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
              href={githubLink}
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
  );
};

export default ProjectCard;
