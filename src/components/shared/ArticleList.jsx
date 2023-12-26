/* eslint-disable react/prop-types */
import ArticleCard from "./ArticleCard";
import SkeletonCard from "../loading-screen/SkeletonCard";

function ArticleList({ data, loading }) {
  return (
    <section className="container py-28 space-y-8">
      <h1 className="text-4xl font-bold ">Latest Posts</h1>
      
      <div className="grid grid-cols-4 gap-2">
        {!loading
          ? data.map((data) => <ArticleCard key={data.$id} data={data} />)
          : [...Array(8)].map((data, id) => <SkeletonCard key={id} />)}
      </div>
    </section>
  );
}

export default ArticleList;
