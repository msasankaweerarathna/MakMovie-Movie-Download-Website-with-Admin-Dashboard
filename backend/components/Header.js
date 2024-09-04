import useFectchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { PiWindowsLogoBold } from "react-icons/pi";
import { VscThreeBars } from "react-icons/vsc";
import { IoLanguage, IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


export default function Header() {

  const { data: session } = useSession();

  //  Fetch api
  const { alldata, loading } = useFectchData("/api/getmovies");

  const [searchQuery, setSearchQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  //Search bar open close function
  const handleOpen = () => {
    setOpenSearch(!openSearch);
  }
  const handleClose = () => {
    setSearchQuery('');
    setOpenSearch(false);
  }

  //Filter published data
  const publishedMovies = alldata.filter((ab) => ab.status === "publish");
  
  //search queary
  const filteredMovies = searchQuery.trim() === '' ? publishedMovies : publishedMovies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return <>
      <header className="header">
        <div className="flex flex-sb">
          <div className="headerbar">
            <VscThreeBars />
          </div>
          {session ? <div className="searchheaderinput">
            <input
              type="text"
              placeholder="Search movie here"
              value={searchQuery}
              onClick={handleOpen}
            />
          </div> : null}
          
          <ul className="flex gap-2">
            <Link href='/'><li><PiWindowsLogoBold/></li></Link>
            <Link href='/'><li><IoLanguage/></li></Link>
            <Link href='/'><li><IoNotificationsSharp/></li></Link>
            <Link href='/'><li><MdOutlineStickyNote2/></li></Link>
            <Link href='/'><li><img src="/img/user.png" alt="user" /></li></Link>
          </ul>
        </div>
        {openSearch && (
            <div className="fixedsearchq">
                <input type="text"
                    placeholder="Search movie here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <div className="searchresultofinput">
                        <>
                            {filteredMovies.length > 0 ? 
                            <>
                                {filteredMovies.slice(0,10).map((movie) => {
                                    return <div className="siresult" key={movie._id}>
                                        <img src={`${movie.smposter}`} alt="movie" />
                                        <div className="simovieinfo">
                                            <h3>{movie.title}</h3>
                                            <div className="udbtns">
                                                <Link href={`/movies/edit/${movie._id}`} onClick={handleClose}>Update</Link>
                                                <Link href={`/movies/delete/${movie._id}`} onClick={handleClose}>Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </> : <div className="w-100 flex flex-center">No Movie Found</div>}
                        </>
                    </div>
                )}
                <button className="closesearch" onClick={handleClose}><IoMdClose /></button>
            </div>
        )}
      </header>
    </>
}
