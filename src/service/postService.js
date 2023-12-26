/* eslint-disable no-useless-catch */
import { Client, Databases } from "appwrite";
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
          //   Query.equal("isPublished", [false]),
          //   Query.select(["title", "description", "slug", "user"]),
        ]
      );

      return posts;
    } catch (error) {
      console.log(error.type);
      throw error;
    }
  }

  async getPostBySlug(slug) {}

  async updatePost(data) {}

  async deletePost(postId) {}
}

const postService = new PostService();
export default postService;
