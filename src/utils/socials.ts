import { Github, Linkedin, Globe, Codepen } from 'lucide-react';
import { IconType } from "react-icons";


type SocialItems = {
    id: number;
    label: string;
    link: string;
    icon: IconType;
};

const social: SocialItems[] = [
    {
        "id": 1,
        "icon": Github,
        "label": "Github",
        "link": "https://github.com/kmulligan01"
    },
    {
        "id": 2,
        "icon": Linkedin,
        "label": "Linkedin",
        "link": "https://www.linkedin.com/in/kmulligan589/"
    },
    {
        "id": 4,
        "icon": Codepen,
        "label": "Codepen",
        "link": "https://codepen.io/kmulligan01"
    },

]


export default social;
