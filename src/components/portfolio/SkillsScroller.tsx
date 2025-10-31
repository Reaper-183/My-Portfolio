"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { resume } from "@/lib/resume-data";
import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiR,
  SiJavascript,
  SiAmazon,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithubactions,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiPandas,
  SiOpengl,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiOracle,
} from "@icons-pack/react-simple-icons";

const allSkills = [
  ...resume.skills.languageAndFrameworks,
  ...resume.skills.cloudAndDevOps,
  ...resume.skills.databasesAndPlatforms,
  ...resume.skills.mlAndDataTools,
];

const iconMap: { [key: string]: React.ComponentType<any> } = {
  "C++": SiCplusplus,
  Python: SiPython,
  Java: SiOracle, // Using SiOracle for Java as SiJava is not available
  SQL: SiMysql,
  HTML: SiHtml5,
  CSS: SiCss3,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  Express: SiExpress,
  Django: SiDjango,
  R: SiR,
  JavaScript: SiJavascript,
  AWS: SiAmazon,
  Docker: SiDocker,
  Linux: SiLinux,
  Git: SiGit,
  "GitHub Actions": SiGithubactions,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Tensorflow: SiTensorflow,
  PyTorch: SiPytorch,
  "Jupyter Notebook": SiJupyter,
  Pandas: SiPandas,
  OpenGL: SiOpengl,
  "Scikit-learn": SiScikitlearn,
  OpenCV: SiOpencv,
  NumPy: SiNumpy,
};

const Scroller = ({
  children,
  speed = "slow",
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: "fast" | "slow";
  direction?: "left" | "right";
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="scroller"
      data-speed={speed}
      data-direction={direction}
    >
      <div className="scroller__inner flex gap-8 py-4 w-max flex-nowrap">
        {children}
      </div>
    </div>
  );
};

export function SkillsScroller() {
  const skillsWithIcons = allSkills
    .map((skill) => ({
      name: skill,
      Icon: iconMap[skill],
    }))
    .filter((skill) => skill.Icon); // Only include skills that have a corresponding icon

  if (skillsWithIcons.length === 0) {
    return null;
  }
  
  const midPoint = Math.ceil(skillsWithIcons.length / 2);
  const firstRowSkills = skillsWithIcons.slice(0, midPoint);
  const secondRowSkills = skillsWithIcons.slice(midPoint);

  const SkillPill = ({ name, Icon }: { name: string; Icon: React.ComponentType<any> }) => (
    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors duration-300">
      <Icon className="w-6 h-6" />
      <span className="font-medium text-base">{name}</span>
    </div>
  );

  return (
    <section className="w-full">
        <div className="flex flex-col gap-4">
            <div>
                <Scroller speed="slow" direction="left">
                    {firstRowSkills.map(({ name, Icon }) => (
                        <SkillPill key={name} name={name} Icon={Icon} />
                    ))}
                </Scroller>
            </div>
            <div>
                <Scroller speed="slow" direction="right">
                    {secondRowSkills.map(({ name, Icon }) => (
                        <SkillPill key={name} name={name} Icon={Icon} />
                    ))}
                </Scroller>
            </div>
        </div>
    </section>
  );
}

    