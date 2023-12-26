import { HomeLanding, MetaTags } from "../../components";

function Home() {
  return (
    <>
      <MetaTags
        title="Welcome to Blogger.com"
        description="Discover stories, thinking, and expertise from writers on any topic. Create and grow your developer blog, newsletter, or team engineering blog effortlessly with us."
      />

      <HomeLanding />
    </>
  );
}

export default Home;
