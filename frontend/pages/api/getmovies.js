import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";


export default async function handle(req, res){
    const { method } = req;

    //cpnnect mongodb database
    await mongooseConnect();

    // get movies data api
    if (method === "GET") {
        if (req.query?.id) {
            //fetch a single movie by id
            const movies = await Movie.findByID(req.query.id);
            res.json(movies);
        }else if (req.query?.title) {
            // fetch movies by title for search function
            const title = await Movie.find({title: req.query.title});
            res.json(title);
        }else if (req.query?.titlecategory) {
            // fetch movies by title category
            const titlecategory = await Movie.find({titlecategory : req.query.titlecategory});
            res.json(titlecategory.reverse()); // reverse for showing latest data
        } else if (req.query?.genre) {
            //fect movie by genre
            const genre = await Movie.find({genre: req.query.genre});
            res.json(genre.reverse()); // reverse for showing latest data
        } else if (req.query?.category) {
            //fetch movie by category
            const category = await Movie.find({category: req.query.category});
            res.json(category.reverse()); // reverse for showing latest data
        } else if (req.query?.slug) {
            //fetch movie by slug(url of the movie)
            const slug = await Movie.find({slug: req.query.slug});
            res.json(slug.reverse); // reverse for showing latest data
        } else {
            //fetch all movies
            const movies = await Movie.find();
            res.json(movies.reverse()); // reverse for showing latest data
        }
    } else {
        res.status(405).json({massage: "Method Not Allowed"})
    }
}