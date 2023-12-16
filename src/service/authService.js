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

      //   const currentSession = await this.account.getSession("current");

      //   if (currentUser && currentSession) return { currentUser, currentSession };
    } catch (error) {
      return;
    }
  }

  //   async socialLogin(provider) {
  //     try {
  //       this.account.createOAuth2Session(
  //         provider,
  //         `${config.clientUrl}`,
  //         `${config.clientUrl}/login`
  //       );
  //     } catch (error) {
  //       throw error.message;
  //     }
  //   }

  // async deleteAccount(userId) {
  //     try {
  //         const status = await this.account.dele;
  //         // console.log(status);
  //         return status
  //     } catch (error) {
  //         throw `Something went wrong while delete account, ${error.message}`;
  //     }
  // }

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
