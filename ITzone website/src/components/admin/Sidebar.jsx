import Link from "next/link";

const Sidebar = () => {
    return (
        <div className=" side-bar z-10 w-370 bg-[#40189D]">
            <ul className="list-none p-10 flex-col absolute top-25 left-0 *:*:text-white  *:*:text-2xl *:mb-5 ">
                <li><Link href={'/admin'}>Home</Link></li>
                <li><Link href={'/admin/services'}>Add Services</Link></li>
                <li><Link href={'#'}>Home</Link></li>
                <li><Link href={'#'}>Home</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;