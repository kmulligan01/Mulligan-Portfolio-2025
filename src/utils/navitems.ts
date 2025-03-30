import { House, UserRound, Files, Images, Mail, Atom, FileCode2 } from 'lucide-react';
import { IconType } from "react-icons";


type Items = {
    id: number;
    label: string;
    link: string;
    icon: IconType;
};

const navItems: Items[] =
    [
        {
            "id": 1,
            "icon": House,
            "label": "Home",
            "link": "#home"
        },
        {
            "id": 2,
            "icon": UserRound,
            "label": "About",
            "link": "#about"
        },
        {
            "id": 3,
            "icon": FileCode2,
            "label": "Experience",
            "link": "#experience"
        },
        {
            "id": 4,
            "icon": Atom,
            "label": "Skills",
            "link": "#skills"
        },
        {
            "id": 5,
            "icon": Images,
            "label": "Portfolio",
            "link": "#portfolio"
        },
        {
            "id": 6,
            "icon": Mail,
            "label": "Contact",
            "link": "#contact"
        }
    ];


export default navItems;
