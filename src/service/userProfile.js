/* eslint-disable no-useless-catch */
import { Client, Databases } from "appwrite";
import config from "../env";

class UserProfile {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async createProfile(data, userId) {
    try {
      const profile = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        userId,
        data
      );

      return profile;
    } catch (error) {
      throw error.message;
    }
  }

  async getProfile(userId) {
    try {
      const profile = await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        userId
      );

      return profile;
    } catch (error) {
      return;
    }
  }

  async updateProfile() {}
}

const userProfile = new UserProfile();
export default userProfile;
