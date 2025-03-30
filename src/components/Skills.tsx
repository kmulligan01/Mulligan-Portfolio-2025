"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "motion/react";
import skills from "@/utils/skillset";

export default function Skills() {
    const [isMobile, setIsMobile] = useState(false);

    const iconStyle = {
        color: "#FFF",
        fontSize: "2.5rem",
    };

    // Parent container animation to handle stagger effect
    const containerVariants: Variants = {
        onscreen: {
            transition: {
                staggerChildren: 0.1,
                delay: 0.1,
            },
        },
    };

    // Individual card animation
    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Change screen width breakpoint as needed
        };

        handleResize(); // Check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="tw-container" id="skills">
            <h2 className="font-bold text-center lg:text-left">Skillset</h2>
            <motion.div
                className="flex xl:flex-nowrap flex-wrap gap-4 mt-8 lg:justify-left grid-cols-2 justify-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
            >
                {skills.map((skill) => (
                    // Conditionally render motion.div or div based on mobile state
                    isMobile ? (
                        <div
                            key={skill.id}
                            className="w-40 h-60 bg-transparent text-white flex flex-col items-center justify-center rounded-xl shadow-lg"
                        >
                            <div className="flex flex-col items-center gap-2 p-6 bg-primary shadow-md shadow-normal-blue border border-super-light-blue rounded-[50%_/_25%] mb-4">
                                <div className="bg-secondary p-4 rounded-full border border-super-light-blue">
                                    <skill.icon style={iconStyle} />
                                </div>
                                <h4>{skill.percentage}</h4>
                            </div>
                            <p className="text-center text-lg">{skill.name}</p>
                        </div>
                    ) : (
                        <motion.div
                            key={skill.id}
                            initial="offscreen"
                            animate="onscreen"
                            variants={cardVariants}
                            className="w-40 h-60 bg-transparent text-white flex flex-col items-center justify-center rounded-xl shadow-lg"
                        >
                            <div className="flex flex-col items-center gap-2 p-6 bg-primary shadow-md shadow-normal-blue border border-super-light-blue rounded-[50%_/_25%] mb-4">
                                <div className="bg-secondary p-4 rounded-full border border-super-light-blue">
                                    <skill.icon style={iconStyle} />
                                </div>
                                <h4>{skill.percentage}</h4>
                            </div>
                            <p className="text-center text-lg">{skill.name}</p>
                        </motion.div>
                    )
                ))}
            </motion.div>
        </section>
    );
}
