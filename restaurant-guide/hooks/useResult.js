import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "İstanbul",
          limit: 50,
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Connection Failed");
    }
  };

  useEffect(() => {
    searchApi("Hamburger");
  }, []);

  return [searchApi, results, errorMessage];
};
