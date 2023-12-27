import {
  GuestRoute,
  PrivateRoute,
  SemiProtectedRoute,
} from "./routes/ProtectedRoutes";

import Layout from "./layout/Layout";
import Notification from "./layout/Notification";

import LoginForm from "./forms/auth/LoginForm";
import SignupForm from "./forms/auth/SignupForm";
import SetupProfileForm from "./forms/profile/SetupProfileForm";
import ArticleForm from "./forms/article/ArticleForm";

import ArticleCard from "./shared/ArticleCard";
import ArticleList from "./shared/ArticleList";
import CtaBtn from "./shared/CtaBtn";
import Image from "./shared/Image";
import Input from "./shared/Input";
import Textarea from "./shared/Textarea";
import MetaTags from "./shared/MetaTags";
import SearchInput from "./shared/SearchInput";
import ShowError from "./shared/ShowError";
import SubmitBtn from "./shared/SubmitBtn";

import AuthUI from "./screen/auth/AuthUI";
import HomeLanding from "./screen/home/HomeLanding";
import ProfileBody from "./screen/profile/ProfileBody";
import ProfileHeader from "./screen/profile/ProfileHeader";
import SettingsLayout from "./screen/settings/SettingsLayout";
import SettingsTemplate from "./screen/settings/SettingsTemplate";

import SkeletonCard from "./loading-screen/SkeletonCard";
import SplashScreen from "./loading-screen/SplashScreen";
import ProfileSkeletonUI from "./loading-screen/ProfileSkeletonUI";

export {
  ArticleCard,
  ArticleList,
  AuthUI,
  CtaBtn,
  GuestRoute,
  HomeLanding,
  Image,
  Input,
  Textarea,
  Layout,
  LoginForm,
  MetaTags,
  Notification,
  PrivateRoute,
  ProfileBody,
  ProfileHeader,
  ProfileSkeletonUI,
  SearchInput,
  SemiProtectedRoute,
  ShowError,
  SignupForm,
  SkeletonCard,
  SplashScreen,
  SubmitBtn,
  SettingsLayout,
  SetupProfileForm,
  ArticleForm,
  SettingsTemplate,
};
