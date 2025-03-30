'use client'
import { motion } from "framer-motion";
import { TabletSmartphone, Chrome, Users, Workflow } from "lucide-react";
import Card from "@/components/Card";

export default function About() {
    return (
        <motion.div

            className="tw-container" id="about">
            <h2 className='lg:text-left text-center'>About Me</h2>
            <div className="">
                <p><span className="text-lg text-cyan-blue  font-bold no-prose">I started</span> teaching myself to code via videos and library books in 2012, where my love for coding was introduced. I continued to learn until I felt I could use some more guidance, and that was how I found myself applying for coding bootcamps in the Denver area. I found a coding bootcamp at University of Denver and applied. I was one of 20 students selected from a pool of over 200 applicants to enroll, and successfully completed the program in Jan 2019.</p>
                <p className="my-8 not-prose"><span className="text-lg text-cyan-blue  font-bold">After</span> completing my six month bootcamp, I started working as a frontend developer for a web solution business that specialized in assisting home improvement contractors. Here, I quickly worked myself up to managing a small team of 2 other developers. Together, we completed upwards of 5-8 sites a day utilizing JavaScript, HTML, CSS, and other frameworks.</p>
                <p><span className="text-lg text-cyan-blue  font-bold">I was</span> hired by EverCommerce Solutions in 2021 as a mid-level developer where I have earned 4 awards for my teamwork and strategy within different projects. I was promoted to Senior level developer in 2023. Some of the technologies and languages I work with include React, JavaScript, GraphQL, Headless WordPress, email templates, marketing attribution, and lead generation.</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 mt-12 md:grid-cols-2 grid-cols-1 space-y-4 ">
                <Card icon={TabletSmartphone} label="Mobile-First Responsive Design" />
                <Card icon={Chrome} label="Cross Browser Testing " />
                <Card icon={Users} label="Cross Functional Teams" />
                <Card icon={Workflow} label="Agile Project Development" />
            </div>
        </motion.div>
    )
}
