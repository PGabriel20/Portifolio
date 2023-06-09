export default function Home() {
  return (
    <div className='flex justify-between mt-28'>
      <h1 className='text-4xl text-solid-heading dark:text-light-heading font-bold'>
        Hi 👋, <br /> My name is <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500'>
          Gabriel
        </span>
        <br />I build stuff for web
      </h1>
    </div>
  );
}
