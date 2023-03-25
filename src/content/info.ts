export const info = {
  name: "Ta Quan Minh Long",
  jobDescription: "Designer - Editor - Web Developer",
  about: `I enjoy learning and building new things. Working is more than just a way to make a living for me. However, the enjoyment of the job drives perfection in the work. So the only way to produce great work is to enjoy what you do.`,

  experience: [
    {
      name: "Bs'Mart Training Intern",
      location: "MM Mega Market Vietnam",
      startDate: "06/2021",
      endDate: "12/2021",
      description: [
        "- In charge of digitizing training materials for Bs'Mart employees",
        "- Supporting L&OD department in implementing internal projects",
      ],
    },

    {
      name: "Digital Project Executive",
      location: "MM Mega Market Vietnam",
      startDate: "03/2022",
      endDate: "08/2022",
      description: [
        "- Video production for Elearning systems",
        "- In charge of designing internal publications",
        "- Logistics support for L&OD Department",
      ],
    },

    {
      name: "Digital Training Executive",
      location: "MM Mega Market Vietnam",
      startDate: "08/2022",
      endDate: "Present",
      description: [
        "- Video production for Digital Training and Internal Events",
        "- Create design for Internal communications and announcements",
        "- Develop and manage Schedule App for L&OD Department",
      ],
    },
  ],

  contact: [
    { label: "Phone", content: "+84 34 6262 749" },
    { label: "Email", content: "tqml2013@gmail.com" },
    {
      label: "Facebook",
      content: "fb.com/taquanminhlong.382",
      href: "https://www.facebook.com/taquanminhlong.382",
    },
    {
      label: "LinkedIn",
      content: "linkedin.com/in/taquanminhlong",
      href: "https://www.linkedin.com/in/taquanminhlong",
    },
    {
      label: "Address",
      content: `82/14/8B Nguyen Xi Street, Ward 26, Binh Thanh District, Ho Chi Minh City, Vietnam`,
    },
  ],

  education: [
    {
      name: "Economics of Foreign Affairs",
      location: "Foreign Trade University",
      startDate: "2018",
      endDate: "2021",
      description: ["Degree of Bachelor - International Business Economics"],
    },
  ],

  editor_skills: [
    { label: "Adobe Photoshop", value: 88 },
    { label: "Adobe Illustrator", value: 85 },
    { label: "Adobe Audition", value: 80 },
    { label: "Adobe After Effects", value: 65 },
    { label: "Figma", value: 60 },
  ],

  dev_skills: [
    { label: "HTML", value: 95 },
    { label: "CSS", value: 85 },
    { label: "Javascript", value: 80 },
    { label: "Typescript", value: 80 },
  ],

  techs: {
    frontend: [
      {
        label: "UI Library",
        techs: [
          { label: "React JS", href: "https://beta.es.reactjs.org" },
          { label: "Solid JS", href: "https://www.solidjs.com" },
        ],
      },
      {
        label: "Styles & Components",
        techs: [
          { label: "Tailwind CSS", href: "https://tailwindcss.com" },
          { label: "SCSS", href: "https://sass-lang.com" },
          { label: "Mantine UI", href: "https://mantine.dev" },
          { label: "Material UI", href: "https://mui.com" },
        ],
      },
    ],
    backend: [
      {
        label: "Node JS",
        techs: [
          { label: "Express JS", href: "https://expressjs.com" },
          { label: "tRPC", href: "https://trpc.io" },
        ],
      },
      {
        label: "Database",
        techs: [
          { label: "Prisma ORM", href: "https://www.prisma.io/" },
          { label: "Supabase", href: "https://supabase.com" },
          { label: "PlanetScale", href: "https://planetscale.com" },
          { label: "MongoDB", href: "https://www.mongodb.com" },
        ],
      },
    ],
    frameworks: [
      { label: "Remix", href: "https://remix.run" },
      { label: "Next JS", href: "https://nextjs.org" },
      { label: "SolidStart", href: "https://start.solidjs.com" },
      { label: "QwikCity", href: "https://qwik.builder.io" },
      { label: "Nest JS", href: "https://nestjs.com" },
    ],
  },
  projects: [
    {
      title: "MMVN Internal Survey",
      thumbnail: "/assets/images/mmvn-internal-survey.png",
      githubUrl: "https://github.com/TaQuanMinhLong/mmvn.internalsurvey",
      liveUrl: "https://internalsurvey-mmvn.vercel.app/",
    },
  ],
};
