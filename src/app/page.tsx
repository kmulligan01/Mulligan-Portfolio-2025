'use client'
import social from '@/utils/socials';
import { NavBar, Hero, About, Experience, Skills, Portfolio } from "@/components/index";
import * as motion from "motion/react-client"
import { EmbedPDF } from '@simplepdf/react-embed-pdf';

export default function Home() {

  return (
    <div className="relative">

      <NavBar />
      <Hero />
      <main className="">

        <About />
        <Experience />
        <Skills />
        <Portfolio />
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center py-10 flex-col">
        <div className="flex gap-8 items-center justify-between">
          <EmbedPDF companyIdentifier="react-viewer" >
            <motion.a href="/Mulligan-Resume.pdf" whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              className="border border-cyan-blue py-3 px-5 rounded-lg shadow-custom-blue no-underline text-white">Download Resume</motion.a>
          </EmbedPDF>
        </div>
        <div className="flex items-center justify-between gap-4">
          {social.map(({ id, icon: Icon, label, link }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className="size-6 text-white hover:text-super-light-blue" />
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
}
