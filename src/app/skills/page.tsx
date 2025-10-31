import { Header } from "@/components/portfolio/Header";
import { resume } from "@/lib/resume-data";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 perspective-1000">
        {resume.skills && Object.keys(resume.skills).length > 0 && (
            <section>
                <h2 className="font-headline text-3xl font-semibold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">Skills</h2>
                <div className="space-y-8">
                    {Object.entries(resume.skills).map(([category, skillsList], categoryIndex) => (
                        (skillsList.length > 0) &&
                        <div
                            key={category}
                            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                            style={{ animationDelay: `${categoryIndex * 150}ms`, animationFillMode: 'backwards' }}
                        >
                            <h3 className="font-semibold mb-4 capitalize font-headline text-xl text-foreground/90">{category.replace(/([A-Z])/g, ' $1')}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillsList.map((skill, skillIndex) => (
                                    <div key={skill} className="group transform-style-preserve-3d">
                                        <Badge
                                            variant="secondary"
                                            className="text-sm px-3 py-1.5 animate-in fade-in zoom-in-95 duration-500 group-hover-rotate-y-12 shimmer-badge"
                                            style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`, animationFillMode: 'backwards' }}
                                        >
                                            {skill}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )}
      </main>
    </>
  );
}
