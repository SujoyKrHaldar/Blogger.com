/* eslint-disable react/prop-types */
import Image from "../../shared/Image";
import CtaBtn from "../../shared/CtaBtn";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProfileBody({ profile }) {
  const { authStatus, userData } = useSelector((state) => state.auth);
  const [currentTab, setCurrentTab] = useState("Article");

  const isProfileOwner = authStatus && profile.$id === userData.$id;

  const tabs = [
    {
      name: "Article",
      active: true,
    },
    {
      name: "Saved",
      active: isProfileOwner,
    },
    {
      name: "About",
      active: true,
    },
  ];

  return (
    <>
      <section className="container min-h-full py-8 pt-4 space-y-8 overflow-all">
        <div
          className={`flex items-center border-b border-t border-gray-400 ${
            isProfileOwner ? "justify-between" : "justify-center"
          }`}
        >
          <div className="flex items-center justify-center">
            {tabs.map(
              (tab) =>
                tab.active && (
                  <p
                    key={tab.name}
                    className={`py-3 px-8 cursor-pointer border-l border-r duration-300 ease-in-out ${
                      tab.name === currentTab
                        ? "border-gray-400 bg-gray-100"
                        : "border-transparent"
                    }`}
                    onClick={() => setCurrentTab(tab.name)}
                  >
                    {tab.name}
                  </p>
                )
            )}
          </div>

          {isProfileOwner && (
            <Link
              to="/dashboard"
              className="py-3 px-8 cursor-pointer border-l border-r border-gray-400 bg-gray-100"
            >
              Edit Profile
            </Link>
          )}
        </div>

        {currentTab === "Article" && (
          <>
            {isProfileOwner ? (
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
                  {profile.name} has not written any stories yet.
                </p>
              </div>
            )}
          </>
        )}

        {currentTab === "Saved" && (
          <div className="text-center space-y-4 py-16 pt-8 border border-gray-400">
            <div className="w-[250px] h-auto mx-auto">
              <Image src="/save-post.png" />
            </div>
            <h2 className="text-2xl font-bold">No saved post found</h2>

            <CtaBtn url="/feed" className="text-white">
              Browse Posts
            </CtaBtn>
          </div>
        )}

        {currentTab === "About" && (
          <>
            {isProfileOwner ? (
              <div className="text-center space-y-4 py-16 pt-8 border border-gray-400">
                <div className="w-[250px] h-auto mx-auto">
                  <Image src="/about-user.png" />
                </div>
                <h2 className="text-2xl font-bold">
                  Tell the world about yourself
                </h2>
                <p className="max-w-xl mx-auto">
                  Here you can share more about yourself: your history, work
                  experience, accomplishments, interests, dreams, and more.
                </p>
                <CtaBtn url="/dashboard" className="text-white">
                  About Yourself
                </CtaBtn>
              </div>
            ) : (
              <div className="text-center space-y-4 py-8 space-y-4">
                <div className="w-[130px] h-auto mx-auto">
                  <Image src="/no-data.png" />
                </div>

                <p className="py-2 px-8 rounded-xl w-fit mx-auto bg-gray-100 border border-gray-200">
                  {profile.name} has not written any Bio.
                </p>
              </div>
            )}
          </>
        )}
      </section>
      <div className="bg-white w-full h-[70px] border-t border-b border-gray-500 py-4"></div>
    </>
  );
}

export default ProfileBody;
