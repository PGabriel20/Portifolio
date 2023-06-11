import { FiBriefcase } from 'react-icons/fi';

interface IWorkSection {
  title: string;
  company: string;
  period: string;
  periodStart: string;
  periodEnd?: string;
}

const WorkSection: React.FC<IWorkSection> = ({
  title,
  company,
  period,
  periodStart,
  periodEnd,
}) => {
  return (
    <article className='pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20'>
      <div className='flex justify-between items-center'>
        <h1 className='text-content capitalize md:text-lg lg:text-xl'>{title}</h1>
        <div className='btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit'>
          {period}
        </div>
      </div>
      <div className='flex justify-between pt-2'>
        <div className='flex items-center'>
          <FiBriefcase />
          <p className='text-content text-xs md:text-sm font-light pl-1'>{company}</p>
        </div>
        <p className='text-content text-xs md:text-sm font-light pl-1 min-w-fit'>
          {periodStart} - {periodEnd || 'Present'}
        </p>
      </div>
    </article>
  );
};

export default WorkSection;
