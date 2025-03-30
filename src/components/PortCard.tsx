import Link from 'next/link';
import * as motion from "motion/react-client"
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
    imageSrc: string;
    title: string;
    category: string;
    url: string;
    badge: string;
}

export default function PostCard({ imageSrc, title, category, url, badge }: CardProps) {


    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                className="bg-transparent  rounded-lg overflow-hidden lg:w-1/3 md:w-1/2 relative shadow-custom-blue w-full"

            >
                <div className="w-full lg:h-52 h-40 overflow-hidden p-8 lg:mb-4 mb-2">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full object-cover my-0 grayscale rounded-lg"
                    />
                </div>
                <div className="px-8 pb-8">
                    <div className="absolute right-10 bg-cyan-blue px-4 py-2 top-10 rounded-lg shadow-md">
                        <p className="text-xs font-bold text-white">{badge}</p>
                    </div>
                    <p className="text-sm font-bold text-white">{category}</p>
                    <h4 className=" font-bold">{title}</h4>
                    <Link href={url} className="text-white tracking-wide font-lg hover:text-white/50 flex items-center font-headings justify-start no-underline mt-4">View Project <FaArrowRight className="ml-2 -rotate-45" /></Link>
                </div>
            </motion.div >



        </>
    );
};

