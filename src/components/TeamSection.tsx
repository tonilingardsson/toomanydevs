export default function TeamSection() {
  return (
    <section
      id='team'
      className='flex flex-col items-center justify-center bg-gray-100 py-16'
    >
      <h2 className='text-3xl font-bold mb-8'>Our Team</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Placeholder for team member cards */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Team Member Name</h3>
          <p className='text-gray-600'>Role or position description.</p>
        </div>
        {/* Repeat for more team members */}
      </div>
    </section>
  );
}
