/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import CtaBtn from "../../shared/CtaBtn";
import Image from "../../shared/Image";
import ProfileAbout from "./ProfileAbout";
import ProfileArticle from "./ProfileArticle";
import ProfileNavbar from "./ProfileNavbar";

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

  const navigateTabs = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <section className="container min-h-full py-8 pt-4 space-y-8 overflow-all">
        <ProfileNavbar
          isProfileOwner={isProfileOwner}
          tabs={tabs}
          navigateTabs={navigateTabs}
          currentTab={currentTab}
        />

        {currentTab === "Article" && (
          <ProfileArticle
            isProfileOwner={isProfileOwner}
            name={profile.name}
            article={null}
          />
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
          <ProfileAbout
            isProfileOwner={isProfileOwner}
            name={profile.name}
            about={profile.about}
          />
        )}
      </section>
      <div className="bg-white w-full h-[70px] border-t border-b border-gray-500 py-4"></div>
    </>
  );
}

export default ProfileBody;
