/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { postService } from "../service";

function useFetchPostBySlug(slug) {
  const [post, setPost] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const getArticles = async (slug) => {
    try {
      setLoading(true);
      const { documents } = await postService.getPostBySlug(slug);
      if (documents[0]) {
        setPost(documents[0]);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles(slug);
  }, [slug]);

  return { loading, notFound, post };
}

export default useFetchPostBySlug;
