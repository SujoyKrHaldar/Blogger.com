import { MetaTags, ArticleForm } from "../../components";

function CreateArticle() {
  return (
    <>
      <MetaTags
        title="Create new Article • Blogger.com"
        description="manage account"
        conicalRoute="/create"
      />

      <ArticleForm />
    </>
  );
}

export default CreateArticle;
