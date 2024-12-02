import { useEffect, useState } from "react";

function useFetch(url) {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setProduct(data);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [url]);
  return { products, loading, error };
}
export default useFetch;
