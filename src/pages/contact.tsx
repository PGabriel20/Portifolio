const Contact: React.FC = () => {
  return (
    <div className='flex flex-col gap-12 mt-28 md:mt-32 max-w-5xl mx-auto'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold'>
        If you&apos;re interested in working on a project together, have any questions, or just want
        to connect.
      </h1>
      <h3 className='text-center text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 font-semibold md:font-bold pt-5 md:pt-10 md:pb-6'>
        <a href='bielporreca@gmail.com'>bielporreca@gmail.com</a>
      </h3>
    </div>
  );
};

export default Contact;
