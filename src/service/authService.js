/* eslint-disable no-constant-condition */
/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import config from "../env";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createUser({ name, email, password }) {
    try {
      const newUser = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (newUser) {
        return this.login({ email, password });
      }
    } catch (error) {

      if (error.type === "user_already_exists" || "user_email_already_exists")
        throw "User with the same email already exists.";

      throw error.message;
    }
  }

  async login({ email, password }) {
    try {
      const userSession = await this.account.createEmailSession(
        email,
        password
      );
      return userSession;
    } catch (error) {
      throw error.message;
    }
  }

  async getCurrentUser() {
    try {
      const currentUser = await this.account.get();
      if (currentUser) {
        return currentUser;
      }
    } catch (error) {
      return;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      throw "Logout failed. Please try again later.";
    }
  }
}

const authService = new AuthService();

export default authService;
