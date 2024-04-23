import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = (props) => {
    
    return (
        <div className="group rounded-xl w-370 border-2 p-10 m-6 hover:bg-slate-800 hover:duration-500 hover:text-white">
            <h2 className="md_black_heading font-bold group-hover:text-white group-hover:duration-1000">{props.heading}</h2>
            <p className="my-5 leading-7">{props.content}</p>

            <Link href={'/services/'+ props.link} className="flex justify-end items-center gap-2 group-hover:text-yellow group-hover:font-bold">Explore More <IoIosArrowRoundForward /></Link>
        </div>
    );
}

export default ServiceCard;