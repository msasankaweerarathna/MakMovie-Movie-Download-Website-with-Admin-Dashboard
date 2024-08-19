import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Movie() {
  const [redirect, setRedirect] = useState(false);

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [bgPoster, setBgposter] = useState("");
  const [smPoster, setSmposter] = useState("");
  const [titlecategory, setTitlecategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [size, setSize] = useState("");
  const [quality, setQuality] = useState("");
  const [youtubelink, setYoutubelink] = useState("");
  const [category, setCategory] = useState("");
  const [watchonline, setWatchonline] = useState("");
  const [downloadlink, setDownloadlink] = useState({
    "480p": "",
    "720p": "",
    "1080p": "",
    "4K": "",
  });
  //not use for database
  const [showInput, setShowInput] = useState({
    "480p": false,
    "720p": false,
    "1080p": false,
    "4K": false,
  });
  const [status, setStatus] = useState("");

  return (
    <>
      <Head>
        <title>Add Movie page</title>
      </Head>

      <form className="addmovieForm">
        <div className="formdata w-100 flex flex-sb mt-3 flex-left">

            <div className="w-100 flex flex-col flex-left mb-2">
                <div className="w-100 flex flex-col flex-left mb-2">
                    <label htmlFor="bgposter">Background Poster</label>
                    <input type="text"
                        id="bgposter"
                        placeholder="Bgposter image link"
                        value={bgPoster}
                        onChange={ev => setBgposter(ev.target.value)} 
                    />
                </div>
            </div>
        </div>
      </form>
    </>
  );
}
