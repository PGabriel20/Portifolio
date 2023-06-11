import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { GoRepo } from 'react-icons/go';

interface IProjectCard {
  title: string;
  description: string;
  externalLink: string;
  githubLink: string;
  tech?: string;
  techColor?: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  externalLink,
  githubLink,
  tech,
  techColor,
}) => {
  return (
    <div className='rounded-xl dark:border-2 border-dark-card mt-8 relative overflow-hidden shadow-lg shadow-slate-300 dark:shadow-slate-900'>
      <section className=' p-4 flex justify-between'>
        <div>
          <Link href={githubLink} className=' font-semibold flex text-lg leading-none gap-1'>
            <GoRepo />
            <h1 className='text-github-link'>{title}</h1>
          </Link>
          <p className='text-content pt-2 font-light'>{description}</p>
          <div className='flex items-center mt-2'>
            <span
              className='w-3 h-3 mr-1 border-white rounded-full'
              style={{ background: techColor || '#555555' }}
            />
            <h3 className='text-dark-heading dark:text-light-heading font-medium'>{tech}</h3>
          </div>
        </div>

        <div className='flex h-fit items-start'>
          <Link
            href={externalLink}
            target='_blank'
            rel='noreferrer noopener'
            className='text-lg pl-2 font-light dark:text-white'
            title='Live demo'
          >
            <FiExternalLink />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
