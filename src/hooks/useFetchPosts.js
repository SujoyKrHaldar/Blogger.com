import { useEffect, useState } from "react";
import { postService } from "../service";

function useFetchPosts() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    try {
      const { documents } = await postService.getAllPosts();
      if (documents) {
        setPost(documents);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return { loading, post };
}

export default useFetchPosts;
