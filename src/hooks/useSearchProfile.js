import { useEffect, useState } from "react";
import { userProfile } from "../service";

function useSearchProfile(searchedQuery) {
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArticles = async (query) => {
    try {
      setLoading(true);
      const { documents } = await userProfile.getProfileBySearch(query);
      if (documents) setAuthor(documents);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles(searchedQuery);
  }, [searchedQuery]);

  return { loading, author };
}

export default useSearchProfile;
