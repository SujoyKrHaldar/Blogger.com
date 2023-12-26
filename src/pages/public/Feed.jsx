import { ArticleList, MetaTags } from "../../components";
import { useFetchPosts } from "../../hooks";

function Feed() {
  const { loading, post } = useFetchPosts();

  return (
    <>
      <MetaTags
        conicalRoute="/feed"
        title="Discover the best of Blogger.com"
        description="Discover stories, thinking, and expertise from writers on any topic. Create and grow your developer blog, newsletter, or team engineering blog effortlessly with us."
      />

      <ArticleList data={post} loading={loading} />
    </>
  );
}

export default Feed;
