/* eslint-disable react/prop-types */
import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";
import ArticlePrivateButtons from "./ArticlePrivateButtons";

function ArticleBody({ post }) {
  return (
    <article className="py-32 space-y-16">
      <ArticleHeader post={post} />
      <ArticleContent post={post} />
      <ArticlePrivateButtons post={post} />
    </article>
  );
}

export default ArticleBody;
