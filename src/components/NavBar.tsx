import { House, UserRound, Files, Images, Mail, Atom, FileCode2 } from 'lucide-react';
import RoundBtn from './RoundBtn';
//implement scrollspy here later
export default function NavBar() {
    const navItems =
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

    return (

        <header className='flex justify-center items-start lg:fixed left-5 z-30  flex-col h-screen'>
            <div className="linkSect">


                {
                    navItems.map((item) => (
                        <RoundBtn key={item.id} icon={item.icon} label={item.label} link={item.link} />
                    ))
                }


            </div>
        </header >
    );
};