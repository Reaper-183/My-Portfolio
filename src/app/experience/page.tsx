import { Header } from "@/components/portfolio/Header";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { resume } from "@/lib/resume-data";

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center animate-in fade-in duration-500">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Professional Experience</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my work experience in software development and AI/ML engineering.
            </p>
        </div>
        
        <div className="space-y-16">
            {resume.experience && resume.experience.length > 0 && (
                <section>
                    <h2 className="font-headline text-3xl font-semibold tracking-tight mb-12">Work Experience</h2>
                    <ResumeSection items={resume.experience} category="Work Experience" />
                </section>
            )}
            {resume.teachingExperience && resume.teachingExperience.length > 0 && (
                <section>
                    <h2 className="font-headline text-3xl font-semibold tracking-tight mb-12">Teaching Experience</h2>
                    <ResumeSection items={resume.teachingExperience} category="Teaching Experience" />
                </section>
            )}
        </div>
      </main>
    </>
  );
}
