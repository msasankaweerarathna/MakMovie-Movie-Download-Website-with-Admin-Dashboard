import Head from "next/head";
import Link from "next/link";
import useFectchData from "@/hooks/useFetchData";
import Spinner from "@/components/Spinner";

import {FaEye, FaHeart, FaStar } from "react-icons/fa";

export default function movies() {

  // fetch data with usehook
  const { alldata, loading } = useFectchData("/api/getmovies");

  // filter for published movies required
  const publishedData = alldata.filter((ab) => ab.status === "publish");

  //filter data by movies
  const moviesData = publishedData.filter((ab) => ab.titlecategory === 'movies');

  return (
    <>
      <Head>
        <title>Movies | vbmcoder</title>
        <meta name="description" content="All the movies" />
      </Head>

      <section className="genrenamesec">
        <div className="genrename">
          <h1>Movies</h1>
          <p>
            Discover the best in movies, series, and exclusive content at
            MakMovies. Your go-to platform for endless entertainment across
            genres. Stay tuned for new releases and updates!
          </p>
        </div>
      </section>

      <section className="genremoviesec">
        <div className="genremovie">
          {loading ? (<Spinner />) : ( <>
              {publishedData.map((movie) => {
                return ( <div className="mcard">
                      <Link href={`/movies/${movie.slug}`}>
                        <div className="cardimg">
                          <img
                            src={movie.smposter}
                            alt="movie"
                            loading="lazy"
                          />
                        </div>
                        <div className="contents">
                          <h5>{movie.title}</h5>
                          <h6>
                            <span>{movie.year}</span>
                            <div className="rate">
                              <i className="cardfas">
                                <FaHeart />
                              </i>
                              <i className="cardfas">
                                <FaEye />
                              </i>
                              <i className="cardfas">
                                <FaStar />
                              </i>
                              <h6>{movie.rating}</h6>
                            </div>
                          </h6>
                        </div>
                      </Link>
                    </div>
                );
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
}
