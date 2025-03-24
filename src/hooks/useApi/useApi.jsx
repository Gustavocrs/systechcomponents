// src/hooks/useApi.js
import {useState, useEffect} from "react";
import axios from "axios";

export function useApi(method, url, requestData = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        switch (method.toLowerCase()) {
          case "get":
            response = await axios.get(url);
            break;
          case "post":
            response = await axios.post(url, requestData);
            break;
          case "put":
            response = await axios.put(url, requestData);
            break;
          case "del":
            response = await axios.delete(url, {data: requestData});
            break;
          default:
            throw new Error("Método HTTP inválido");
        }
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, requestData]);

  return {data, loading, error};
}

export default useApi;
