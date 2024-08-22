//import Loading from "@/components/Loading";
import useFectchData from "@/hooks/useFetchData";
import Head from "next/head";
import { useRouter } from "next/router";


export default function Home() {

  const {alldata, loading } = useFectchData('/api/getmovies');
  
  const publishedMovies = alldata.filter(ab => ab.status === "publish");
  const draftMovies = alldata.filter(ab => ab.status === "draft");

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Movie App | Backend</title>
        <meta name="description" content="Movie website backend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? <loading/> : <div className="container">
        <div className="topheadertitle flex flex-sb">
          <div>
            <h1 className="mb-1">Explore all type of movies here</h1>
          </div>
        </div>
        </div>}

    </>
  );
}

// import useFetchData from "@/hooks/useFetchData";
// import Head from "next/head";
// import { useRouter } from "next/router";

// export default function Home() {
//   const { alldata, loading } = useFetchData('/api/getmovies');

//   const publishedMovies = alldata?.filter(ab => ab.status === "publish") || [];
//   const draftMovies = alldata?.filter(ab => ab.status === "draft") || [];

//   const router = useRouter();
//   return (
//     <>
//       <Head>
//         <title>Movie App | Backend</title>
//         <meta name="description" content="Movie website backend" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {loading ? <loading/> : <div className="container">
//         <div className="topheadertitle flex flex-sb">
//           <div>
//             <h1 className="mb-1">Explore all type of movies here</h1>
//           </div>
//         </div>
//       </div>}
//     </>
//   );
// }

