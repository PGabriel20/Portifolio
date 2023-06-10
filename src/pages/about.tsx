import { FiBriefcase } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <article>
        <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          About Me
        </h1>
        <p className='text-content py-8 lg:max-w-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eius, hic velit magni
          quis vel molestiae amet quia iure dicta maxime sequi. Minus delectus, ipsam enim nulla
          tempora necessitatibus iste? lorem
        </p>
      </article>
      <section>
        <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          Work Experience
        </h1>
        <article className='pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20'>
          <div className='flex justify-between items-center'>
            <h1 className='text-content md:text-lg lg:text-xl'>Frontend Development</h1>
            <div className='btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit'>
              Full Time
            </div>
          </div>
          <div className='flex justify-between pt-2'>
            <div className='flex items-center'>
              <FiBriefcase />
              <p className='text-content text-xs md:text-sm font-light pl-1'>Google</p>
            </div>
            <p className='text-content text-xs md:text-sm font-light pl-1 min-w-fit'>
              Aug 2020 - Present
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
