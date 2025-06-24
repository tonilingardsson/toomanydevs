export default function HeroSection() {
  return (
    <section
      id='hero'
      className='h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white'
    >
      <h1 className='text-5xl font-bold mb-4'>Too Many Devs</h1>
      <p className='text-xl max-w-xl text-center'>
        We’re building blockchain solutions that empower innovation and
        ownership.
      </p>
    </section>
  );
}
