/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Image from "../../shared/Image";
import { useSelector } from "react-redux";
import {
  IconBookmarkedOff,
  IconHeartOff,
  IconBookmarkedOn,
  IconHeartOn,
} from "../../../assets/icons";
import { useState } from "react";

function ArticleBody({ post }) {
  const { userData } = useSelector((state) => state.auth);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="py-32 space-y-16">
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

        <div
          className="w-fit mt-8 mx-auto flex items-center justify-center 
        py-2 px-8 border-t border-b border-gray-300"
        >
          <div
            onClick={() => setIsLiked(!isLiked)}
            className="text-xl cursor-pointer pr-6 border-r border-gray-400"
          >
            {isLiked ? <IconHeartOn /> : <IconHeartOff />}
          </div>
          <div
            onClick={() => setIsSaved(!isSaved)}
            className="text-lg cursor-pointer pl-6"
          >
            {isSaved ? <IconBookmarkedOn /> : <IconBookmarkedOff />}
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] overflow-hidden bg-white border border-black rounded-t-[100px]">
        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      {userData && post?.user?.$id === userData.$id && (
        <div
          className="z-10 bg-white border border-gray-500 shadow-2xl rounded-xl
            fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center"
        >
          <Link
            to={`/edit/${post.$id}`}
            className="border-r border-dashed border-black px-6 py-3 hover:bg-green-500 hover:text-white duration-300"
          >
            <p>Update</p>
          </Link>
          <p className="px-6 py-3 cursor-pointer hover:bg-red-600 hover:text-white duration-300">
            Delete
          </p>
        </div>
      )}
    </section>
  );
}

export default ArticleBody;
