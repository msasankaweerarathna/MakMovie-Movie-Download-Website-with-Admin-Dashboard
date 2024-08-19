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
  const [showInputs, setShowInput] = useState({
    "480p": false,
    "720p": false,
    "1080p": false,
    "4K": false,
  });
  const [status, setStatus] = useState("");

  //Download link functions

  const resolutions = ["480p", "720p", "1080p", "4k"];

  const handleInputChange = (resolution, value) => {
    setDownloadlink((prevstate) => ({
      ...prevstate,
      [resolution]: value,
    }));
  };

  const toggleInputVisibility = (resolution) => {
    setShowInput((prevstate) => ({
      ...prevstate,
      [resolution]: !prevstate[resolution],
    }));
  };

  return (
    <>
      <Head>
        <title>Add Movie page</title>
      </Head>

      <form className="addmovieform">
        <div className="formdata w-100 flex flex-sb mt-3 flex-left">
          <div className="w-50 flex flex-col flex-left">
            {/* Movie background image */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="bgposter">Background Poster</label>
                <input
                  type="text"
                  id="bgposter"
                  placeholder="Bgposter image link"
                  value={bgPoster}
                  onChange={(ev) => setBgposter(ev.target.value)}
                />
              </div>
            </div>

            {/* Movie title */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="title">Movie Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="title"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                />
              </div>
            </div>

            {/* Movie description / Storyline */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  id="description"
                  placeholder="description"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                />
              </div>
            </div>

            {/* Movie Rating */}
            <div className="w-100 flex flex-col flex-left mb-2">
              <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  id="rating"
                  placeholder="rating"
                  value={rating}
                  onChange={(ev) => {
                    //ensuare the input does not exceed 10.0
                    let newValue =
                      ev.target.value <= 10.0 ? ev.target.value : 10.0;
                    //ensure the input is not less than 0
                    newValue = newValue >= 0 ? newValue : 0;
                    setRating(newValue);
                  }}
                  step="0.1" //define the step increment as 0.1
                  max="10.0" //set the maximum value to 10.0
                  min="0" //set the minimum value to 0
                />
              </div>

              {/* Movie duration */}
              <div className="w-100 flex flex-col flex-left mb-2">
                <div className="w-100 flex flex-col flex-left mb-2">
                  <label htmlFor="duration">Duration</label>
                  <input
                    type="text"
                    id="duration"
                    placeholder="duration"
                    value={duration}
                    onChange={(ev) => setDuration(ev.target.value)}
                  />
                </div>
              </div>

              {/* Movie watchonline link */}
              <div className="w-100 flex flex-col flex-left mb-2">
                <div className="w-100 flex flex-col flex-left mb-2">
                  <label htmlFor="watchonline">Watchonline Link</label>
                  <input
                    type="text"
                    id="watchonline"
                    placeholder="watchonline"
                    value={watchonline}
                    onChange={(ev) => setWatchonline(ev.target.value)}
                  />
                </div>
              </div>

              {/* Movie downloadlink  */}
              <div className="w-100 flex flex-col flex-left mb-2">
                <div className="w-100 flex flex-col flex-left mb-2">
                  <label htmlFor="downloadlink">Download Link</label>
                  <div className="flex gap-1">
                    <div
                      className={
                        showInputs["480p"] ? "dresolbtn active" : "dresolbtn"
                      }
                      onClick={() => toggleInputVisibility("480p")}
                    >
                      {showInputs["480p"] ? "Hide 480p" : "Show 480p"}
                    </div>

                    <div
                      className={
                        showInputs["720p"] ? "dresolbtn active" : "dresolbtn"
                      }
                      onClick={() => toggleInputVisibility("720p")}
                    >
                      {showInputs["720p"] ? "Hide 720p" : "Show 720p"}
                    </div>

                    <div
                      className={
                        showInputs["1080p"] ? "dresolbtn active" : "dresolbtn"
                      }
                      onClick={() => toggleInputVisibility("1080p")}
                    >
                      {showInputs["1080p"] ? "Hide 1080p" : "Show 1080p"}
                    </div>

                    <div
                      className={
                        showInputs["4K"] ? "dresolbtn active" : "dresolbtn"
                      }
                      onClick={() => toggleInputVisibility("4K")}
                    >
                      {showInputs["4K"] ? "Hide 4K" : "Show 4K"}
                    </div>
                  </div>

                  {resolutions ? (
                    <>
                      {resolutions.map((resolution) => (
                        <div key={resolution} className="w-100">
                          {showInputs[resolution] && (
                            <>
                              <input
                                type="text"
                                id={`downloadlink${resolution}`}
                                placeholder={`${resolution} Download link`}
                                value={downloadlink[resolution]}
                                onChange={(ev) =>
                                  handleInputChange(resolution, ev.target.value)
                                }
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Movie status (Draft of Publish) */}
            
          </div>
        </div>
      </form>
    </>
  );
}
