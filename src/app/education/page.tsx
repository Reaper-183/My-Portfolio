import { Header } from "@/components/portfolio/Header";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { resume } from "@/lib/resume-data";

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center animate-in fade-in duration-500">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Education</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                My academic background and qualifications.
            </p>
        </div>

        {resume.education && resume.education.length > 0 && (
          <ResumeSection items={resume.education} category="Education" />
        )}
      </main>
    </>
  );
}
