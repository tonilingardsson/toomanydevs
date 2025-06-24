import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-50 scroll-smooth'>
      <HeroSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <footer className='w-full py-4 text-center bg-gray-800 text-white'>
        <p>
          &copy; {new Date().getFullYear()} Too Many Devs. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
