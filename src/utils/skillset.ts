import { FaFigma, FaReact, FaGithub, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { SiNextdotjs } from "react-icons/si";


type Skill = {
    id: number;
    name: string;
    percentage: string;
    icon: IconType;
};

const skills: Skill[] = [
    {
        id: 1,
        name: "NextJs",
        percentage: "90%",
        icon: SiNextdotjs,
    },
    {
        id: 2,
        name: "React",
        percentage: "80%",
        icon: FaReact,
    },
    {
        id: 3,
        name: "Typescript",
        percentage: "70%",
        icon: TbBrandTypescript,
    },
    {
        id: 4,
        name: "CI/CD Pipelines",
        percentage: "90%",
        icon: FaGithub,
    },
    {
        id: 5,
        name: "Nextjs",
        percentage: "70%",
        icon: RiNextjsLine,
    },
    {
        id: 6,
        name: "Tailwindcss",
        percentage: "100%",
        icon: RiTailwindCssFill,
    },
    {
        id: 7,
        name: "WordPress",
        percentage: "100%",
        icon: FaWordpressSimple,
    },
    {
        id: 8,
        name: "PHP",
        percentage: "100%",
        icon: FaPhp,
    },
];

export default skills;
