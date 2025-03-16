'use client'
import Image from 'next/image';
import heroImg from '../../public/hero.jpg';
import { Github, Linkedin, Globe } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
    const social = [
        {
            "id": 1,
            "icon": Github,
            "label": "Github",
            "link": "https://github.com/kendramulligan"
        },
        {
            "id": 2,
            "icon": Linkedin,
            "label": "Linkedin",
            "link": "https://www.linkedin.com/in/kendramulligan/"
        },
        {
            "id": 3,
            "icon": Globe,
            "label": "Website",
            "link": "https://kendramulligan.dev"
        },
    ]
    return (
        <section className="relative w-full h-screen " id="home">
            {/* Image */}
            <Image
                className=" z-0 mt-0 ml-0"
                alt="Image of two monitors to showcase the work Kendra does"
                src={heroImg}
                layout="fill"
                objectFit='cover'
                objectPosition='center'

            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-secondary-opacity -ml-40 "></div>

            {/* Content */}
            <div className="absolute z-20 top-0 left-0 right-0 bottom-0 flex items-start justify-center text-left flex-col ml-40">
                <h1 className="text-white font-semibold">Kendra Mulligan</h1>
                <h3 className="mt-4">
                    <Typewriter
                        words={['Developer', 'Freelancer', 'Coder', 'Designer', 'Mentor', 'Tech Enthusiast']}
                        cursor
                        cursorStyle='_'
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        loop={false}
                    />
                </h3>
                <div className="flex justify-between items-center gap-2 mt-4">
                    {social.map(({ id, icon: Icon, label, link }) => (
                        <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                            <Icon className="size-6 text-white hover:text-super-light-blue" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
