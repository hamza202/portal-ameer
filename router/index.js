import { createRouter, createWebHashHistory } from "vue-router";

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
    component: () => import("../src/views/auth/LogIn.vue"),
    meta: {
      requiresAuth: false,
      pageTitle: "login",
    },
  },
  {
    path: "/course-details",
    component: () => import("../src/views/courses/CourseDetails.vue"),
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
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // reset config to initial state

  // store.dispatch(Actions.VERIFY_AUTH);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
