/* eslint-disable react/prop-types */
import ArticleCard from "./ArticleCard";
import CtaBtn from "./CtaBtn";
import SkeletonCard from "../loading-screen/SkeletonCard";

function ArticleList({ title = "", data, url = "", urlText = "" }) {
  return (
    <div className="container">
      <div className="flex items-center justify-between mb-12">
        {title && <h2>{title}</h2>}
        {url && (
          <CtaBtn url={url} className="text-white">
            <p>{urlText}</p>
          </CtaBtn>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {data.length > 0
          ? data.map((data) => <ArticleCard key={data.id} {...data} />)
          : [...Array(8)].map((data, id) => <SkeletonCard key={id} />)}
      </div>
    </div>
  );
}

export default ArticleList;
