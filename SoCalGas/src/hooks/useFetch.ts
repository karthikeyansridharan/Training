import { useState, useEffect } from "react";

function useFetch(url:string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        if (!cancel) setData(json);
      } catch (err) {
        if (!cancel) setError(err);
      } finally {
        if (!cancel) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancel = true; 
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
