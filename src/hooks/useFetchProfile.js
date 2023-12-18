/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { userProfile } from "../service";

function useFetchProfile(username) {
  const [profile, setProfile] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const getUserProfile = async () => {
    try {
      const { documents } = await userProfile.getProfileByUsername(username);
      if (documents[0]) {
        setProfile(documents[0]);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [username]);

  return { profile, loading, notFound };
}

export default useFetchProfile;
