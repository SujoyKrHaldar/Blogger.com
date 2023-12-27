import { useParams } from "react-router-dom";
import { ArticleBody, ArticleSkeletonUI, MetaTags } from "../../components";
import { useFetchPostBySlug } from "../../hooks";
import PageNotFound from "./PageNotFound";

function Article() {
  const { postSlug } = useParams();
  const { post, notFound, loading } = useFetchPostBySlug(postSlug);

  return (
    <>
      <MetaTags
        conicalRoute={`/post/${post?.slug}`}
        title={post?.title ? `${post?.title} • Blogger.com` : "Blogger.com"}
        description={post?.description ? `${post?.description}` : ""}
      />

      {loading ? (
        <ArticleSkeletonUI />
      ) : notFound ? (
        <PageNotFound />
      ) : (
        <ArticleBody post={post} />
      )}
    </>
  );
}

export default Article;
