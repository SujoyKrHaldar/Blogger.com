/* eslint-disable react/prop-types */
import Image from "../../shared/Image";
import ProfileFallbackUI from "./ProfileFallbackUI";

function ProfileArticle({ isProfileOwner, name, article }) {
  return (
    <>
      {article ? (
        ""
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
