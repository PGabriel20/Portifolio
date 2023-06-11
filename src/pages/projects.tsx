import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
        My personal projects
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
        {/* <ProjectCard
          title='This'
          description='My personal portifolio'
          externalLink='/'
          githubLink='/'
        /> */}
        <p className='md:mt-4 text-md lg:text-xl leading-9 md:leading-7'>
          Nothing to see here yet...
        </p>
      </section>
    </div>
  );
};

export default Projects;
