const Contact: React.FC = () => {
  return (
    <div className='mt-28 md:mt-32'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold'>
        For any questions please drop a mail
      </h1>
      <h3 className='text-center text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 font-semibold md:font-bold pt-5 md:pt-10 md:pb-6'>
        <a href='mailto:hi@example.com'>hi@example.com</a>
      </h3>
      <span className='text-center text-content text-xl font-light block'>or</span>
      <h3 className='text-center text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 font-semibold md:font-bold pt-2 md:py-6'>
        <a href='tel:+91 12345 67890'>+91 12345 67890</a>
      </h3>
    </div>
  );
};

export default Contact;
