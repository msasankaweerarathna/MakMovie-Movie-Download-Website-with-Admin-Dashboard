import useFectchData from "@/hooks/useFetchData"
import { useEffect, useState } from "react"
import { VscThreeBars } from "react-icons/vsc";



export default function Header() {

    //  Fwtch api
    const {alldata, loading} = useFectchData('/api/getmovies');

    const [searchQuery, setSearchQuery] = useState('');
    const [openSearch, setOpenSearch] = useState(false);

    //Filter published data
    const publishedMovies = alldata.filter(ab => ab.status === "publish");
    //search queary

    return <>

    <header className="header">
        <div className="flex flex-sb">
            <div className="headerbar">
                <VscThreeBars/>
            </div>
            <div className="searchheaderinput">
                <input type="text" 
                    placeholder="Search movie here"
                    value={searchQuery}
                />
            </div>
        </div>
    </header>

    </>
}
