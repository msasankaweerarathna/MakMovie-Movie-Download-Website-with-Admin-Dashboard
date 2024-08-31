import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Link from "next/link";
import { BiCameraMovie, BiSolidCameraMovie } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";



export default function Aside() {

    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [activeLink, setActivelink] = useState('/');

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLink = (link) => {
        setActivelink(link);
        setClicked(false);
    }

    useEffect(() => {
        //update active link state when the page is reloaded
        setActivelink(router.pathname);
    }, [router.pathname])

    return <>
    <div className="aside">
        <div className="logo flex">
            <BiCameraMovie/>
            <Link href="/"><h1>MOVIES</h1></Link>
        </div>
        <ul className="mt-2">
            <Link href="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleClick('/')}><li><div><IoHomeSharp/></div>Dashboard</li></Link>
            <Link href="/movies" className={activeLink === '/movies' ? 'active' : ''} onClick={() => handleClick('/movies')}><li><div><BiSolidCameraMovie/></div>Movies</li></Link>
            <Link href="/addmovie" className={activeLink === '/addmovie' ? 'active' : ''} onClick={() => handleClick('/addmovie')}><li><div><MdOutlinePlaylistAdd/></div>Add</li></Link>
            <Link href="/draft" className={activeLink === '/draft' ? 'active' : ''} onClick={() => handleClick('/draft')}><li><div><RiDraftFill/></div>Draft</li></Link>
        </ul>
        <h3 className="mt-2">Account Pages</h3>
        <ul className="mt-2">
            <Link href="/profile" className={activeLink === '/profile' ? 'active' : ''} onClick={() => handleClick('/profile')}><li><div><FaUser/></div>Profile</li></Link>
            <Link href="/auth" className={activeLink === '/auth' ? 'active' : ''} onClick={() => handleClick('/auth')}><li><div><PiSignInBold/></div>Sign In</li></Link>
        </ul>
    </div>

   
    </>
}