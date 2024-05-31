import {
    SiCplusplus,
    SiCss3,
    SiFirebase,
    SiJavascript,
    SiPython,
    SiReact,
    SiStyledcomponents,
    SiBootstrap,
    SiPostman,
    SiC,
    SiGit,
    SiMongodb,
    SiGithub,
    SiTypescript,
    SiApachekafka,
    SiFastapi,
} from "react-icons/si";
import { DiPostgresql, DiSass } from "react-icons/di";
import { FaNode } from "react-icons/fa";

import { FaSchool } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";

import { SiNodered } from "react-icons/si";

// HeroSection

export const Name = "Nishant Saxena";

export const MainSkills = [
    "a Web Developer💻",
    1000,
    "a Computer Engineer👨‍💻",
    1000,
    "a tech enthusiast📖",
    1000,
];

export const githubURL = "https://github.com/phoenixx1";

export const linkedinURL = "https://www.linkedin.com/in/nishant-saxena-2609/";

export const mailtoURL = "mailto:nishantsaxena269@gmail.com";

export const fbURL = "https://www.facebook.com/N.S.T.G.21";

export const instagramURL = "https://www.instagram.com/nishant_21_/";

export const mediumURL = "https://medium.com/@nishantsaxena269";

export const resumeURL =
    "https://drive.google.com/file/d/1a8OEERo6VZbneOW52PRN19rJ34k89_ZI/view?usp=sharing";

// Skills

export const Languages = [
    {
        icon: <SiTypescript className="icon" />,
        name: "Typescript",
    },
    {
        icon: <SiJavascript className="icon" />,
        name: "Javascript",
    },
    {
        icon: <SiPython className="icon" />,
        name: "Python",
    },
    {
        icon: <SiC className="icon" />,
        name: "C",
    },
    {
        icon: <SiCplusplus className="icon" />,
        name: "C++",
    },
];

export const FrontendTools = [
    {
        icon: <SiReact className="icon" />,
        name: "ReactJS",
    },
    {
        icon: <SiStyledcomponents className="icon" />,
        name: "Styled-components",
    },
    {
        icon: <DiSass className="icon" />,
        name: "Sass",
    },
    {
        icon: <SiBootstrap className="icon" />,
        name: "Bootstrap",
    },
];

export const BackendTools = [
    {
        icon: <FaNode className="icon" />,
        name: "NodeJS",
    },
    {
        icon: <SiFastapi className="icon" />,
        name: "FastAPI",
    },
    {
        icon: <SiApachekafka className="icon" />,
        name: "Kafka",
    },
    {
        icon: <DiPostgresql className="icon" />,
        name: "PostreSQL",
    },
    {
        icon: <SiMongodb className="icon" />,
        name: "MongoDB",
    },
    {
        icon: <SiGit className="icon" />,
        name: "Git",
    },
    {
        icon: <SiPostman className="icon" />,
        name: "Postman",
    },
    {
        icon: <SiFirebase className="icon" />,
        name: "Firebase",
    },
];

// Experience

export const experience = [
    {
        id: 1,
        type: "education",
        date: "April 2014 - May 2015",
        icon: <FaSchool />,
        bckgrnd: false,
        title: "Global Public School Kota, Rajasthan",
        subtitle: "Secondary Education",
        desc: "Obtained: 90.25%",
        workdesc: [],
    },
    {
        id: 2,
        type: "education",
        date: "April 2016 - May 2017",
        icon: <FaSchool />,
        bckgrnd: true,
        title: "Global Public School Kota, Rajasthan",
        subtitle: "Senior Secondary Education",
        desc: "Obtained: 69.60%",
        workdesc: [],
    },
    {
        id: 3,
        type: "education",
        date: "July 2017 - July 2021",
        icon: <MdSchool />,
        bckgrnd: false,
        title: "NMIMS - Mukesh Patel School of Technology Management & Engineering Shirpur, Maharashtra",
        subtitle: "B.Tech. Computer Science ",
        desc: "Overall CGPA: 3.35/4",
        workdesc: [],
    },
    {
        id: 4,
        type: "work",
        date: "May 2020 - June 2020",
        icon: <MdWork />,
        bckgrnd: true,
        title: "SmartBridge Educational Services Pvt. Ltd. Hyderabad, Telangana",
        subtitle: "Internship",
        desc: "Project Internship",
        workdesc: [
            "NodeRed to deploy the application.",
            "Used IBM Watson to write the ML code.",
        ],
    },
    {
        id: 5,
        type: "work",
        date: "May 2020 - June 2020",
        icon: <MdWork />,
        bckgrnd: false,
        title: "CodeSpeedy Technology Pvt. Ltd. Beldanga, West Bengal",
        subtitle: "Internship",
        desc: "C++ Programmer",
        workdesc: [
            "Wrote C++ code, with explanation and diagram for the website post related to DSA.",
        ],
    },
    {
        id: 6,
        type: "work",
        date: "February 2021 - May 2021",
        icon: <MdWork />,
        bckgrnd: true,
        title: "IotIot Pune, Maharashtra",
        subtitle: "Internship",
        desc: "Frontend Developer",
        workdesc: [
            "Worked on Backend to connect NodeJS to C++.",
            "Completed a frontend using ReactJS.",
        ],
    },
    {
        id: 7,
        type: "work",
        date: "July 2021 - April 2023",
        icon: <MdWork />,
        bckgrnd: false,
        title: "Piramal Capital & Housing Finance, Kurla Mumbai",
        subtitle: "Full-time",
        desc: "Software Development Engineer 1",
        workdesc: [
            "Expertise in Agile methodologies and experience working closely with software development teams to deliver high-quality software solutions.",
            "Proficiency in developing REST APIs using the Python FastAPI web framework and the Node.js Express Framework.",
            "Experience working with SQL and NoSQL databases.",
            "Designed and developed an anomaly detection system that monitors and alerts for all company APIs, drastically reducing the time to detect and resolve issues from several hours to real-time.",
            "Experience with deploying and debugging applications using Docker on CI/CD pipelines and Grafana for system monitoring and observability.",
            "Proficient in utilizing ELK stack for monitoring logs and data visualization, enabling quick and efficient issue resolution.",
        ],
    },
    {
        id: 8,
        type: "work",
        date: "June 2023- Present",
        icon: <MdWork />,
        bckgrnd: true,
        title: "Kenko Health",
        subtitle: "Full-time",
        desc: "Software Development Engineer 2",
        workdesc: [
            "Proficient in designing and developing APIs using NodeJS.",
            "Extensive experience with both SQL and NoSQL databases.",
            "Adept at implementing asynchronous processes for efficient bulk data processing using Kafka.",
            "Contributed to the development of a backend system for a B2B portal, effectively managing a variety of operations using SAGA Patterns.",
            "Automated CD balancing, significantly reducing turnaround time from days or weeks to seconds, and managed transactions totaling Rs. 150 Crore.",
        ],
    },
];

// Projects

export const projects = [
    {
        id: 1,
        title: "dev-portfolio",
        desc: "Personal dev portfolio build using ReactJS.",
        stacks: [<SiReact />, <SiStyledcomponents />, <SiGithub />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
        demo: "https://clone-4234e.web.app/",
    },
    {
        id: 2,
        title: "Amazon Clone",
        desc: "Clone of famous E-comm site Amazon with basic functionalities signup/login using mail and purchasing product.",
        stacks: [<SiReact />, <SiCss3 />, <SiFirebase />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
        demo: "https://clone-4234e.web.app/",
    },
    {
        id: 3,
        title: "COVID-19 Tracker",
        desc: "Case tracker for covid-19 showing active cases, deaths & recovery for whole world, with graph & map representation.",
        stacks: [<SiReact />, <SiStyledcomponents />, <SiFirebase />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/covid-19-tracker",
        demo: "https://covid-19-tracker-f6549.web.app/",
    },
    {
        id: 4,
        title: "Life-Expectancy Prediction",
        desc: "Internship Project made on IBM Cloud, used Watson Studio for writing code, and Node-Red build front-end for it.",
        stacks: [<SiPython />, <SiNodered />],
        source: "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning",
        demo: "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning/blob/master/FullDemonstrationVideo.mp4",
    },
    {
        id: 5,
        title: "Disney+ Hotstar Clone",
        desc: "Disney clone, with functionality to login using Google account and showing some latest releases and it's description stored on Firestore.",
        stacks: [<SiReact />, <SiStyledcomponents />, <SiFirebase />],
        source: "https://github.com/phoenixx1/website-clones/tree/master/disney-clone",
        demo: "https://disney-clone-dca88.web.app/home",
    },
    {
        id: 6,
        title: "HTML Code Editor",
        desc: "HTML Code editor, editor build using Ace-editor having dark-mode, theme option and variable font-size for code editor.",
        stacks: [<SiReact />, <SiStyledcomponents />, <SiGithub />],
        source: "https://github.com/phoenixx1/html-code-editor",
        demo: "https://phoenixx1.github.io/html-code-editor/",
    },
];
