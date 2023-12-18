import { ArticleList, HomeLanding, MetaTags } from "../../components";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?limit=4"
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
        title="Welcome to Blogger.com"
        description="Discover stories, thinking, and expertise from writers on any topic. Create and grow your developer blog, newsletter, or team engineering blog effortlessly with us."
      />

      <HomeLanding />
      {/* <section className="min-h-full">
        <ArticleList
          data={data}
          title="Trending Posts"
          url="/feed"
          urlText="Discover all"
        />
      </section> */}
    </>
  );
}

export default Home;
