import { ROUTES } from "../../constants/routes";
import LoadableComponent from "./../Loadable/index";

export const userRouter = [
  {
    path: ROUTES.userBase,
    name: "user",
    title: "User",
    component: LoadableComponent(
      () => import("../../components/Layout/UserLayout")
    ),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: ROUTES.loginPage,
    name: "login",
    title: "login",
    component: LoadableComponent(() => import("../../screens/login")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.signUpPage,
    name: "signUp",
    title: "signUp",
    component: LoadableComponent(() => import("../../screens/signup")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.forgotPasswordPage,
    name: "ForgotPassword",
    title: "forgotPassword",
    component: LoadableComponent(() => import("../../screens/forgotPassword")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
];

export const appRouters = [
  {
    path: ROUTES.appBase,
    exact: false,
    name: "home",
    permission: "",
    title: "Home",
    icon: "home",
    component: LoadableComponent(
      () => import("../../components/Layout/AppLayout")
    ),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: ROUTES.oauth,
    name: "My Health Data",
    title: "oauth",
    component: LoadableComponent(() => import("../../screens/oauth")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.healthData,
    name: "My Health Data",
    title: "My Health Data",
    component: LoadableComponent(() => import("../../screens/healthData")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.profile,
    name: "Profile",
    title: "Profile",
    component: LoadableComponent(() => import("../../screens/profile")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.connections,
    name: "Connections",
    title: "Connections",
    component: LoadableComponent(() => import("../../screens/connections")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.timeLine,
    name: "MyHealthData",
    title: "Timeline",
    component: LoadableComponent(() => import("../../screens/timeline")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.timeLineDetails,
    name: "MyHealthData",
    title: "TimelineDetails",
    component: LoadableComponent(() => import("../../screens/timelineDetails")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
  {
    path: ROUTES.settings,
    name: "Settings",
    title: "Settings",
    component: LoadableComponent(() => import("../../screens/settings")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
];
export const routers = [...appRouters, ...userRouter];
