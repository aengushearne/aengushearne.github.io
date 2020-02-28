import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'React Dev for hire', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aengus',
  subtitle: "and I'm a React developer",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileB.jpg',
  paragraphOne: `Experienced JavaScript developer with a background in building and maintaining React web applications for enterprise.`,
  paragraphTwo: `I work mostly on the front-end with a little full-stack, most often with React but also Vue, Mongo, Node, REST API's and GraphQL, supported by Git, Jira, CircleCI and other tools.`,
  paragraphThree: `I am currently available for contract work with established companies and startups. Reach out and let's chat about how I can help with your next project.`,
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experienceData = {
  img: 'profileB.jpg',
  paragraphOne: `Recently, I worked on a complex internal React web app for Montreal office-space as-a-service startup, Breather.`,
  paragraphTwo: `I also developed features for the public facing Breather.com website including work on a self-service management area.`,
  paragraphThree: `Prior to that, I worked on a variety of full-stack Node & React projects for Shopify merchants with LabZed.`,
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'spotification.png',
    title: 'Spotification',
    info: 'Some work-in-progress experimentation with React and the Spotify API.',
    info2: '',
    url: '',
    repo: 'https://github.com/aengushearne/spotification', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'perco.png',
    title: 'Perco',
    info:
      'A React-Native mobile app exploring map functionality, UI approaches such as layering images and transparent gradients and accessing phone features such as dialling a number or launching a web browser.',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.perco&hl=en',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'whitebear.png',
    title: 'whitebear',
    info: `An experiment using the Web Audio API with a touch of HTML5 Canvas. To play, type 'whitebear'.`,
    info2: '',
    url: 'https://aengushearne.github.io/white-bear',
    repo: 'https://github.com/aengushearne/white-bear', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Have a project in mind? Let's talk!`,
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aengushearne/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aengushearne',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
