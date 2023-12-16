import { ArticleList, MetaTags } from "../../components";
import { useEffect, useState } from "react";

function Feed() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // API LINK: https://www.slingacademy.com/article/sample-blog-posts-public-rest-api-for-practice/
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?limit=15"
    );

    if (response.ok) {
      const { blogs } = await response.json();
      setData(blogs);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MetaTags
        conicalRoute="/feed"
        title="Discover the best of Blogger.com"
        description="Discover stories, thinking, and expertise from writers on any topic. Create and grow your developer blog, newsletter, or team engineering blog effortlessly with us."
      />

      <section className="min-h-full">
        <ArticleList data={data} />
      </section>
    </>
  );
}

export default Feed;
