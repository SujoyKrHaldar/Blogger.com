/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MetaTags,
  ProfileBody,
  ProfileHeader,
  SplashScreen,
} from "../../components";
import { userProfile } from "../../service";
import PageNotFound from "./PageNotFound";

function Profile() {
  const { username } = useParams();

  const [profile, setProfile] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  // TODO:
  // 3. While accessing this component through /author/:username, just fetch data in this component only using
  //    useEffect or react-query ( in future) fetch data from query parameter ( :username )

  const getUserProfile = async () => {
    if (!username) {
      setNotFound(true);
      return;
    }
    try {
      const { documents } = await userProfile.getProfileByUsername(username);

      if (documents[0]) {
        setProfile(documents[0]);
      } else {
        setNotFound(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [username]);

  return (
    <>
      <MetaTags
        conicalRoute={`/author/${username}`}
        title={profile?.name ? `${profile?.name} • Blogger.com` : "Blogger.com"}
        description={profile?.bio ? `${profile?.bio}` : ""}
      />

      <SplashScreen loading={loading} />
      {loading ? null : notFound ? (
        <PageNotFound />
      ) : (
        <>
          <ProfileHeader profile={profile} />
          <ProfileBody profile={profile} />
        </>
      )}
    </>
  );
}

export default Profile;
