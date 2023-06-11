interface ISkill {
  title: string;
  description: string;
}

const Skill: React.FC<ISkill> = ({ title, description }) => {
  return (
    <article className='pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20'>
      <div className='flex justify-between items-center'>
        <h1 className='text-content capitalize md:text-lg lg:text-xl'>{title}</h1>
      </div>
      <div className='flex justify-between pt-2'>
        <div className='flex items-center'>
          <p className='text-content text-md font-light pl-1'>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Skill;
