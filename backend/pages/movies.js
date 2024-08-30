import useFectchData from "@/hooks/useFetchData";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";
import { FcRating } from "react-icons/fc";

export default function movies() {

    const router = useRouter();

    const [currentPage, setCurrentPage] = useState(1); //fist page
    const [perPage] = useState(7); //seven movies per page
    const [searchQuery, setSearchQuery] = useState(''); //search query

    //fetch api
    const { alldata, loading } = useFectchData("/api/getmovies");


    //Function to handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    
    const allMovie = alldata.length;//Total number of movies


    //filter all data based on search query
    const filteredMovies = searchQuery.trim() === '' ? alldata : alldata.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));

    //calculate index of the first movie displayed on the current page
    const indexOfFirstMovie = (currentPage - 1) * perPage;
    const indexOfLastMovie = currentPage * perPage;


    //get the current page's movies
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Filter the current page's movies to only include movies with a status of "publish"
    const publishedMovies = currentMovies.filter(ab => ab.status === "publish");

    // Generate an array of page numbers for pagination
   // Calculate the total number of pages by dividing the total number of movies (allMovie) by the number of movies per page (perPage) and rounding up to the 
  // nearest integer using Math.ceil
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(allMovie / perPage); i++) {
        pageNumbers.push(i);
        
    }


    return <>
        <div className="container">
            <div className="moviecards flex flex-col flex-left gap-2 w-100">
                <div className="flex flex-sb w-100 movietitle">
                    <h2>List Of Publish Movies</h2>
                    <Link href='/'><button>Add Movie</button></Link>
                </div>

                {loading ? <Spinner/> : <>
                    {publishedMovies.map((movie) => {
                        return <div className="moviecard" key={movie._id}>
                        <img src={movie.bgposter || "/img/noimage.jpg"} alt="movie" />
                        <div className="moviecardinfo">
                          <div>
                            <h3>{movie.slug}</h3>
                            <p>{movie.category}</p>
                          </div>
                          <Link href='/addmovie'>{movie.downloadlink['480p']}</Link>
                          <div>
                            <FcRating/> {movie.rating}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Link href={`/movie/edit/${movie._id}`}><button>Update movie</button></Link>
                            <Link href={`/movie/delete/${movie._id}`}><button>Delete movie</button></Link>
                          </div>
                        </div>
                      </div>
                    })}
                </>}

                {publishedMovies.legnth === 0 ? (
                    ""
                ): (
                    <div className="blogpagination">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                )}
            </div>
        </div>

    </>
}