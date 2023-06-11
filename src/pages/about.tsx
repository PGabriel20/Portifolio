import Skill from '@/components/Skill';

const About: React.FC = () => {
  return (
    <div className='mt-10 md:mt-20'>
      <article>
        <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          About Me
        </h1>
        <p className='text-content py-8 leading-8 md:leading-normal lg:max-w-3xl'>
          Since 2019, I&apos;ve been studying software development and pursued a degree in software
          engineering. Currently i work remotely as a junior software developer and enjoy tackling
          challenges across multiple areas of software development, from end-to-end. My goal is to
          always create impactful and robust solutions that meet expectations and generate positive
          outcomes for the developers and clients.
        </p>
      </article>
      <section className='mt-8'>
        <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          Skills
        </h1>
        <Skill title='Languages' description='PHP - Typescript - Javascript' />
        <Skill
          title='Back end'
          description='Laravel - Next.Js - Node.Js - Bull.Js - TRPC - Redis - MySQL - MongoDB'
        />
        <Skill
          title='Front end'
          description=' React.Js - Vue.Js - Livewire - Alpine.Js - Tailwind - ChakraUI - Chart.Js'
        />
        <Skill title='Infraestructure' description='Mongo Atlas - NGINX - AWS - Vercel' />
      </section>
    </div>
  );
};

export default About;
