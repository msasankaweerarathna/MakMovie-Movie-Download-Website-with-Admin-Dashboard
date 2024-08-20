import { mongooseConnect } from "@/lib/mongoose";
import Movie from "@/models/Movie";
// import Movie from "../../models/Movie";

//api for fetching data from mongodb databse
export default async function handle(req, res) {
  //if authenticated, connect to mongodb
  await mongooseConnect();

  const { method } = req;

  //when post req
  if (method === "POST") {
    const {
      title,
      slug,
      bgPoster,
      smPoster,
      titlecategory,
      description,
      rating,
      duration,
      year,
      genre,
      language,
      subtitle,
      size,
      quality,
      youtubelink,
      category,
      watchonline,
      downloadlink,
      status,
    } = req.body;

    console.log("---------Movie------------")
    console.log(Movie)

    const movieData = await Movie.create({
      title,
      slug,
      bgPoster,
      smPoster,
      titlecategory,
      description,
      rating,
      duration,
      year,
      genre,
      language,
      subtitle,
      size,
      quality,
      youtubelink,
      category,
      watchonline,
      downloadlink,
      status,
    });

    res.json(movieData);
  }

  //when get req
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Movie.findById(req.query.id));
    } else {
      res.json((await Movie.find()).reverse());
    }
  }

  //when update req
  if (method === "PUT") {
    //when update then add _id to find movie
    const {
      _id,
      title,
      slug,
      bgPoster,
      smPoster,
      titlecategory,
      description,
      rating,
      duration,
      year,
      genre,
      language,
      subtitle,
      size,
      quality,
      youtubelink,
      category,
      watchonline,
      downloadlink,
      status,
    } = req.body;

    await Movie.updateOne(
      { _id },
      {
        title,
        slug,
        bgPoster,
        smPoster,
        titlecategory,
        description,
        rating,
        duration,
        year,
        genre,
        language,
        subtitle,
        size,
        quality,
        youtubelink,
        category,
        watchonline,
        downloadlink,
        status,
      }
    );
    res.json(true);
  }

  //when delete req
  if (method === "DELETE") {
    if (req.query?.id) {
      await Movie.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
