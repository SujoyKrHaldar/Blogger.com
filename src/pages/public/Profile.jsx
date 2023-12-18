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

  const { userData, authStatus } = useSelector((state) => state.auth);
  const { profileData, isActivated } = useSelector((state) => state.profile);

  // TODO:
  // 1. Auth user can view its profile at profile/:userid ( protected route ) and /author/:username ( public route)
  // 2. For profile/:userId we need to show data from redux store. data will stored along with userdata ( auth user data)
  //    while manual login or autologin while refreshing (App.jsx ) or while creating public profile ( /get-started )
  // 3. While accessing this component through /author/:username, just fetch data in this component only using
  //    useEffect or react-query ( in future) fetch data from query parameter ( :username )

  // const getUserProfile = async () => {
  //   try {
  //     const data = await userProfile.getProfile(userData.$id);
  //     setProfile(data);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getUserProfile();
  // }, []);

  return (
    <>
      <MetaTags
        conicalRoute={`/author/${profileData?.username}`}
        title={
          profileData.name
            ? `${profileData?.name} - Blogger.com`
            : "Blogger.com"
        }
        description={profileData.bio ? `${profileData?.bio}` : ""}
      />

      {/* {loading ? (
        <SplashScreen loading={loading} title="Loading" />
      ) : ( */}
      <>
        <ProfileHeader profile={profileData} />
        <ProfileBody />
      </>
      {/* )}*/}
    </>
  );
}

export default Profile;
