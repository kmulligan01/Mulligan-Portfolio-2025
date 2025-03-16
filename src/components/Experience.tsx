'use client'
import { useState, useEffect } from "react";
import jobData from "@/utils/jobInfo";
import { motion } from "framer-motion";
import type { Variants } from "motion/react";

export default function Experience() {
    const [scrollDir, setScrollDir] = useState("down");

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    const cardVariants: Variants = {
        offscreen: (direction) => ({
            y: direction === "down" ? 100 : -100,
            opacity: 0,
        }),
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.6,
            },
        },
    };

    return (
        <div className="tw-container space-y-8" id="experience">
            <h2>Experience</h2>
            {jobData.map((job) => (
                <motion.div
                    key={job.id}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.2 }}
                    custom={scrollDir} // Pass the scroll direction
                >
                    <motion.div
                        variants={cardVariants}
                        className="flex justify-between items-center bg-primary shadow-md shadow-normal-blue border border-super-light-blue p-5 rounded-lg gap-8"
                    >
                        <div className="grow-0 w-[90%]">
                            <h4 className="">{job.jobTitle}</h4>
                            <h5 className="text-cyan-blue">{job.company}</h5>
                            <p className="lg:max-w-[900px] w-full">{job.description}</p>
                        </div>
                        <div className="bg-secondary border border-super-light-blue px-4 py-2 rounded grow-0 w-1/6">
                            <p>{job.dateWorked}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
