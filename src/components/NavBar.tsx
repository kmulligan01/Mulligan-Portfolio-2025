'use client'
import { useState } from "react";
import navItems from "@/utils/navitems";
import RoundBtn from './RoundBtn';
import { Menu, X } from 'lucide-react';
import social from '@/utils/socials';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <header className='flex justify-center lg:items-start lg:fixed left-5 z-30  flex-col lg:h-screen h-full items-end '>
            <nav className="rounded-full lg:block hidden ">
                <ul className="no-prose pl-0">

                    {navItems.map((item) => (
                        <RoundBtn key={item.id} icon={item.icon} label={item.label} link={item.link} />
                    ))
                    }
                </ul>
            </nav>
            {/* Mobile Menu */}
            <nav className="absolute z-30 mobileNav top-4 right-4 lg:hidden block">
                <div
                    className="w-[36px] h-[36px] rounded-lg border border-white flex items-center justify-center cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
                </div>

                {
                    isOpen && (
                        <div className="absolute top-12 -right-[1.5em] bg-white shadow-lg rounded-lg p-6 w-[300px] mx-4">
                            <ul className="space-y-2">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link}> {item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-start justify-start gap-4 mt-8">
                                {social.map(({ id, icon: Icon, label, link }) => (
                                    <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                                        <Icon className="size-6 text-normal-blue hover:text-super-light-blue" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                }
            </nav >
        </header >
    );
};