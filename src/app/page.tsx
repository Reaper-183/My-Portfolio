import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { resume } from '@/lib/resume-data';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero resume={resume} />
    </main>
  );
}
