import {
  SiCss3,
  SiFirebase,
  SiReact,
  SiMaterialUi,
  SiStyledComponents,
  SiNodeRed,
  SiPython,
} from "react-icons/si";
import amazon from "../../images/amazon.jpeg";
import covid from "../../images/covid.jpeg";
import lifeexpectancy from "../../images/lifeexpectancy.png";
import disney from "../../images/disney.jpeg";

export const projects = [
  {
    id: 1,
    img: amazon,
    title: "Amazon Clone",
    stacks: [<SiReact />, <SiCss3 />, <SiFirebase />, <SiMaterialUi />],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/amazon-clone",
    demo: "https://clone-4234e.web.app/",
    top: true,
    bottom: false,
  },
  {
    id: 2,
    img: covid,
    title: "COVID-19 Tracker",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiFirebase />,
      <SiMaterialUi />,
    ],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/covid-19-tracker",
    demo: "https://covid-19-tracker-f6549.web.app/",
    top: false,
    bottom: true,
  },
  {
    id: 3,
    img: lifeexpectancy,
    title: "Life-Expectancy Prediction",
    stacks: [<SiPython />, <SiNodeRed />],
    source:
      "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning",
    demo: "https://github.com/phoenixx1/llSPS-INT-1684-Predicting-Life-Expectancy-using-Machine-Learning/blob/master/FullDemonstrationVideo.mp4",
    top: true,
    bottom: false,
  },
  {
    id: 4,
    img: disney,
    title: "Disney+ Hotstar Clone",
    stacks: [<SiReact />, <SiStyledComponents />, <SiFirebase />],
    source:
      "https://github.com/phoenixx1/website-clones/tree/master/disney-clone",
    demo: "https://disney-clone-dca88.web.app/home",
    top: false,
    bottom: true,
  },
];
