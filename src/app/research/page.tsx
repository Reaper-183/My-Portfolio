import { Header } from "@/components/portfolio/Header";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { resume } from "@/lib/resume-data";
import type { ResearchItem } from "@/lib/types";

export default function ResearchPage() {
  const researchItems = resume.research || [];

  const groupedResearch = researchItems.reduce((acc, item) => {
    const key = item.type || 'Journal Paper';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, ResearchItem[]>);

  const categoryOrder: (keyof typeof groupedResearch)[] = ['Conference Paper', 'Journal Paper', 'Reviewer'];
  
  const sortedCategories = Object.keys(groupedResearch).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const categoryTitles: Record<string, string> = {
    'Conference Paper': 'Conference Papers',
    'Journal Paper': 'Journal Papers',
    'Reviewer': 'Reviewer Roles',
  };

  return (
    <>
      <Header />
      <main className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center animate-in fade-in duration-500">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Research</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                My contributions to academic research and publications.
            </p>
        </div>
        
        <div className="space-y-16">
          {sortedCategories.map(category => (
            <section key={category}>
              <h2 className="font-headline text-3xl font-semibold tracking-tight mb-12">{categoryTitles[category] || category}</h2>
              <ResumeSection items={groupedResearch[category]} category="Research" />
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
