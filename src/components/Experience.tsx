'use client'
import { useState, useEffect } from "react";
import jobData from "@/utils/jobInfo";
import type { Variants } from "motion/react";

import * as motion from "motion/react-client"

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

    const handleOpenPdf = () => {
        // Replace with your actual PDF path
        const pdfUrl = '/MulliganResume.pdf';  // The path to your PDF file

        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="tw-container space-y-8" id="experience">
            <div className="flex justify-between items-center lg:flex-nowrap flex-wrap">
                <h2 className='lg:text-left text-center'>Experience</h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.05 }} className="border border-cyan-blue py-3 px-5 rounded-lg shadow-custom-blue" onClick={handleOpenPdf} >
                    Download Resume
                </motion.button>
            </div>
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
                        className="flex justify-between items-center bg-primary shadow-md shadow-normal-blue border border-super-light-blue p-5 rounded-lg gap-8 lg:flex-nowrap flex-wrap"
                    >
                        <div className="grow-0 lg:w-[90%] w-full lg:order-1 order-2">
                            <h4 className="">{job.jobTitle}</h4>
                            <h5 className="text-cyan-blue">{job.company}</h5>
                            <p className="lg:max-w-[900px] w-full">{job.description}</p>
                        </div>
                        <div className="bg-secondary border border-super-light-blue px-4 py-2 rounded grow-0 lg:w-1/6 w-full lg:order-2 order-1">
                            <p>{job.dateWorked}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
