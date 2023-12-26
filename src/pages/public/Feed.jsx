import { ArticleList, MetaTags } from "../../components";
import { useState, useEffect } from "react";
import { postService } from "../../service";

function Feed() {
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

  return (
    <>
      <MetaTags
        conicalRoute="/feed"
        title="Discover the best of Blogger.com"
        description="Discover stories, thinking, and expertise from writers on any topic. Create and grow your developer blog, newsletter, or team engineering blog effortlessly with us."
      />

      <section className="py-28">
        <ArticleList data={post} loading={loading} />
      </section>
    </>
  );
}

export default Feed;
