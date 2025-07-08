import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Joyal Jijo",
  initials: "JJ",
  url: "https://joyal-jijo.is-a.dev/",
  location: "New Delhi, India",
  locationLink: "https://maps.app.goo.gl/PjgekN5Tc9LoyjtCA",
  description:
    "Building Efficient AI Systems with Deep Learning & Computer Vision | Web and React Native | Technology & Startups",
  summary:
    "Currently enrolled in [Bachelor of Technology in Artificial Intelligence & Data Science](/#education). Apart from coding, I enjoy traveling, meeting new people, and playing badminton. ",
  avatarUrl: "/me.png",
  skills: [
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "C",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "React Native",
    "Expo",
    "Tailwind",
    "Transformers.js",
    "Redux Toolkit",
    "React Router",
    "Auth.js",
    "JWT",
    "MongoDB",
    "MySQL",
    "Postgres",
    "SupaBase",
    "FireBase",
    "Appwrite",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Numpy",
    "Pandas",
    "Scikit-learn",
    "LangChain",
    "VectorDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "joyal2405@gmail.com",
    tel: "+918287301299",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/joyal-jij0",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joyal-jijo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Joyal_Jij0",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ukumi",
      badges: [],
      href: "https://www.ukumi.ai/",
      location: "Remote",
      title: "Research Intern",
      logoUrl: "/ukumi.jpeg",
      start: "Jan 2025",
      end: "Feb 2025",
      description:
        "By redesigning the primary podcast editing feature with an intuitive, non-timeline-based workflow, I significantly reduced the learning curve for new users. I also researched on-device AI inference using WebGPU and Transformers.js, which enabled client-side processing and allowed me to engineer a client-side solution that replaced a costly external API effectively cutting the feature's recurring processing costs to zero. Additionally, I automated an internal process that previously took a full day, reducing its execution time to just a few minutes.",
    },
    {
      company: "CliqueRaft",
      href: "https://www.cliqueraft.com/",
      badges: [],
      location: "Remote",
      title: "React Native Intern",
      logoUrl: "/cliqueraft.svg",
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "Built a cross platform mobile application for both IOS and Android and an RESTful API backend utilizing React Native, Expo, Node.js, PostgreSQL, MongoDB writing over 7,000 LOC.",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "https://mait.ac.in",
      degree:
        "Bachelor's of Technology in Artificial Intelligence and Data Science (B.Tech)",
      logoUrl: "/mait.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "CSI Innowave Official Website",
      href: "https://www.csiinnowave.com/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "As Lead of Devlopment Team led a team of devs to built the Official Website of CSI chapter MAIT",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Aceternity UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.csiinnowave.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joyal-jij0/csi-v3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfhj4i9hd/video/upload/v1722333922/portfolio/csi_sn5jxx.mov",
    },
    {
      title: "MysteryMessage",
      href: "https://mystrymessage123.netlify.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Anonymous Message web app where users can receive and send anonymous messages. Brands cal also use it for anonymouse true feedback",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MongoDB",
        "Shadcn UI",
        "bcryptjs",
        "JWT",
        "next-auth",
        "resend-email",
        "Vercel AI SDK",
        "Google Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://mystrymessage123.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joyal-jij0/mysteryMessage",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfhj4i9hd/video/upload/v1722338763/portfolio/mysteryMessage_vspslh.mov",
    },
    {
      title: "AttendEase",
      href: "#projects",
      dates: "April 2024",
      active: true,
      description:
        "Automate Attendance marking in Education Institutions using Face Recognition with Precision and Speed",
      technologies: [
        "Expo",
        "React Native",
        "JavaScript",
        "Python",
        "Flask",
        "Google Collab",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfhj4i9hd/video/upload/v1722340956/portfolio/AttendEase_aw3g6z.mp4",
    },
    {
      title: "ReoTube",
      href: "#projects",
      dates: "July 2024",
      active: true,
      description:
        "Developed fully working Youtube using React native and Expo and a Fully Woking YouToube backend using Experss and Node",
      technologies: [
        "React Native",
        "Expo",
        "Native Wind",
        "Supabase",
        "TailwindCSS",
        "Express",
        "Node",
        "Javascript",
        "JWT",
        "Cloudinary",
        "Multer",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joyal-jij0/YouTube-React-Native",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joyal-jij0/youtube-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dfhj4i9hd/video/upload/v1722341209/portfolio/ReoTube_o660ms.mp4",
    },
  ],
  hackathons: [
    {
      title: "Adobe Gensolve National Finalist (Top - 6) ",
      dates: "13 Sept 2024",
      location: "Noida, India",
      description:
        "Built a fully integrated Machine Learning and Computer Vision System to analyze tennis matches, providing real-time player, and ball tracking, as well as event analysis. Implemented OpenCV, TensorFlow, YOLOV5, PyTorch, ResNet-50",
      image:
        "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1733122311/iyt724zaqcfzurbnhbwp.png",
      win: "Natinal Finalist",
      links: [
        {
          title: "Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/joyal-jij0/gameSense",
        },
      ],
    },
    {
      title: "Top 26 Pragati AI for Impact Hackathon | The /Nudge Institute | Meta",
      dates: "May 2025",
      location: "Bengaluru/Gurugram",
      description:
        "Built Krishi Sahayak AI a smart platform that gives Indian farmers hyperlocal weather forecasts, instant pest detection, easy credit access, and more, all in one multilingual app. Delivers hyperlocal weather forecasts, instant pest and disease detection, AI-driven credit scoring, and easy FPO management.",
      image:
        "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1752000973/Screenshot_2025-07-09_at_12.23.33_AM_xpzk8j.png",
        win: "Top 26",
      links: [
        {
          title: "Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/joyal-jij0/pragati",
        },
      ],
    },
    {
      title: "First Runner Up BitByBit, Cognizance",
      dates: "March, 2025",
      location: "IIT Roorkee",
      description:
        "Built a freelance platform designed to make project payments smoother and safer through a milestone-based process. Clients and freelancers can break work into manageable chunks, with payments released as each milestone is completed ensuring trust, transparency, and a hassle-free experience for everyone involved.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAnCAYAAAB5XdqFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVISURBVHgBzVhbUttIFD3dNlTyFWcFESsY+JuaCYy8g7ACyAqAFWCvALICzApsVmBhp2bmD7MCKyuI/4bBlnrOVbdANrIkbFcmp6pLVr90+va9p29b4QfCwG/MMNsF9CcF866O4eeqYxV+AKb46As5DRzxteGqJzUM3ledI5eorFwhmGBNPOK3XY3ahYLy89o19Puq36nnVUaIuhEOPAMTGqhbbtMoRhRu488RKiLCx3NSaRX1mQIeH5XmzCVKC8j2eHyywJeaGruS/CSCbm4jGBWT3L/imGOUQCPyqhLV+dVqme80UAJryXKSgthatBKWEDXfsZTIQ+JTxpjdF6Pge2XbnYXsWNW+uVtP35yoJYJQw5vUqhck6/EZKKUSmYkQt8pkxAD0eQQxdLCFIMA6RLnWb8sGLPiV/N61BHwvRnyE5RQ7MWrXryE3/90cxIzyZQMyfvUt+6RS+Hn9aT0qhm7WKO5CUnYhz21WIqoKiHLAL+5nqn+hG/VpsS8X9UVjsFc3/RHJnbOMWS1lM0S38DXIEJmDeiY0mids3s33NGd1c9siuQu+SHC28IooX0R9WYO1Bs5zmhr2SESP5SqtVNA7SaggCcbPNTMI+fPOkZPF3MMuTuoDbIpoHfrSMDhMjhVqUOeM9CatFeBJW80H19wmSWHcZbmWBbFvkI79B796WAGFaiJnNU+kPnKEnhHerJuh/DwSeeKpZSSyJWi4AF/IieV5BPO8xx90GfFLb2EaWtiMOPCGmVQPqxJNydZR7y5algEXaAzFqi2SasU4uPsXj4dv8Xf4iP1TWv0Er/NJjntsyvi8Rl02WhIR+l9TiGXraSlfCAlJeZ/BXKcf2cbwkpnRnoE+NHb7q8DbxvZY5sxrLLUoLdYgmYkls3+s6Z8Z605ohb1lVkjHusPgmB/L9fmXiFs1fG1na0otSnRF/1iO6Ucd6uJO1lK0Qj8vQMRl0O40OK4L0/eZJLdkZ6pZWLdm+H3ulCu0qIg0rP6lCFk6LDe0VKKjU/i+QtSooRZkk2CxokF0pczgkK9pQB7KuJydyQNTylkzzYHniMrkD3hAupXuqDtGkpM+nUhZ0iNHuuPGU2MfvXRyqwRxS5uhWPHOkZXga9uFxP0SsqH4uhhgjugMBx3rR6ZHwb/ZQq2XWkn8Dfboa7gi9SN+NBQZEgnilp2Kz74xf03ENy3ROSnru0+dsf2yGllzSck7U1lrcsJxTs+Ru5LcZyupAh8y2piK/pk2g16yINVkKhd/d31TKevAXvAETdHaIq22vHBbx8B/IkodHFeLyHzIkbuFwakj05mqJm+Z8d1ze2JVcYmxIxWy7FnLiySpi8x0E853zaDtpNeeJOrFudchKamcIykaKBYbubz1Ce7YFXf5wnLrnq5teOl0OmRp0y93ZL7s3UxVdOoiXHPiU0qQWEkseE9C/hQHFH2cZDsWXY/LruhaEt7VSZoz6uOxI5n6WceSkuCaxxTRp2Uzld3vtRVxvSOpmbFbUk6P/ahxe7Jl7t4kJOUZilTZS97L5NgF30qo2wmCENYSyUcifoTuIJHm4TkaQ7miRJSst7Z/KlkpSUFyyYsTy708S9SL5PqVROcnS0hI6ZUNTs5xY25gfbEtciO+xkWeGGwWdawJkpNon6RZVIwZSWsvr68puN2WfgcbRMGhkUBuo6telzdGtILMhVSIHayIKmleKZxfdotkLoJpYw1shKjVQFOkg/zLctjBGtgIUQH/mDxUS/5ClLsQ1sQGiUrOqIVsuNDUXnZV+V9hI/9gLLlojP0ufmY4sncSZNgQ/gPsBGkPIQPkjQAAAABJRU5ErkJggg==",
      links: [
        {
          title: "Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/joyal-jij0/bitbybit",
        },
      ],
    },
    {
      title: "Most Innovative Project, InnovateX",
      dates: "Aug, 2024",
      location: "MAIT, New Delhi",
      description:
        "Developed a mobile application which lets teachers mark attendance with just a classroom photo. Powered by Python’s face_recognition library, it matches faces in real-time and takes the paperwork out of roll call so Teachers can spend less time counting heads and more time teaching.",
      icon: "public",
      image:
        "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1752002059/mait_itkfyn.webp",
      links: [
        {
          title: "Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/joyal-jij0/attendease",
        },
      ],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // // {
    // //   title: "ETH Waterloo",
    // //   dates: "October 13th - 15th, 2017",
    // //   location: "Waterloo, Ontario",
    // //   description:
    // //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    // //   image:
    // //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    // //   links: [
    // //     {
    // //       title: "Organization",
    // //       icon: <Icons.github className="h-4 w-4" />,
    // //       href: "https://github.com/ethdocnet",
    // //     },
    // //   ],
    // // },
    // // {
    // //   title: "Hack The North",
    // //   dates: "September 15th - 17th, 2017",
    // //   location: "Waterloo, Ontario",
    // //   description:
    // //     "Developed a virtual reality application allowing users to see themselves in third person.",
    // //   image:
    // //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    // //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    // //   links: [
    // //     {
    // //       title: "Streamer Source",
    // //       icon: <Icons.github className="h-4 w-4" />,
    // //       href: "https://github.com/justinmichaud/htn2017",
    // //     },
    // //     {
    // //       title: "Client Source",
    // //       icon: <Icons.github className="h-4 w-4" />,
    // //       href: "https://github.com/dillionverma/RTSPClient",
    // //     },
    // //   ],
    // // },
    // // {
    // //   title: "Hack The 6ix",
    // //   dates: "August 26th - 27th, 2017",
    // //   location: "Toronto, Ontario",
    // //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
