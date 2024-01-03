/* eslint-disable no-constant-condition */
/* eslint-disable no-useless-catch */
import { Account, Client, ID } from "appwrite";
import config from "../env";
import userProfile from "./userProfile";

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
      const userData = await this.account.get();
      if (userData) {
        const profileData = await userProfile.getProfile(userData.$id);
        if (profileData) return { userData, profileData };

        return { userData };
      }
    } catch (error) {
      return;
    }
  }

  async getCurrentSession() {
    try {
      return await this.account.getSession("current");
    } catch (error) {
      return;
    }
  }

  async getAllSession() {
    try {
      const sessionList = await this.account.listSessions();
      return sessionList;
    } catch (error) {
      return;
    }
  }

  async updatePassword(newPassword, oldPassword) {
    try {
      const response = await this.account.updatePassword(
        newPassword,
        oldPassword
      );
      return response;
    } catch (error) {
      if (error.type === "user_invalid_credentials")
        throw "Invalid credentials.";

      throw error.message;
    }
  }

  async deleteSession(sessionId = "current") {
    try {
      await this.account.deleteSession(sessionId);
    } catch (error) {
      throw error.message;
    }
  }
}

const authService = new AuthService();

export default authService;
