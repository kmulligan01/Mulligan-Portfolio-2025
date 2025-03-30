import { IconType } from "react-icons";

interface ButtonProps {
    icon: IconType;
    label: string;
    link: string;
}

export default function RoundBtn({ icon: Icon, label, link }: ButtonProps) {
    return (

        <li className="list-none pl-0 linkSect">
            <a href={link} className="pr-4">
                <div className="navIcon size-[56px] flex items-center justify-center rounded-full">
                    <Icon className="size-6 text-super-light-blue " />
                </div>
                <span className="p-0">{label}</span>
            </a>
        </li>

    );
};