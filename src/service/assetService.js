/* eslint-disable no-useless-catch */
import { Client, Storage, ID } from "appwrite";
import config from "../env";

class AssetService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.storage = new Storage(this.client);
  }

  async upload(asset) {
    try {
      return await this.storage.createFile(
        config.appwriteUserProfilePicStorageId,
        ID.unique(),
        asset
      );
    } catch (error) {
      throw error;
    }
  }

  async getAsset(assetId) {
    try {
      return await this.storage.getFile(
        config.appwriteUserProfilePicStorageId,
        assetId
      );
    } catch (error) {
      throw error;
    }
  }

  getAssetPreview(assetId) {
    const { href } = this.storage.getFilePreview(
      config.appwriteUserProfilePicStorageId,
      assetId
    );

    return href;
  }

  async update(assetId) {
    try {
      return await this.storage.updateFile(
        config.appwriteUserProfilePicStorageId,
        assetId
      );
    } catch (error) {
      throw error;
    }
  }

  async delete(assetId) {
    try {
      return await this.storage.deleteFile(
        config.appwriteUserProfilePicStorageId,
        assetId
      );
    } catch (error) {
      throw error;
    }
  }
}

const assetService = new AssetService();

export default assetService;
