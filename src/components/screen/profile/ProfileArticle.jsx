/* eslint-disable react/prop-types */
import Image from "../../shared/Image";
import CtaBtn from "../../shared/CtaBtn";

function ProfileArticle({ isProfileOwner, name, article }) {
  return (
    <>
      {article ? (
        ""
      ) : isProfileOwner ? (
        <div className="text-center space-y-4 py-16 pt-8 border border-gray-400">
          <div className="w-[230px] h-auto mx-auto">
            <Image src="/create-post.png" />
          </div>
          <h2 className="text-2xl font-bold">Write something</h2>
          <p className="max-w-sm mx-auto">
            Looking to share your experience and join in the community?
          </p>
          <CtaBtn url="/create" className="text-white">
            Share a Post
          </CtaBtn>
        </div>
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
