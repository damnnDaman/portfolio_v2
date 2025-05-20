export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My portfolio reflects a blend of creativity and logic, showcasing projects that demonstrate my commitment to crafting elegant solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Always ready to learn and adapt to new technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Angular UI library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to build a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [

  {
    id: 1,
    title: "Shri Bhagvad Geeta Chatbot - Building a Spiritual Companion",
    description: "UPCOMING - A chatbot powered by OpenAI's GPT-3.5, designed to answer spiritual questions based on Bhagavad Gita's teachings. It utilizes LangChain for document retrieval and MongoDB for efficient data storage. The app is built with React.js, TypeScript, and Tailwind CSS, ensuring a responsive and user-friendly interface.",
    
    images: [ {src: "/geeta1.png" , alt:"Bhagvad geeta"}, {src: "/RAP_Ai_HomeScreen.png", alt:"Home Screen"}, {src:"/RAP_Ai_Roasted.png", alt:"Roasted"}, {src:"/Rap_Ai_Bike.png", alt:"Bike"}, {src:"/Rap_Ai_Car.png", alt:"Car"}  ],
    techStackIcons: [{icon: "/openai.png", name: "Open AI"},{icon: "/aws-svgrepo-com.svg", name: "Amazon Web Services"},{icon: "/next.svg", name: "NextJs"}, { icon: "/re.svg", name: "React"}, {icon:"/ts.svg", name: "TypeScript"}, { icon: "/tail.svg", name: "Tailwind CSS"}],
    sourceUrl: "https://github.com/damnnDaman/GeetaChatbot",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 2,
    title: "Code Comprehension",
    description: "Code Comprehension is an AI-powered tool that lets users paste code in various programming languages and instantly receive easy-to-understand summaries. Leveraging Google's Gemini model, it analyzes code structure and logic to generate concise explanations. Users can quickly copy the generated summaries for documentation or learning purposes, making it ideal for students, developers, and anyone seeking to understand unfamiliar code.",
    
    images: [{src:"/codeComprehension.png", alt:"CC logo"}, {src:"/p1.png", alt:"CC editor"}, {src:"/p2.png", alt:"result"},],
    techStackIcons: [{ icon: "/re.svg", name: "ReactJS" }, { icon: "/gemini.png", name: "Gemini AI" }, { icon: "/js.png", name: "JavaScript" }, { icon: "/python.png", name: "Python" }, { icon: "/flask.png", name: "Flask" }, { icon: "/tail.svg", name: "Tailwind CSS" },],
    sourceUrl: "https://github.com/damnnDaman/codeComprehension",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 3,
    title: "Canadian Jobs Vacancies - Data Analysis Project",
    description: "A team project 💡 that analyzes Canadian job vacancies across provinces, occupations, age groups, and geographies using Python. Leveraging Matplotlib and Seaborn, we explored trends and patterns in the job market, providing visual insights into employment opportunities throughout Canada.",
    images: [{src:"/jobs1.png", alt:"logo"}, {src:"/jobs2.png", alt:"data analysis"}, {src:"/jobs3.png", alt:"visualization"},],
    techStackIcons: [ {icon: "/python.png", name: "Python"}, {icon:"/canada.png", name:"canada census data"}, {icon: "/matplot.png", name:"matplot"}, {icon:"/seaborn.png", name:"Seaborn"}, {icon: "/linux.png", name:"linux"},  ],
    sourceUrl: "https://github.com/damnnDaman/CanadianJobs_DataAnalysis",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 4,
    title: "Similar Sites Recommender - chrome Extension",
    description: "Built a Chrome extension that helps users discover alternative websites offering similar content and functionality. Have you ever needed premium features on a site, but wondered if you could find the same value elsewhere for free? This extension finds comparable sites, letting you access the same use case without unnecessary spending.",
  
    images: [{src:"/chrome.png", alt:"chrome"}, {src:"/javascript.png", alt:"Javascript"},],
    techStackIcons: [{ icon: "/chrome.png", name: "chrome" }, { icon: "/javascript.png", name: "javascript"}, {icon:"/html.png", name:"html"}, {icon:"/css.svg", name:"css"}],
    sourceUrl: "",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 5,
    title: "Random Joke Generator",
    description: "A web app that delivers random jokes specifically for computer science nerds! Whether you love recursion more than your own family or think Java and JavaScript are related, this app fetches jokes from the JokeAPI and serves up punchlines about semicolons, infinite loops, and why programmers prefer dark mode. It's the only place where a stack overflow is actually funny.",    
    images: [{src:"/jokes1.png", alt:"Jokes"}, {src:"/jokes2.png", alt:"Jokes"}, {src:"/jokes3.png", alt:"Jokes"},],
    techStackIcons: [{ icon: "/api.png", name: "API" }, { icon: "/javascript.png", name: "javascript" }, { icon: "/html.png", name: "html" }, { icon: "/css.svg", name: "css" }],
    sourceUrl: "https://github.com/damnnDaman/Random_joke_generator",
    liveUrl: "https://trytolaugh.netlify.app/",
    devpostUrl: ""
  },
  

  {
    id: 6,
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play against a friend in this timeless game of strategy. The app features a clean design and is fully responsive, ensuring a great experience on both desktop and mobile devices.",
    images: [{src:"/tic2.png", alt:"tic-tac-toe App"}, {src:"/tic1.png", alt:"tic-tac-toe App"},],
    techStackIcons: [{icon: "/javascript.png", name: "JavaScript"}, { icon: "/css.svg", name: "CSS"}, {icon:"/html.png", name: "HTML"}],
    sourceUrl: "https://github.com/damnnDaman/tic-tac-toe",
    liveUrl: "https://tictactoe-2-player.netlify.app/",
    devpostUrl: ""
  },
  
  
];


export const workExperience = [
  {
    id: 1,
    title: "Software Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Teaching Assistant",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Teaching Assistant",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/damnnDaman"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/damankumar/"
  },
];
