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
}

export default useFectchData;
