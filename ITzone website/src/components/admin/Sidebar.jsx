import Link from "next/link";

const Sidebar = () => {
    return ( 
        <div className="w-[20%] bg-slate-500">
            <ul className="list-none p-10 *:flex *:justify-center flex-col *:*:text-white *:*:text-2xl *:mb-5 ">
                <li><Link href={'/admin'}>Home</Link></li>
                <li><Link href={'/admin/services'}>Add Services</Link></li>
                <li><Link href={'#'}>Home</Link></li>
                <li><Link href={'#'}>Home</Link></li>
            </ul>
        </div>
     );
}
 
export default Sidebar;