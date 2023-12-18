/* eslint-disable react/prop-types */
import CtaBtn from "../../shared/CtaBtn";
import Image from "../../shared/Image";

function ProfileAbout({ isProfileOwner, about, name }) {
  return (
    <>
      {about ? (
        <div className="">
          <p
            className={`max-w-3xl leading-8 ${
              !isProfileOwner && "text-center mx-auto"
            }`}
          >
            {about}
          </p>
        </div>
      ) : isProfileOwner ? (
        <div className="text-center space-y-4 py-16 pt-8 border border-gray-400">
          <div className="w-[250px] h-auto mx-auto">
            <Image src="/about-user.png" />
          </div>
          <h2 className="text-2xl font-bold">Tell the world about yourself</h2>
          <p className="max-w-xl mx-auto">
            Here you can share more about yourself: your history, work
            experience, accomplishments, interests, dreams, and more.
          </p>
          <CtaBtn url="/dashboard" className="text-white">
            About Yourself
          </CtaBtn>
        </div>
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
