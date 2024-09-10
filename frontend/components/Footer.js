import Link from "next/link"
import { FaHeart } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className="m-auto footersec">
                    <div className="fcontent">
                        <div className="flogo">
                            <h1><Link href="/">MakMovies</Link></h1>
                        </div>
                        <div className="quicklink">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/series'>Series</Link></li>
                            <li><Link href='/genre'>Genre</Link></li>
                            <li><Link href='/all'>All Movies</Link></li>
                            <li><Link href='/genre'>Category</Link></li>
                            <li><Link href='/bollywook'>Bollywook</Link></li>
                            <li><Link href='/hollywook'>Hollywook</Link></li>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>Copyright &copy; 2024. All Rights Reserved | by&nbsp;<Link href='/'>MakMovies</Link></p>
                    </div>
                    <div className="fperasec">
                        <p>Made with <span><FaHeart /> By&nbsp;<Link href='/'>MakMovies</Link></span></p>
                        <p>Discover the best in movies, series, and exclusive content at MakMovies. Your go-to platform for endless entertainment across genres. Stay tuned for new releases and updates!</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer