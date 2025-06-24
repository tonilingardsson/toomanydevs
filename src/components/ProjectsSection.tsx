export default function ProjectsSection() {
  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center bg-gray-100 py-16'
    >
      <h2 className='text-3xl font-bold mb-8'>Our Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Placeholder for project cards */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Project Title</h3>
          <p className='text-gray-600'>Project description goes here.</p>
        </div>
        {/* Repeat for more projects */}
      </div>
    </section>
  );
}
