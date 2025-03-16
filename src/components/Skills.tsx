"use client";

import { motion } from "framer-motion";
import type { Variants } from "motion/react";
import skills from "@/utils/skillset";

export default function Skills() {
    const iconStyle = {
        color: "#FFF",
        fontSize: "2.5rem",
    };

    // Parent container animation to handle stagger effect
    const containerVariants: Variants = {
        onscreen: {
            transition: {
                staggerChildren: 0.2,
                delay: 0.2
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

                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="p-10" id="skills">
            <h2 className="font-bold">Skillset</h2>
            <motion.div
                className="grid grid-cols-custom-grid gap-8 mt-8"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants} // Apply stagger effect
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        variants={cardVariants} // Each card will animate with stagger
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
                ))}
            </motion.div>
        </section>
    );
}
