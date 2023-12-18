import { ArticleList, HomeLanding, MetaTags } from "../../components";

function Home() {
  // const [data, setData] = useState([]);

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
