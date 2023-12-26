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

  async createPost(data) {}

  async getAllPosts() {
    try {
      const posts = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwritePostCollectionId,
        [
          Query.orderDesc("$createdAt"),
          Query.limit(25),
          Query.offset(0),
          // Query.equal("isPublished", [true]),
        ]
      );
      // console.log(posts);
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getPostBySlug(slug) {}

  async getPostBySearch(text) {}

  async updatePost(data) {}

  async deletePost(postId) {}
}

const postService = new PostService();
export default postService;
