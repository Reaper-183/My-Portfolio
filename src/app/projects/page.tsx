import { Header } from "@/components/portfolio/Header";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { resume } from "@/lib/resume-data";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center animate-in fade-in duration-500">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Projects</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of projects that showcase my skills and passion for development.
            </p>
        </div>

        {resume.projects && resume.projects.length > 0 && (
            <ResumeSection items={resume.projects} category="Projects" />
        )}
      </main>
    </>
  );
}
