import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sauransh Bhardwaj",
  initials: "SB",
  url: "https://sauransh.com/",
  location: "Philadelphia, PA",
  locationLink: "https://www.google.com/maps/place/Philadelphia/",
  description:
    "Software Developer, Entrepreneur, Podcaster, and Creator passionate about building digital products. Serial Builder and Author of 'Introduction to Web3.'",
  summary:
    "I am a sophomore at Drexel University. My interests includes AI, Blockchain, and Finance. Currently building [VidyaVerse](https://vidyaverse.in/) which is a learn, play, earn platform for non-native web3 users. In the past, I built a [social media marketing agency](/#hackathons) and scaled it to $1000 MRR, interned at [various startups](/#work) in silicon valley & India, and built a [medical resources platform](/#hackathons) during COVID-19. I host entrepreneurs (under 25) at my [podcast](https://open.spotify.com/show/6deAP5LiLg6iQQYBaCALaO?si=74b30f72dc634f3d) and create [storytelling content](https://www.instagram.com/_sauransh/).",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "C", 
    "JavaScript", 
    "TypeScript",
    "Next.js", 
    "React", 
    "Node.js", 
    "Go",
    "SQL (Postgres)", 
    "Dart", 
    "MATLAB", 
    "HTML/CSS",
    "Material-UI", 
    "Fast API", 
    "WordPress", 
    "Svelte", 
    "Django",
    "Git", 
    "Docker", 
    "VS Code", 
    "PyCharm", 
    "Flutter", 
    "NumPy", 
    "Matplotlib",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sauransh.bhardwaj@drexel.edu",
    tel: "+1 (267) 261-8369",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sauranshbhardwaj/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sauranshbhardwaj/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sauranshh",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@sauranshbhardwaj",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "VidyaVerse",
      href: "https://vidyaverse.in",
      badges: [],
      location: "Full-time",
      title: "Cofounder & CEO",
      logoUrl: "/vidyaverse.png",
      start: "January 2022",
      end: "Present",
      description:
        "VidyaVerse is a Web3 for GenZ Platform, where we are building an incentive-based & personalized learning Platform for non-native (but) curious users in Web3. We have partnered with an SF-based accelerator, have over 15000 Users, 20-people team, and we are raising our pre-seed as of now.",
    },
    {
      company: "Extern",
      badges: [],
      href: "https://extern.com",
      location: "Remote",
      title: "Digital Marketing Extern",
      logoUrl: "/extern.webp",
      start: "September 2024",
      end: "October 2024",
      description:
        "During this externship, I utilized essential SEO tools like SEMRush and Google Keyword Planner, developed and refined keyword strategies, and aligned content with SEO goals. Additionally, harnessed AI tools like ChatGPT for content creation, SEO-optimized copy to boost online visibility and user engagement.",
    },
    {
      company: "Webacy",
      href: "https://webacy.com/",
      badges: [],
      location: "Remote",
      title: "Data Analyst Intern",
      logoUrl: "/webacy.jpeg",
      start: "July 2024",
      end: "August 2024",
      description:
        "Through a series of four hands-on projects, mastered the art of identifying, labeling, validating, and analyzing smart contract vulnerabilities. Gained the expertise (and tools) needed to safeguard the Web3 ecosystem while preparing for exciting careers in blockchain security and data analytics.",
    },
    {
      company: "Merge Card",
      href: "",
      badges: [],
      location: "Remote",
      title: "Marketing Intern",
      logoUrl: "/merge.jpeg",
      start: "May 2022",
      end: "September 2022",
      description:
        "Closely worked with Berkeley founders. Researched about Fin-Tech Markets in the United States, analyzed customer profiles, revenue model, and helped streamline customer acquisition journey.",
    },
    {
      company: "SavaHire",
      href: "https://li.me/",
      badges: [],
      location: "New Delhi, India",
      title: "Tech Chad",
      logoUrl: "/savahire.png",
      start: "May 2022",
      end: "August 2022",
      description:
        "Served as the Tech Chad at SavaHire. Built client dashboards on Bubble and efficient systems (for operations) for web3 startups",
    },
    {
      company: "IIT Roorkee",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Uttarakhand, India",
      title: "Web Development Intern",
      logoUrl: "/iit-roorkee.svg",
      start: "March 2021",
      end: "September 2021",
      description:
        "Interned under Professor Raksha Sharma. Worked with junior students on a club project.",
    },
  ],
  education: [
    {
      school: "Drexel University",
      href: "https://drexel.edu",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "/drexel-uni.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "The Knowledge Society",
      href: "https://www.tks.world/",
      degree: "Innovate Program",
      logoUrl: "/tks.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Blue Bells Model School",
      href: "https://bbms.bluebells.org/",
      degree: "High School Diploma",
      logoUrl: "/bbms.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Trade Strategy Bot",
      href: "",
      dates: "October 2024",
      active: true,
      description:
        "Developed a Trading Strategy Bot designed to help users execute predefined trading strategies by placing and managing orders based on market conditions.",
      technologies: [
        "Typescript",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sauranshbhardwaj/trade-strategy-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/trade-strategy.mp4",
    },
    {
      title: "Plinko Game",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Developed the Plinko Game from [Stake.com](https://stake.us/casino/games/plinko) featuring ball trajectory based on random left or right movements after each collision; including backend logic for game simulations and player outcome management.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "Express.js",
        "Canvas API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sauranshbhardwaj/plinko-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/plinko-game.mp4",
    },
    {
      title: "Logo Maker",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Developed a responsive and efficient Logo Maker web app which allows users to create custom logos (icons or color images) and download them in high-resolution PNG format.",
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://logo-maker-cyan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sauranshbhardwaj/logo-maker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/logo-maker.png",
      video: "",
    },
    {
      title: "VidyaVerse",
      href: "",
      dates: "January 2022 - Present",
      active: true,
      description:
        "Developing VidyaVerse which is a learn, play, and earn platform for non-native (but) curious users in Web3.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://vidyaverse.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sauranshbhardwaj/VidyaVerse-Version-3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vidyaverse-website.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Drexel Consulting Group",
      dates: "October 2024 - Present",
      location: "Philadelphia, PA",
      description:
        "Student-led and run initiative that provides business consulting services to Drexel student entrepreneurs. We help our members learn about and connect with consulting in the form of speaker panels from industry representatives, hosting case competitions, and general community building.",
      image:
        "/drexelconsulting.png",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://dragonlink.drexel.edu/organization/drexelconsultinggroup",
      },]
    },
    {
      title: "Headstarter Fellowship",
      dates: "July 2024 - September 2024",
      location: "Philadelphia, PA",
      description:
        "Over the course of 7 weeks, I developed five AI projects, including a final project where the goal was to achieve either 1,000 sign-ups on a waitlist, create 1,000 accounts, or generate $1,000 in revenue for a startup; whereas I got 600+ sign-ups.",
      image:
        "/headstarter.jpeg",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://headstarter.co/",
      },]
    },
    {
      title: "Close School of Entrepeneurship",
      dates: "April 2024 - Present",
      location: "Philadelphia, PA",
      description:
        "Among few freshmen to ever be selected as the Resident Founder. Leverage entrepreneurial resources & mentorship through the incubator.",
      image:
        "/close.png",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://drexel.edu/close/startup-resources/incubate-your-startup/current/VidyaVerse/",
      },]
    },
    {
      title: "Drexel Computational Design",
      dates: "May 2024 - Present",
      location: "Philadelphia, PA",
      description:
        "Currently leading the club as the Vice President. Strategically plan & execute events; provide mentorship & engage in research projects. Engineer prototypes using computational design (MATLAB) to solve unmet medical needs.",
      image:
        "/dcd.jpeg",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://drexel.campuslabs.com/engage/organization/dcd",
      },]
    },
    {
      title: "The Triangle",
      dates: "April 2024 - Present",
      location: "Philadelphia, PA",
      description:
        "Develop business strategies for revenue, budgeting, and advertising to ensure growth. Oversee development & maintenance of website & utilize analytics to track metrics.",
      image:
        "/triangle.png",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://www.thetriangle.org/",
      },]
    },
    {
      title: "TreeHacks at Stanford",
      dates: "February 2024",
      location: "Palo Alto, California",
      description:
        "Built a decentralized app with a team of 3 hackers. Attended the 3-day event as a first-time hacker. Networked with various Stanford entrepreneurs.",
      image:
        "/treehacks.png",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://www.treehacks.com/",
      },]
    },
    {
      title: "Hack for Impact at Berkeley",
      dates: "February 2024",
      location: "Berkeley, California",
      description:
        "",
      image:
        "/hack4impact.jpeg",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://hackforimpact.calblueprint.org/",
      },]
    },
    {
      title: "Shut Up Sauransh",
      dates: "January 2023 - Present",
      location: "",
      description:
        "An unfiltered podcast where I talk about everything on the intersection of money, startups, hustle, and life. You get to hear crazy ideas, unheard perspectives, and mind-bending conversations from me and some of the best people in the game!",
      image:
        "/shutup.png",
      links: [{
        title: "Podcast",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://open.spotify.com/show/6deAP5LiLg6iQQYBaCALaO?si=38ff1dd37bef441a",
      },]
    },
    {
      title: "The Boring Media",
      dates: "June 2022 - February 2023",
      location: "New Delhi, India",
      description:
        "Built a social media marketing agency for podcasters, first-time founders, and business coaches. We helped them grow their online presence, build systems for social media automation, etc. Crossed $1000 MRR after running it for 8 months, then shut it off to focus on bigger things.",
      image:
        "/boringmedia.jpeg",
      links: []
    },
    {
      title: "Jagriti Yatra",
      dates: "December 2022 - January 2023",
      location: "India",
      description:
        "Attended the 14-day (and 8000-kms) entrepreneurship train journey. Travelled 10 states + 12 cities around India and attended various entrepreneurial events. Awarded 100% scholarship and was the 'youngest yatri' at 18.",
      image:
        "/jy.jpeg",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://www.jagritiyatra.com/",
      },]
    },
    {
      title: "Indo-Hungary Conference",
      dates: "2022",
      location: "",
      description:
        "Research Fellow under Prof. Sharma and his team of PhD students. Papers Published: Hand Sign Recognition using Mobile Net Deep Neural Architecture, IMDB Movie Review Sentiment Analysis, IOT Based Attendance System with COVID-19 Protection.",
      image:
        "/ijarse.gif",
      links: [
        {
        title: "Paper 1",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://ijepas.com/wp-content/uploads/2023/03/IJEPAS-153.pdf",
        },
        {
          title: "Paper 2",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.ijarse.com/images/fullpdf/1667901005_B1513.pdf",
        },
    ]
    },
    {
      title: "Harvard Asia Conference",
      dates: "August 2022",
      location: "New Delhi, India",
      description:
        "Attended the 5-day Harvard Asia Conference in New Delhi. Met executives from the World Bank, IMF, Microsoft, people from other big decision-making conglomerates, and over five hundred delegates from all over the world.",
      image:
        "/hpair.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hpair.org/",
        },
      ]
    },
    {
      title: "Indian Achievers' Award",
      dates: "2022",
      location: "",
      description:
        "Awarded the 'Youngest Entrepreneur' Award at 18. The process included rigorous interviews, pitches, etc. This award is associated with VidyaVerse - the learn, play, earn platform I have been building.",
      image:
        "/iaa.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.iafindia.com/",
        },
      ]
    },
    {
      title: "Young Entrepreneurs Academy",
      dates: "August 2021 - January 2022",
      location: "",
      description:
        "Participated in a 6-month startup accelerator program for teenagers to build foundation in entrepreneurship, marketing, and finance. Received $500 prize.",
      image:
        "/yea.png",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://yeausa.org/",
        },]
    },
    {
      title: "Government of India",
      dates: "July 2021 - September 2021",
      location: "New Delhi, India",
      description:
        "Worked on various issues: environment (promoting conservation), drug abuse (working with counselors and recovering teens), and COVID-19 (educating on My Covid Guide). Participated in the 7th International Day of Yoga, and performed poses at Morarji Desai National Institute of Yoga (telecast on national TV, addressed by Prime Minister Modi). ",
      image:
        "/govtofindia.png",
      links: []
    },
    {
      title: "My Covid Guide",
      dates: "April 2021 - September 2021",
      location: "New Delhi, India",
      description:
        "Built a one-stop COVID-19 resources platform. Facilitated over 65 patients in Delhi, India. And catered over 150k views across platforms, 5000 followers, and a community of 2000 volunteers working live for about 8 weeks.",
      image:
        "/mycovidguide.jpeg",
      links: []
    },
    {
      title: "Inspirit AI",
      dates: "July 2021 - August 2021",
      location: "Remote",
      description:
        "Attended a machine learning development program, where I built a Siri-like voice assistant using Python. Through the project I developed a system that recognizes voice commands and performs tasks.",
      image:
        "/inspiritai.jpeg",
      links: [{
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://www.inspiritai.com/",
        },]
    },
    {
      title: "Proton",
      dates: "August 2020 - April 2021",
      location: "New Delhi, India",
      description:
        "Built a STEM learning platform to foster less-taught subjects to teenagers. My first encounter with building something; my first website, my first piece of content, etc. Led a team of 15 people, and wrote over 160 blogs catering over 1 Million impressions on the website.",
      image:
        "/proton.jpeg",
      links: []
    },
    {
      title: "Earth Saviours Foundation",
      dates: "May 2018 - January 2023",
      location: "New Delhi, India",
      description:
        "Facilitated administrative tasks; built medicine reminder charts for senior citizens; counselled over 40 people w/ disabilities.",
      image:
        "/earthsaviours.webp",
      links: []
    },
  ],
} as const;
