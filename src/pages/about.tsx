import WorkSection from '@/components/WorkSection';

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
          Work Experience
        </h1>
        <WorkSection
          title='junior software developer'
          company='Reportei'
          period='Full Time'
          periodStart='Sep 2022'
        />
        <WorkSection
          title='web development intern'
          company='Reportei'
          period='Full Time'
          periodStart='Sep 2021'
          periodEnd='Sep 2022'
        />
        <WorkSection
          title='web development intern'
          company='Actual Soluções em Tecnologia'
          period='Full Time'
          periodStart='Jan 2020'
          periodEnd='Sep 2022'
        />
      </section>
    </div>
  );
};

export default About;
