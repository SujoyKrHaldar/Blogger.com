import { useEffect, useState } from "react";
import {
  MetaTags,
  ProfileHeader,
  ProfileBody,
  SplashScreen,
} from "../../components";
import { userProfile } from "../../service";
import { useSelector } from "react-redux";

function Profile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { userData, isActivated, authStatus } = useSelector(
    (state) => state.auth
  );

  const getUserProfile = async () => {
    try {
      const data = await userProfile.getProfile(userData.$id);
      setProfile(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <MetaTags
        conicalRoute={`/author/${profile?.username}`}
        title={`${profile?.name} - Blogger.com`}
        description={`${profile?.bio}`}
      />

      {loading ? (
        <SplashScreen loading={loading} title="Loading" />
      ) : (
        <>
          <ProfileHeader profile={profile} />
          <ProfileBody />
        </>
      )}
    </>
  );
}

export default Profile;
