import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import useFectchData from "@/hooks/useFetchData";

export default function Header() {

    // navbar header component scroll sticky
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('nav');
            header.classList.toggle("sticky", window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // functions for navlist item page routing active status
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [searchbar, setSearchbar] = useState(false);

    const [activeLink, setActiveLink] = useState('/');

    // search function by title of the movie
    const [movieshortname, setMovieshortname] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    // fetch data from api
    const { alldata, loading } = useFectchData(`/api/getmovies`);

    // filter from published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    // function to handle search
    useEffect (() => {
        if (!movieshortname.trim()) {
            setSearchResult([]);
            return;
        }

        const filteredMovies = publishedData.filter(movie => movie.title.toLowerCase().includes(movieshortname.toLowerCase()));

        setSearchResult(filteredMovies);
    }, [movieshortname]);

    const searchRef = useRef(null);

    // function for when clcike outside of the search bar will be close
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setMovieshortname('');
    
        }  
    }

    useEffect(() => {
        document.addEventListener('mousedow', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })
    
    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLinkClick = (Link) => {
        setActiveLink(Link);
        setClicked(false);
    }

    useEffect(() =>{
        // Update active link state when the page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]); 

    // navbar
    const handleNabarOpen = () => {
        setNavbar(!navbar);
    }

    const handleNabarClose = () => {
        setNavbar(false);
    }

    // searchbar
    const handleSearchbarOpen = () => {
        setSearchbar(!searchbar);
    }

    const handleSearchbarClose = () => {
        setSearchbar(false);
    }

    return <>

    <nav className="header">
        <h1 className="logo" data-text="&nbsp;Makmovies&nbsp;">
            <a href="/">Makmovies&nbsp;</a>
        </h1>

        <form className={searchbar ? "search_bar active" : "search_bar"}>
            <input type="text" placeholder="Search Movies..." value={movieshortname} onChange={(e) => setMovieshortname(e.target.value)} />

            <div className="searchclose" onClick={handleSearchbarClose}><IoClose /></div>
        </form>

        <div id={navbar ? "navbaractive" : "navbar"}>
            <div className="navlogomovie">
                <h1 className="logo" data-text="&nbsp;Makmovies&nbsp;">
                    <a href="/">Makmovies&nbsp;</a>
                </h1>
                <div className="navclosesvg" onClick={handleNabarClose}><IoClose /></div>
            </div>
            <ul className={clicked ? "navbar active" : "navbar"} onClick={handleNabarClose}>
                <li>
                    <Link href='/' 
                        className={activeLink === '/' ? 'active' : ''}
                        onClick={() => handleLinkClick('/')}
                    >Home</Link>
                </li>
                <li>
                    <Link href='/movies' 
                        className={activeLink === '/movies' ? 'active' : ''}
                        onClick={() => handleLinkClick('/movies')}
                    >Movies</Link>
                </li>
                <li>
                    <Link href='/series' 
                        className={activeLink === '/series' ? 'active' : ''}
                        onClick={() => handleLinkClick('/series')}
                    >Series</Link>
                </li>
                <li>
                    <Link href='/bollywood' 
                        className={activeLink === '/bollywood' ? 'active' : ''}
                        onClick={() => handleLinkClick('/bollywood')}
                    >Bollywood</Link>
                </li>
                <li>
                    <Link href='/hollywood' 
                        className={activeLink === '/hollywood' ? 'active' : ''}
                        onClick={() => handleLinkClick('/hollywood')}
                    >Hollywood</Link>
                </li>
                <li>
                    <Link href='/contact' 
                        className={activeLink === '/contact' ? 'active' : ''}
                        onClick={() => handleLinkClick('/contact')}
                    >Contact</Link>
                </li>
            </ul>
        </div>

        <div className="mobile">
            <BiSearch className="opensearchsvg" onClick={handleSearchbarOpen} />
            <FaBars onClick={handleNabarOpen} />
        </div>
    </nav>
      
    </>
}