'use client'
import Image from 'next/image';
import heroImg from '../../public/hero.jpg';
import social from '@/utils/socials';
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {

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
            <div className="absolute z-20 lg:top-0 top-10 left-0 right-0 bottom-0 flex items-start justify-center text-left flex-col lg:ml-40 ml-4 lg:flex-nowrap flex-wrap">
                <h1 className="text-white font-semibold text-[4em] lg:text-[6em] md:text-[5em]">Kendra Mulligan</h1>
                <h3 className="mt-4">
                    <Typewriter
                        words={['Developer', 'Freelancer', 'Coder', 'Designer', 'Mentor', 'Innovator']}
                        cursor
                        cursorStyle='_'
                        typeSpeed={90}
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
