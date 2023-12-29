import { useEffect, useState } from "react";
import { postService } from "../service";

function useSearchPost(searchedQuery) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArticles = async (query) => {
    try {
      setLoading(true);
      const { documents } = await postService.getPostBySearch(query);
      if (documents) setPost(documents);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles(searchedQuery);
  }, [searchedQuery]);

  return { loading, post };
}

export default useSearchPost;
