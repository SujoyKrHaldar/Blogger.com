/* eslint-disable no-useless-catch */
import { Client, Databases, Query } from "appwrite";
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
      if (error.type === "document_already_exists") throw "Username is taken.";
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

  async getProfileByUsername(username) {
    try {
      const profile = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteUserCollectionId,
        [Query.equal("username", [username])]
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
