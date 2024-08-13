import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";
import { FcRating } from "react-icons/fc";

export default function draft() {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(7);
    const [searchQuery, setSearchQuery] = useState('');
    const { alldata, loading } = useFetchData(`/api/getmovies`);

    // Function to handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const allblog = alldata.length; // Total number of blogs

    // Filter all data based on search query
    const filteredBlogs = searchQuery.trim() === '' ? alldata : alldata.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate index of the first blog displayed on the current page
    const indexOfFirstblog = (currentPage - 1) * perPage;
    const indexOfLastblog = currentPage * perPage;

    // Get the current page's blogs
    const currentBlogs = filteredBlogs.slice(indexOfFirstblog, indexOfLastblog);

    const draftMovies = currentBlogs.filter(ab => ab.status === "draft");

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
        pageNumbers.push(i);
    }


    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push('/auth');
        }
    }, [router, session]);



    if (status === "loading") {
        // Loading state, loader or any other indicator
        return <div className='full-h flex flex-center'>
            <div className="loading-bar">Loading</div>
        </div>;
    }

    if (session) {
        return <>
            <div className="container">
                <div className="moviecards flex flex-col flex-left gap-2 w-100">
                    <div className="flex flex-sb w-100 movietitle">
                        <h2>List Of Draft Movies</h2>
                        <Link href="/addmovie"><button>Add Movie</button></Link>
                    </div>
                    {loading ? <Spinner /> : <>
                        {draftMovies.length === 0 ? <h2 className="flex w-100 flex-center text-center">Empty Draft</h2> : <>  {draftMovies.map((movie) => {
                            return <div className="moviecard" key={movie._id}>
                                <img src={movie.bgposter || "/img/noimage.jpg"} alt="movie" />
                                <div className="moviecardinfo">
                                    <div>
                                        <h3>{movie.title}</h3>
                                        <p>{movie.category}</p>
                                    </div>
                                    <Link href="/">asda</Link>
                                    <div>
                                        <FcRating /> {movie.rating}
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <Link href={`/movies/edit/${movie._id}`}><button>Update Movie</button></Link>
                                        <Link href={`/movies/delete/${movie._id}`}><button>Delete Movie</button></Link>
                                    </div>
                                </div>
                            </div>
                        })}</>}

                    </>}

                    {draftMovies.length === 0 ? (
                        ""
                    ) : (
                        <div className='blogpagination'>
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                            {pageNumbers.slice(Math.max(currentPage - 3, 0), Math.min(currentPage + 2, pageNumbers.length)).map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`${currentPage === number ? 'active' : ''}`}
                                >
                                    {number}
                                </button>
                            ))}
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentBlogs.length < perPage}>Next</button>
                        </div>
                    )}

                </div>
            </div>
        </>
    }
}