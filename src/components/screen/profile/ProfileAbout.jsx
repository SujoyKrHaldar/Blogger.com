/* eslint-disable react/prop-types */
import Image from "../../shared/Image";
import ProfileFallbackUI from "./ProfileFallbackUI";

function ProfileAbout({ isProfileOwner, about, name }) {
  return (
    <>
      {about ? (
        <div className="p-8  border border-gray-400">
          <p
            className={`max-w-3xl leading-8 ${
              !isProfileOwner && "text-center mx-auto"
            }`}
          >
            {about}
          </p>
        </div>
      ) : isProfileOwner ? (
        <ProfileFallbackUI
          title="Tell the world about yourself"
          description="Here you can share more about yourself: your history, work
             experience, accomplishments, interests, dreams, and more."
          redirectText="About Yourself"
          redirectTo="/dashboard"
          imgSrc="/about-user.png"
        />
      ) : (
        <div className="text-center space-y-4 py-8">
          <div className="w-[130px] h-auto mx-auto">
            <Image src="/no-data.png" />
          </div>
          <p className="py-2 px-8 rounded-xl w-fit mx-auto bg-gray-100 border border-gray-200">
            {name} has not written any Bio.
          </p>
        </div>
      )}
    </>
  );
}

export default ProfileAbout;
