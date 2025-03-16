import { LucideIcon } from "lucide-react";

interface ButtonProps {
    icon: LucideIcon;
    label: string;
    link: string;
}

export default function RoundBtn({ icon: Icon, label, link }: ButtonProps) {
    return (
        <div className="rounded-full">
            <a href={link} className="flex items-center space-x-2 p-4 transition-all">
                <Icon className="size-6 text-super-light-blue" />
                <span className="">{label}</span>
            </a>
        </div>
    );
};