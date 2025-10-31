
import type { Resume } from "./types";

const combinedResumeText = `Vinod Kumar
Washington DC | vinod.kumar.sde1@gmail.com | +1(571)473-9592 | LinkedIn
I am a software engineer with experience in full-stack development, machine learning, and cloud computing. Skilled in Python, C++, React.js, and SQL, I’ve built scalable web apps and AI tools, and contributed to research in NLP and deep learning. I aim to apply my skills to build impactful software solutions.

EDUCATION
George Washington University, Master of Science in Computer Science (Aug 2024 - May 2026)
Guru Gobind Singh Indraprastha University, Bachelor of Technology in Computer Science Engineering (Dec 2020 - Jun 2024)

WORK EXPERIENCE
Software Developer, The Third Space, India (Oct 2023 - Dec 2023)
Back-End Developer, Nyadeko, India (Mar 2023 - Aug 2023)
Web Developer, SkyScraper Buildtech, India (Sep 2022 – Dec 2022)
Game Dev & Graphics Head, The Invincibles, India (Mar 2023 - Jan 2024)
Student Event Assistant, GWU (May 2025)
Volunteer, Comic Con, India (Dec 2023)
Event Lead, (IEEE) Technorax V9.0, India (Oct 2023)
Campus Ambassador, Intern’s Tech, India (July 2023 - Aug 2023)
Event Organizer, Theatre Workshop by NGO (UMANG, NSD), India (2015 – 2019 Summers)

TEACHING EXPERIENCE
Undergraduate Teaching Assistant, Guru Gobind Singh Indraprastha University (Jan 2023 - May 2023)
Volunteer Tutor, Remote Teaching Initiative (Mar 2020 - Aug 2021)

PROJECTS
KudosFlow : AI-Powered Recognition Platform (Sept 2025)
Emonarrate: Emotion-Based Caption Generation (May 2024)
DermAI: Skin Cancer Detection System (Dec 2023)
AppleGo: React Js (Web Application) (Aug 2023)
Eat & Chill (May 2023)

RESEARCH EXPERIENCE
Advanced Sentiment Analysis: From Lexicon-Enhanced BERT to Dimensionality Reduction using NLP (ETNCC 24)
Adaptive Deep Reinforcement Learning for Robotic Manipulation in Dynamic Environments (ICDSNS 24)
Towards Resilient Darknet Security: Integrating TL & DET (ISCS IEEE 24)
Dermatological Diagnostics: A unified DL Framework for Skin Lesion and Cancer Classification (ICAC2N 24)
Reviewer for International Conferences: ISCPCS 2024, ETNCC IEEE
`;

export const resume: Resume = {
  name: "Vinod Kumar",
  headline: "Software Engineer | AI/ML Engineer",
  location: "Washington DC",
  email: "vinod.kumar.sde1@gmail.com",
  phone: "+1(571)473-9592",
  linkedin: "https://www.linkedin.com/in/vinodkumar183",
  summary: "Driven by a passion for building intelligent and scalable solutions, I bridge the gap between full-stack development and cutting-edge AI. From crafting real-time web applications to deploying deep learning models, my focus is on creating software that is both powerful and user-centric.",
  pdf: "/Vinod_Kumar_Portfolio_Resume.pdf",
  rawText: combinedResumeText,
  education: [
    {
      university: "George Washington University",
      degree: "Master of Science in Computer Science",
      date: "Aug 2024 - May 2026",
      courses: "Algorithms, Machine Learning, Systems Architecture, Computer Graphics",
    },
    {
      university: "Guru Gobind Singh Indraprastha University",
      degree: "Bachelor of Technology in Computer Science Engineering",
      date: "Dec 2020 - Jun 2024",
      courses: "Machine Learning, Data Structures, Software Engineering, Artificial Intelligence",
    },
  ],
  experience: [
    {
      title: "Software Developer",
      organization: "The Third Space, India",
      date: "Oct 2023 - Dec 2023",
      details: [
        "Designed and maintained backend microservices using Java (Spring Boot) and Python (FastAPI), improving performance and maintainability of core scheduling modules by 25%.",
        "Built automated data pipelines integrating AWS RDS (MySQL) with internal monitoring tools, improving reporting accuracy and reducing manual tracking by 30%."
      ],
    },
    {
      title: "Back-End Developer",
      organization: "Nyadeko, India",
      date: "Mar 2023 - Aug 2023",
      details: [
        "Built a responsive full-stack website with React and Node.js, integrating analytics tools tracking user behavior, leading to actionable insights enhancing conversion rates by 15% in first quarter post-launch.",
        "Collaborated with design teams crafting an engaging interface, ensuring seamless cross-device and browser user experience and increasing engagement by 20%.",
      ],
    },
    {
      title: "Web Developer",
      organization: "SkyScraper Buildtech, India",
      date: "Sep 2022 - Dec 2022",
      details: [
        "Developed a full-stack web application using React, Node.js and MongoDb, enhancing interactions and raising user retention by 40% and positive feedback from 90% of users surveyed.",
        "Automated client support workflows via email integration and boosted workflow efficiency by designing interactive webpages in JavaScript, improving communication and taking down manual inquiries by 30%.",
      ],
    },
    {
        title: "Game Dev & Graphics Head",
        organization: "The Invincibles, India",
        date: "Mar 2023 - Jan 2024",
        details: [
          "Led Game-Dev projects and managed a team of developers and designers, creating a community.",
          "Organized gaming competitions and workshops to promote game development and foster a collaborative community.",
        ],
    },
  ],
  extracurricular: [
    {
        title: "Student Events Specialist",
        organization: "(Office of Alumni Relations) GWU",
        date: "Oct 2025",
        details: [
          "Assisted thousands of alumni and families by managing credential check-in, providing efficient service and resolving inquiries during a major university event.",
          "Coordinated guest flow and supported multiple operational stations to ensure a seamless and organized attendee experience.",
        ],
    },
    {
      title: "Student Administrative Assistant",
      organization: "(Business Services) GWU",
      date: "Aug 2025",
      details: [
        "Supported the U-Pass program by assisting students and faculty, providing courteous and timely service during distribution and inquiries.",
        "Maintained records in Excel, ensuring accuracy and responsiveness for lost or replaced passes."
      ],
    },
    {
        title: "Student Event Assistant",
        organization: "(Commencement) GWU",
        date: "May 2025",
        details: [
          "Assisted with coordination and logistics during GW’s graduation ceremonies at Smith Center and the National Mall, performing guest support duties including ticket scanning and guiding attendees.",
          "Supported event operations to ensure a smooth experience for graduates and their families.",
        ],
    },
    {
        title: "Volunteer",
        organization: "Comic Con, India",
        date: "Dec 2023",
        details: [
          "Assisted with event management, attendee coordination, and exhibitor support, ensuring smooth operations throughout this 3 day event.",
          "Managed participant activities and helped organize gaming tournaments at the Lenovo x AMD booth, contributing to a seamless competitive experience.",
        ],
    },
    {
        title: "Event Lead",
        organization: "(IEEE) Technorax V9.0, India",
        date: "Oct 2023",
        details: [
          'Led the organization of Technorax V9.0, the largest technical fest at ADGITM, Organized and managed multiple events including hackathon "T-Hacks," the BGMI LAN event "Ranbhoomi," ensuring smooth execution and audience engagement.',
          "Assisted in promotional campaigns and outreach efforts to maximize student participation.",
        ],
    },
    {
        title: "Campus Ambassador",
        organization: "Intern’s Tech, India",
        date: "July 2023 - Aug 2023",
        details: [
          "Promoted the company’s events and services through targeted campaigns and social media outreach, boosting student engagement.",
          "Organized outreach programs, enhancing awareness and participation also created and distributed promotional content to drive event success.",
        ],
    },
    {
        title: "Event Organizer",
        organization: "Theatre Workshop by NGO (UMANG, NSD), India",
        date: "2015 – 2019 (Summers)",
        details: [
          "Assisted in organizing theatre workshops, coordinating with artists and volunteers and managed logistics and scheduling, ensuring smooth operations for performances.",
          "Facilitated community outreach, engaging participants and promoting cultural events."
        ]
    },
  ],
  teachingExperience: [
    {
        title: "Undergraduate Teaching Assistant",
        organization: "Guru Gobind Singh Indraprastha University",
        date: "Jan 2023 - May 2023",
        details: [
            "Assisted faculty in grading assignments and preparing course materials for Data Structures and Algorithms course.",
            "Supported students by explaining assignments, debugging code and reviewing algorithms."
        ]
    },
    {
        title: "Volunteer Tutor",
        organization: "Remote Teaching Initiative",
        date: "Mar 2020 - Aug 2021",
        details: [
            "Conducted online classes for elementary students during the pandemic, delivering lessons in math and science.",
            "Designed engaging lesson plans and one-on-one tutoring to support personalized learning and academic growth."
        ]
    }
  ],
  projects: [
    {
        name: "KudosFlow : AI-Powered Recognition Platform",
        date: "Sept 2025",
        url: "https://kudos-flow.vercel.app/",
        details: [
            "Architected and developed a full-stack, real-time employee recognition platform using Next.js, React, and GraphQL, increasing potential employee engagement by providing a modern channel for peer-to-peer appreciation.",
            "Integrated Google's Gemini AI model via Genkit to create a novel \"Kudos Assistant,\" which dynamically suggests relevant emojis and keywords, improving message quality and reducing the time to write recognitions.",
            "Engineered a role-aware analytics dashboard with custom charts (Recharts) to provide managers with actionable insights into team morale, recognition trends, and top-performing keywords."
        ]
    },
    {
        name: "Emonarrate: Emotion-Based Caption Generation",
        date: "May 2024",
        url: "https://colab.research.google.com/drive/1T4m58iqYBkfb1zuQZokFZX5YglhLOdMX?usp=sharing",
        details: [
            "Designed NLP based system using BERT/GPT and the YouTube Transcript API generating huge captions in less time, performing semantic analysis and emotion detection on large-scale captions and achieving 87% accuracy.",
            "Extracted and processed transcripts and image-caption pairs, restructuring semantic alignment by 15% through feature extraction with CNNs.",
            "Fine-tuned the model on a custom dataset of emotional narratives, improving caption relevance by 25% compared to baseline models."
        ]
    },
    {
        name: "DermAI: Skin Cancer Detection System",
        date: "Dec 2023",
        details: [
            "Coded and deployed DermAI, a deep learning tool in Python to classify skin lesion, optimized image analysis processes, enabling evaluation of 1,000+ images daily, improved screening capabilities for dermatologists.",
            "Increased system detection accuracy by 15%, upgraded accessibility to skin health information, making early-stage diagnosis possible through system.",
            "Integrated a Grad-CAM visualization layer to provide visual explanations for the model's predictions, increasing trust and interpretability for dermatologists."
        ]
    },
    {
        name: "AppleGo: React Js (Web Application)",
        date: "Aug 2023",
        url: "https://applego-price-comparison.vercel.app/",
        details: [
            "Created a React web application for deals on Apple devices through authorized Apple stores, reduced time for price comparison by 50% and maximized sales for stores.",
            "Reduced physical store visits by 40%, saving customer time and improving e-commerce engagement.",
            "Implemented a dynamic filtering and sorting system, allowing users to find the best deals based on location, price, and model, which improved user session duration by 35%."
        ]
    },
    {
        name: "Eat & Chill",
        date: "May 2023",
        details: [
            "Led a team of 3 and implemented a responsive restaurant website using HTML, CSS, and JavaScript, showcasing restaurant's menu, location and contacts, driving a 25% boost in sales.",
            "Integrated a reservation form that directly connected to the restaurant’s booking system, streamlining the reservation process and reducing phone-in bookings by 40%."
        ]
    }
  ],
  research: [
    // Conference Papers
    { title: "Advanced Sentiment Analysis: From Lexicon-Enhanced BERT to Dimensionality Reduction using NLP", conference: "ETNCC 24", url: "https://ieeexplore.ieee.org/document/10767483", type: "Conference Paper" },
    { title: "Adaptive Deep Reinforcement Learning for Robotic Manipulation in Dynamic Environments", conference: "ICDSNS 24", url: "https://ieeexplore.ieee.org/document/10690981", type: "Conference Paper" },
    { title: "Towards Resilient Darknet Security: Integrating Transfer Learning and Dynamic Ensemble Techniques", conference: "ISCS IEEE 24", url: "https://ieeexplore.ieee.org/document/10581038", type: "Conference Paper" },
    { title: "Dermatological Diagnostics: A unified DL Framework for Skin Lesion and Cancer Classification", conference: "ICAC2N 24", url: "https://ieeexplore.ieee.org/document/10895856", type: "Conference Paper" },
    // Journal Papers
    { title: "Optimizing Sentiment Analysis in Hindi Poetry: A Hybrid Model Unifying Deep Learning, Machine Learning, and Metaheuristic Techniques", url: "https://www.researchgate.net/publication/376828203_Optimizing_Sentiment_Analysis_in_Hindi_Poetry_A_Hybrid_Model_Unifying_Deep_Learning_Machine_Learning_and_Metaheuristic_Techniques", type: "Journal Paper" },
    { title: "Dynamic Edge Weights and Density Clustering: Advancing Single-Stage 3D Object Detection with Graph Neural Networks in Point Clouds", url: "https://www.researchgate.net/publication/376681652_Dynamic_Edge_Weights_and_Density_Clustering_Advancing_Single-Stage_3D_Object_Detection_with_Graph_Neural_Networks_in_Point_Clouds", type: "Journal Paper" },
    { title: "Revolutionizing Crowdfunding Using Blockchain Technology", url: "https://www.researchgate.net/publication/376374680_Revolutionizing_Crowdfunding_Using_Blockchain_Technology", type: "Journal Paper" },
    { title: "Enhancing Nuclear Medicine Through Innovative AI Models: Integrating Large Language Models and SmoothQuant for Advanced Imaging Precision", url: "https://www.researchgate.net/publication/376140459_Enhancing_Nuclear_Medicine_Through_Innovative_AI_Models_Integrating_Large_Language_Models_and_SmoothQuant_for_Advanced_Imaging_Precision", type: "Journal Paper" },
    { title: "AppleGo: React Js (Web Application)", url: "https://www.researchgate.net/publication/375089076_AppleGo_React_Js_Web_Application", type: "Journal Paper" },
    // Reviewer
    { title: "Reviewer for the International Conference on Smart Cyber-Physical Systems (ISCPCS 2024)", type: 'Reviewer' },
    { title: "Reviewer for International Conf. on Emerging Trends in Networks and Computer Communications (ETNCC 2024)", type: 'Reviewer' },
  ],
  skills: {
    languageAndFrameworks: ["C++", "Python", "Java", "SQL", "HTML", "CSS", "React.js", "Node.js", "Next.js", "Express", "Django", "R", "JavaScript"],
    cloudAndDevOps: ["AWS", "Docker", "Linux", "CI/CD", "Git", "GitHub Actions", "GUI", "UI/UX"],
    databasesAndPlatforms: ["MongoDB", "MySQL", "PostgreSQL", "Frontend", "Backend", "App development", "Webscraping", "Data Modelling"],
    mlAndDataTools: ["Tensorflow", "PyTorch", "Jupyter Notebook", "Pandas", "Matplotlib", "OpenGL", "GPT", "AI Tools", "Scikit-learn", "OpenCV", "NumPy"],
    professionalSkills: ["Administrative Support", "Event Coordination", "Communication", "Project Management", "Academic Support & Mentorship", "Organization & Time Management", "Data Analysis", "Technical Writing & Reporting", "Collaboration"],
  },
};

    