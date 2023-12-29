/* eslint-disable no-useless-catch */
import { Client, Databases, Query } from "appwrite";
import config from "../env";

class PostService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async getAllPosts() {
    try {
      const posts = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwritePostCollectionId,
        [
          Query.orderDesc("$createdAt"),
          Query.equal("isPublished", [true]),
          Query.limit(25),
          Query.offset(0),
        ]
      );
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getPostBySlug(slug) {
    try {
      const post = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwritePostCollectionId,
        [Query.equal("slug", [slug]), Query.equal("isPublished", [true])]
      );

      return post;
    } catch (error) {
      return;
    }
  }

  async getPostBySearch(searchedtext) {
    try {
      const post = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwritePostCollectionId,
        [
          Query.orderDesc("$createdAt"),
          Query.search("title", searchedtext),
          Query.equal("isPublished", [true]),
          Query.limit(25),
          Query.offset(0),
        ]
      );

      return post;
    } catch (error) {
      return;
    }
  }

  // async getPostById(id) {}

  // async createPost(data) {}

  // async updatePost(data) {}

  // async deletePost(postId) {}
}

const postService = new PostService();
export default postService;
