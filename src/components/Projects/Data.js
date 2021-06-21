import {
  SiCss3,
  SiFirebase,
  SiReact,
  SiMaterialUi,
  SiStyledComponents,
  SiNodeRed,
  SiPython,
} from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "dev-portfolio",
    desc: "Personal dev portfolio build using ReactJS.",
    stacks: [<SiReact />, <SiStyledComponents />],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
    demo: "https://clone-4234e.web.app/",
  },
  {
    id: 2,
    title: "Amazon Clone",
    desc: "Clone of famous E-comm site Amazon with basic functionalities signup/login using mail and purchasing product.",
    stacks: [<SiReact />, <SiCss3 />, <SiFirebase />, <SiMaterialUi />],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
    demo: "https://clone-4234e.web.app/",
  },
  {
    id: 3,
    title: "COVID-19 Tracker",
    desc: "Case tracker for covid-19 showing active cases, deaths & recovery for whole world, with graph & map representation.",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiFirebase />,
      <SiMaterialUi />,
    ],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/covid-19-tracker",
    demo: "https://covid-19-tracker-f6549.web.app/",
  },
  {
    id: 4,
    title: "Life-Expectancy Prediction",
    desc: "Internship Project made on IBM Cloud, used Watson Studio for writing code, and Node-Red build front-end for it.",
    stacks: [<SiPython />, <SiNodeRed />],
    source:
      "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning",
    demo: "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning/blob/master/FullDemonstrationVideo.mp4",
  },
  {
    id: 5,
    title: "Disney+ Hotstar Clone",
    desc: "Disney clone, with functionality to login using Google account and showing some latest releases and it's description stored on Firestore.",
    stacks: [<SiReact />, <SiStyledComponents />, <SiFirebase />],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/disney-clone",
    demo: "https://disney-clone-dca88.web.app/home",
  },
];
