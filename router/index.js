import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import JwtService from "@/services/JwtService";

const routes = [
  {
    path: "/",
    redirect: '/home',
    meta: {
      requiresAuth: false,
      pageTitle: "home",
    },
  },
  {
    path: "/home",
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
      requiresAuth: true,
      pageTitle: "course-details",
    },
  },
  {
    path: "/courses/:id/watch",
    component: () => import("../src/views/courses/watch.vue"),
    meta: {
      requiresAuth: true,
      pageTitle: "course-details",
    },
  },
  {
    path: "/courses",
    component: () => import("../src/views/courses/index.vue"),
    meta: {
      requiresAuth: true,
      pageTitle: "courses",
    },
  },
  {
    path: "/profile",
    component: () => import("../src/views/profile.vue"),
    meta: {
      requiresAuth: true,
      pageTitle: "profile",
    },
  },
  {
    path: "/wish-lists",
    component: () => import("../src/views/WishLists.vue"),
    meta: {
      requiresAuth: true,
      pageTitle: "Wish Lists",
    },
  },
  {
    path: "/cart",
    component: () => import("../src/views/Cart.vue"),
    meta: {
      requiresAuth: true,
      pageTitle: "Cart",
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

router.beforeResolve(to => {
  // reset config to initial state
  store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });
  const loggedIn = JwtService.getToken()
  if (to.meta.requiresAuth && !loggedIn) {
    router.push('/log-in')
  }
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
