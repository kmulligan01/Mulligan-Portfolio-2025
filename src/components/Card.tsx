import * as motion from "motion/react-client"
import { LucideIcon } from "lucide-react";

interface CardProps {
    icon: LucideIcon;
    label: string;
}

export default function Card({ icon: Icon, label }: CardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            className="px-8 py-6 rounded-tl rounded-tr flex items-start flex-col gap-2 transition-all  bg-transparent  hover:bg-normal-blue  hover:border-b-super-light-blue min-h-5 shadow-custom-blue">
            <Icon className="size-8 text-white hover:text-super-light-blue" />
            <h4 className="text-white">
                {label}
            </h4>
        </motion.div>
    )
}