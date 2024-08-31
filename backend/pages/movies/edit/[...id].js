
import axios from "axios";
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function EditProduct() {

    const router = useRouter();

    const { id } = router.query;

    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        } else {
            axios.get('/api/getmovies?id=' + id).then(response => {
                setMovieInfo(response.data);
            })
        }
    }, [])

    return <>

        <Head>
            <title>Update Movie</title>
        </Head>

    </>
}
