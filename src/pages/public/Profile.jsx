/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import {
  MetaTags,
  ProfileBody,
  ProfileHeader,
  ProfileSkeletonUI,
} from "../../components";
import { useFetchProfile } from "../../hooks";
import PageNotFound from "./PageNotFound";

function Profile() {
  const { username } = useParams();
  const { profile, loading, notFound } = useFetchProfile(username.slice(1));

  return (
    <>
      <MetaTags
        conicalRoute={`/@${username}`}
        title={profile?.name ? `${profile?.name} • Blogger.com` : "Blogger.com"}
        description={profile?.bio ? `${profile?.bio}` : ""}
      />

      {loading ? (
        <ProfileSkeletonUI />
      ) : notFound ? (
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
