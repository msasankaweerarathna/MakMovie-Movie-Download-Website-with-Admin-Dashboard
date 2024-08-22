import axios from "axios";
import { useEffect, useState } from "react";

function useFectchData(apiEndpoint) {
  const [alldata, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      //set initialLoad to false to prevent the ap[i call on subsequent renders
      setInitialLoad(false);
      setLoading(false);
      return; //exit useEffect
    }

    //set loading to tru to indicate data fetching
    setLoading(true);

    const fetchAllData = async () => {
      try {
        const res = await axios.get(apiEndpoint);
        const allData = res.data;
        setAllData(allData);
        setLoading(false); //set loading state to false after data is fetch
      } catch (error) {
        console.error("error fetching movie data:", error);
        setLoading(false); //set loading state to false even if there is an error
      }
    };

    //fetch movie data only if category exits
    if (apiEndpoint) {
      fetchAllData(); //call this function if api exist
    }
  }, [initialLoad, apiEndpoint]); //depend on ini and apiEndpoint to trigger api call

  return { alldata, loading };
}

export default useFectchData;

// =============================================

// import axios from "axios";
// import { useEffect, useState } from "react";

// function useFetchData(apiEndpoint) {
//   const [alldata, setAllData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         setLoading(true); // Ensure loading is set to true when data fetching begins
//         const res = await axios.get(apiEndpoint);
//         const allData = res.data;
//         setAllData(allData);
//       } catch (error) {
//         console.error("Error fetching movie data:", error);
//       } finally {
//         setLoading(false); // Set loading to false after data is fetched or an error occurs
//       }
//     };

//     if (apiEndpoint) {
//       fetchAllData();
//     }
//   }, [apiEndpoint]);

//   return { alldata, loading };
// }

// export default useFetchData;

