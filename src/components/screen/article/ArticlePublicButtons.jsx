import { useState } from "react";
import {
  IconBookmarkedOff,
  IconHeartOff,
  IconBookmarkedOn,
  IconHeartOn,
  IconShare,
} from "../../../assets/icons";

function ArticlePublicButtons() {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="w-fit mt-4 mx-auto flex items-center justify-center 
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
        className="text-lg cursor-pointer px-6 border-r border-gray-400"
      >
        {isSaved ? <IconBookmarkedOn /> : <IconBookmarkedOff />}
      </div>
      <div className="text-lg cursor-pointer pl-5">
        <IconShare />
      </div>
    </div>
  );
}

export default ArticlePublicButtons;
