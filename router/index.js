import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/services/JwtService";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../src/views/Home.vue"),
    meta: {
      requiresAuth: false,
      pageTitle: "home",
    },
  },
  {
    path: "/log-in",
    name: "log-in",
    component: () => import("../src/views/auth/LogIn.vue"),
    meta: {
      requiresAuth: false,
      pageTitle: "login",
    },
  },
  {
    path: "/sign_up",
    component: () => import("../src/views/auth/SignUp.vue"),
    meta: {
      requiresAuth: false,
      pageTitle: "sign_up",
    },
  },
  {
    path: "/courses/:id",
    component: () => import("../src/views/courses/CourseDetails.vue"),
    meta: {
      requiresAuth: false,
      pageTitle: "course-details",
    },
  },
  {
    path: "/courses/:id/watch",
    component: () => import("../src/views/courses/watch.vue"),
    meta: {
      requiresAuth: false,
      pageTitle: "course-details",
    },
  },
  // {
  //     // the 404 route, when none of the above matches
  //     path: '/404',
  //     name: '404',
  //     component: () => import('@/views/authentication/Error404.vue'),
  // },
  // {
  //     path: '/500',
  //     name: '500',
  //     component: () => import('@/views/authentication/Error500.vue'),
  // },
  // {
  //     path: '/:pathMatch(.*)*',
  //     redirect: '/404',
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state
  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
