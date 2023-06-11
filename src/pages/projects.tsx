import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
        My Portifolio
      </h1>
      <p className='md:mt-4 py-6 text-lg leading-6 md:leading-7'>
        Here are some of my personal/open source projects. Feel free contribute to these projects by
        making pull requests. Your contributions are highly appreciated.
      </p>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-2'>
        <ProjectCard
          title='This'
          description='My personal portifolio'
          externalLink='/'
          githubLink='https://github.com/PGabriel20/Portifolio'
          tech='Typescript'
          techColor='#3178c6'
        />
        <ProjectCard
          title='...'
          description='More projects are comming soon...'
          tech='...'
          externalLink='#'
          githubLink='#'
        />
      </section>
    </div>
  );
};

export default Projects;
