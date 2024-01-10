/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileAbout from "./ProfileAbout";
import ProfileArticle from "./ProfileArticle";
import ProfileNavbar from "./ProfileNavbar";
import ProfileFallbackUI from "./ProfileFallbackUI";

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
            article={profile?.article.sort(
              (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
            )}
          />
        )}

        {currentTab === "Saved" && (
          <ProfileFallbackUI
            title="No saved post found"
            redirectText=" Browse Posts"
            redirectTo="/feed"
            imgSrc="/save-post.png"
          />
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
