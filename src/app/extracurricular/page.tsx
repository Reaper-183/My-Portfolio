import { Header } from "@/components/portfolio/Header";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { resume } from "@/lib/resume-data";

export default function ExtraCurricularPage() {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center animate-in fade-in duration-500">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Extra-Curricular Activities</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my involvement in various events, leadership roles, and volunteer work.
            </p>
        </div>

        {resume.extracurricular && resume.extracurricular.length > 0 && (
          <ResumeSection items={resume.extracurricular} category="Extra-Curricular" />
        )}
      </main>
    </>
  );
}
