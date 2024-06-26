import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const searchApi = async (searchTerm) => {
    const response = await yelp.get("/search", {
      params: {
        location: "İstanbul",
        limit: 50,
        term: searchTerm,
      },
    });
    setResults(response.data.businesses);
  };

  useEffect(() => {
    searchApi("Hamburger");
  }, []);

  return [searchApi, results];
};
