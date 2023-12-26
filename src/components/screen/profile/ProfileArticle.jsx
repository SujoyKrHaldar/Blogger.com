/* eslint-disable react/prop-types */
import ArticleCard from "../../shared/ArticleCard";
import Image from "../../shared/Image";
import ProfileFallbackUI from "./ProfileFallbackUI";
import { Link } from "react-router-dom";

function ProfileArticle({ isProfileOwner, name, article }) {
  return (
    <>
      {article && article.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {article.map((data) => (
            <ArticleCard key={data.$id} data={data} />
          ))}

          {isProfileOwner && (
            <Link
              to="/create"
              className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-100
            w-full h-full duration-300 hover:bg-gray-50 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-6xl font-normal text-gray-300">+</p>
                <p className="font-medium text-gray-400">Create new</p>
              </div>
            </Link>
          )}
        </div>
      ) : isProfileOwner ? (
        <ProfileFallbackUI
          title="Write something"
          description=" Looking to share your experience and join in the community? write something and get started."
          redirectText=" Share a Post"
          redirectTo="/create"
          imgSrc="/create-post.png"
        />
      ) : (
        <div className="text-center py-8 space-y-4">
          <div className="w-[130px] h-auto mx-auto">
            <Image src="/no-data.png" />
          </div>
          <p className="py-2 px-8 rounded-xl w-fit mx-auto bg-gray-100 border border-gray-200">
            {name} has not written any stories yet.
          </p>
        </div>
      )}
    </>
  );
}

export default ProfileArticle;
