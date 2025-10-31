
import type { Experience, Education, Project, TeachingExperience, ResearchItem } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";
import { 
    Briefcase, GraduationCap, Lightbulb, Globe, Cog, Users, Heart, Star, Megaphone, 
    Gamepad2, Calendar, BookUser, BookMarked, Bot, Activity, Smartphone, Pizza, Play, FlaskConical,
    ClipboardCheck
} from 'lucide-react';
import Image from "next/image";

type Item = Experience | Education | Project | TeachingExperience | ResearchItem;

type ResumeSectionProps = {
  items: Item[];
  category: string;
};

const getIcon = (item: Item, categoryTitle: string) => {
    const title = ('title' in item ? item.title : 'degree' in item ? item.degree : 'name' in item ? item.name : '').toLowerCase();
    const category = categoryTitle.toLowerCase();

    if (category.includes("teaching experience")) {
        if (title.includes("teaching assistant")) return <BookUser className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("tutor")) return <BookMarked className="h-6 w-6 text-primary shrink-0" />;
        return <Briefcase className="h-6 w-6 text-primary shrink-0" />;
    }
    if (category.includes("work experience") || category === "experience") {
        if (title.includes("web developer")) return <Globe className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("back-end")) return <Cog className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("game dev")) return <Gamepad2 className="h-6 w-6 text-primary shrink-0" />;
        return <Briefcase className="h-6 w-6 text-primary shrink-0" />;
    }
    if (category.includes("extra-curricular")) {
        if (title.includes("volunteer")) return <Heart className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("event lead")) return <Star className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("campus ambassador")) return <Megaphone className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("event organizer")) return <Calendar className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("student event assistant")) return <Users className="h-6 w-6 text-primary shrink-0" />;
        return <Users className="h-6 w-6 text-primary shrink-0" />;
    }
    if (category.includes("education")) {
        return <GraduationCap className="h-6 w-6 text-primary shrink-0" />;
    }
    if (category.includes("projects")) {
        if (title.includes("kudosflow")) return <Star className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("emonarrate")) return <Bot className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("dermai")) return <Activity className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("applego")) return <Smartphone className="h-6 w-6 text-primary shrink-0" />;
        if (title.includes("eat & chill")) return <Pizza className="h-6 w-6 text-primary shrink-0" />;
        return <Lightbulb className="h-6 w-6 text-primary shrink-0" />;
    }
    if (category.includes("research")) {
        if ('type' in item && item.type === 'Reviewer') {
            return <ClipboardCheck className="h-6 w-6 text-primary shrink-0" />;
        }
        return <FlaskConical className="h-6 w-6 text-primary shrink-0" />;
    }
    return null;
}

const projectImages: Record<string, { src: string; alt: string }> = {
    'KudosFlow': { src: "/KudosFlow1.png", alt: "KudosFlow screenshot" },
    'AppleGo': { src: "/Applego1.png", alt: "AppleGo screenshot" },
    'DermAI': { src: "/dermai.png", alt: "DermAI screenshot" },
    'Eat & Chill': { src: "/Eatchill.png", alt: "Eat & Chill screenshot" },
    'Emonarrate': { src: "/emonarrate.png", alt: "Emonarrate screenshot" },
};

export function ResumeSection({ items, category }: ResumeSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => {
        
        let projectImage = null;
        if ('name' in item && item.name) {
            for (const key in projectImages) {
                if (item.name.includes(key)) {
                    projectImage = projectImages[key];
                    break;
                }
            }
        }
        
        return (
          <Card 
            key={index} 
            className={cn(
              "bg-card/70 backdrop-blur-sm border-white/10 rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 h-full flex flex-col overflow-hidden"
            )}
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
          >
            {projectImage && (
              <div className="w-full">
                <Image
                  src={projectImage.src}
                  alt={projectImage.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            )}
            <div className="flex flex-col flex-grow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 font-headline text-xl">
                  {getIcon(item, category)}
                  {'url' in item && item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {'title' in item ? item.title : 'degree' in item ? item.degree : 'name' in item ? item.name : ''}
                    </a>
                  ) : (
                    <span>{'title' in item ? item.title : 'degree' in item ? item.degree : 'name' in item ? item.name : ''}</span>
                  )}
                </CardTitle>
                <div className="pt-2">
                  <p className="text-primary font-semibold text-sm">
                    {'organization' in item ? item.organization.toUpperCase() : 
                    'university' in item ? item.university.toUpperCase() : 
                    'conference' in item && item.conference ? item.conference : ''}
                  </p>
                  {'date' in item && <p className="text-xs text-muted-foreground mt-1">{item.date}</p>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                {'details' in item && item.details && item.details.length > 0 && (
                  <ul className="space-y-3 text-muted-foreground">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Play className="h-3 w-3 mt-1 shrink-0 fill-current text-primary/80" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {'courses' in item && <p className="text-sm text-muted-foreground mt-4"><strong>Relevant Courses:</strong> {item.courses}</p>}
              </CardContent>
            </div>
          </Card>
        )
      })}
    </div>
  );
}
