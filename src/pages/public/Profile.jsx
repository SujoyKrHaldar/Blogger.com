/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import {
  MetaTags,
  ProfileBody,
  ProfileHeader,
  SplashScreen,
} from "../../components";
import { useFetchProfile } from "../../hooks";
import PageNotFound from "./PageNotFound";

function Profile() {
  const { username } = useParams();
  const { profile, loading, notFound } = useFetchProfile(username);

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
