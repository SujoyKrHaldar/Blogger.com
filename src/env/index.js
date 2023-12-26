const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

  appwriteUserCollectionId: String(
    import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID
  ),
  appwritePostCollectionId: String(
    import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID
  ),
  appwriteUserProfilePicStorageId: String(
    import.meta.env.VITE_APPWRITE_USER_PROFILE_PIC_STORAGE_ID
  ),
  clientUrl: String(import.meta.env.VITE_CLIENT_URL),
};

export default config;
