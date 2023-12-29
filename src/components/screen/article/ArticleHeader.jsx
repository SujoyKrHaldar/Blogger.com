/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Image from "../../shared/Image";
import ArticlePublicButtons from "./ArticlePublicButtons";

function ArticleHeader({ post }) {
  return (
    <>
      <div className="container">
        <p className="text-center">
          {new Date(post.$createdAt).toDateString()}
        </p>

        <h1 className="text-center leading-tight font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-center">
          by{" "}
          <Link
            className="text-green-600 font-semibold"
            to={`/@${post.user.username}`}
          >
            {post.user.name}
          </Link>
        </p>

        <ArticlePublicButtons />
      </div>
      <div className="w-full h-[500px] overflow-hidden bg-white border border-black rounded-t-[100px]">
        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </>
  );
}

export default ArticleHeader;
