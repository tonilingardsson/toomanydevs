export default function ContactSection() {
  return (
    <section
      id='contact'
      className='flex flex-col items-center justify-center bg-gray-100 py-16'
    >
      <h2 className='text-3xl font-bold mb-8'>Contact Us</h2>
      <form className='w-full max-w-md'>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Your Name'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Your Email'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            id='message'
            rows={4}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Your Message'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
