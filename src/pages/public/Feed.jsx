import {
  ArticleCard,
  SkeletonCard,
  MetaTags,
  SearchInput,
} from "../../components";
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

      <section className="container py-28 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold ">Latest Posts</h1>
          <SearchInput
            className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full 
            w-full max-w-sm"
            placeholder="Search here"
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {!loading
            ? post.map((data) => <ArticleCard key={data.$id} data={data} />)
            : [...Array(8)].map((data, id) => <SkeletonCard key={id} />)}
        </div>
      </section>
    </>
  );
}

export default Feed;
