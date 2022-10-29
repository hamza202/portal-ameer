<template>
  <div>
    <section class="home-hero section-padding bg-green-100">
      <div class="container-content">
        <div
          class="grid xxlUp:grid-rows-2 xxlUp:grid-cols-3 grid-cols-1 grid-cols-2 gap-3"
        >
          <div class="xxlUp:row-span-2 xxlUp:col-span-2 col-span-2">
            <swiper
              v-if="showSwiper"
              :autoplay="{ delay: 4000 }"
              :loop="true"
              :modules="swiperModules"
              :slides-per-view="1"
              navigation
            >
              <swiper-slide class="relative">
                <img
                  alt="slider"
                  class="w-full h-[55vh] max-h-[450px] mdDown:rounded-lg object-cover rounded-xl"
                  src="/images/slider.webp"
                />
                <div
                  class="p-4 rounded-xl mdDown:rounded-lg bg-white-100 bg-opacity-90 mdDown:ltr:left-[8%] absolute top-1/2 transform translate-y-[-50%] w-9/12 mdDown:w-10/12 mdDown:ltr:left-[8%] mdDown:rt:right-[8%] rtl:left-20 ltr:left-20"
                >
                  <h1
                    class="hero-title uppercase mb-2 font-bold text-green-100"
                  >
                    highly qualified trainers
                  </h1>
                  <p class="text-lg mdDown:text-base">
                    Cyber Sky, where you will find what you are looking for in
                    various cybersecurity disciplines, including courses with
                    highly qualified trainers and virtual labs that simulate
                    reality.
                  </p>
                  <router-link class="main-btn !px-7 mt-3" to="/log-in">
                    {{ $t("sign_in") }}
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="col-span-1 mdDown:col-span-full">
            <div
              class="h-full w-full bg-white-100 rounded-xl p-4 flex items-center space-s-3"
            >
              <div class="basis-auto">
                <Knob
                  v-model="completeCourse"
                  :max="50"
                  :min="0"
                  :strokeWidth="7"
                  readonly
                />
              </div>
              <div class="basis-full">
                <h3 class="capitalize text-lg font-medium">
                  Completed Courses
                </h3>
                <ul class="list-unstyled flex items-center space-s-3 mt-1.5">
                  <li class="flex items-center">
                    <svg
                      height="17.266"
                      viewBox="0 0 17.266 17.266"
                      width="17.266"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="Icon_feather-clock"
                        data-name="Icon feather-clock"
                        opacity="0.5"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="Path_24"
                          d="M19.266,11.133A8.133,8.133,0,1,1,11.133,3,8.133,8.133,0,0,1,19.266,11.133Z"
                          data-name="Path 24"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-3 -3)"
                        />
                        <path
                          id="Path_25"
                          d="M18,9v4.88l3.253,1.627"
                          data-name="Path 25"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-9.867 -5.747)"
                        />
                      </g>
                    </svg>
                    <span class="text-base font-medium ms-1"> 21 </span>
                  </li>
                  <li class="flex items-center">
                    <svg
                      height="17.265"
                      viewBox="0 0 26.56 17.265"
                      width="26.56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="Icon_feather-video"
                        data-name="Icon feather-video"
                        opacity="0.5"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="Path_26"
                          d="M32.133,10.5,24,16.309l8.133,5.809Z"
                          data-name="Path 26"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-6.573 -8.176)"
                        />
                        <path
                          id="Path_27"
                          d="M3.824,7.5H16.6a2.324,2.324,0,0,1,2.324,2.324V21.442A2.324,2.324,0,0,1,16.6,23.765H3.824A2.324,2.324,0,0,1,1.5,21.442V9.824A2.324,2.324,0,0,1,3.824,7.5Z"
                          data-name="Path 27"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-1.5 -7.5)"
                        />
                      </g>
                    </svg>

                    <span class="text-base font-medium ms-1"> 84 </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-1 mdDown:col-span-full">
            <div
              class="h-full w-full bg-white-100 rounded-xl p-4 flex items-center space-s-3"
            >
              <div class="basis-auto">
                <Knob
                  v-model="unCompleteCourse"
                  :max="50"
                  :min="0"
                  :strokeWidth="7"
                  readonly
                />
              </div>
              <div class="basis-full">
                <h3 class="capitalize text-lg font-medium">
                  Incomplete Courses
                </h3>
                <ul class="list-unstyled flex items-center space-s-3 mt-1.5">
                  <li class="flex items-center">
                    <svg
                      height="17.266"
                      viewBox="0 0 17.266 17.266"
                      width="17.266"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="Icon_feather-clock"
                        data-name="Icon feather-clock"
                        opacity="0.5"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="Path_24"
                          d="M19.266,11.133A8.133,8.133,0,1,1,11.133,3,8.133,8.133,0,0,1,19.266,11.133Z"
                          data-name="Path 24"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-3 -3)"
                        />
                        <path
                          id="Path_25"
                          d="M18,9v4.88l3.253,1.627"
                          data-name="Path 25"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-9.867 -5.747)"
                        />
                      </g>
                    </svg>
                    <span class="text-base font-medium ms-1"> 18/21 </span>
                  </li>
                  <li class="flex items-center">
                    <svg
                      height="17.265"
                      viewBox="0 0 26.56 17.265"
                      width="26.56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="Icon_feather-video"
                        data-name="Icon feather-video"
                        opacity="0.5"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="Path_26"
                          d="M32.133,10.5,24,16.309l8.133,5.809Z"
                          data-name="Path 26"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-6.573 -8.176)"
                        />
                        <path
                          id="Path_27"
                          d="M3.824,7.5H16.6a2.324,2.324,0,0,1,2.324,2.324V21.442A2.324,2.324,0,0,1,16.6,23.765H3.824A2.324,2.324,0,0,1,1.5,21.442V9.824A2.324,2.324,0,0,1,3.824,7.5Z"
                          data-name="Path 27"
                          fill="none"
                          stroke="#143c4e"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          transform="translate(-1.5 -7.5)"
                        />
                      </g>
                    </svg>

                    <span class="text-base font-medium ms-1"> 67/84 </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Start educational paths Section-->
    <template v-if="contentLoading">
      <section
        v-if="educational_paths.length"
        class="section-padding education-path-section pb-0"
      >
        <div class="container-content">
          <h2 class="sub-title">educational paths</h2>
          <div
            class="grid grid-flow-col grid-cols-4 xlDown:grid-cols-2 mt-4 gap-3"
          >
            <div
              v-for="(education, idx) in educational_paths"
              :key="idx"
              class="border border-gray-800 rounded-xl p-4 text-center relative transition-all ease-in-out duration-300 hover:shadow-xl hover:!border-gray-900"
            >
              <span
                class="absolute top-3 ltr:right-4 rtl:left-4 head-font title-1 font-bold"
              >
                <span class="text-green-500">{{ education.completed }}</span
                >/{{ education.total }}
              </span>
              <img
                :src="education.base_image || defaultEducationImage"
                alt="img"
                class="h-[180px] h-[150px] max-w-[70%] object-cover mx-auto"
              />
              <h3 class="mt-4 title-2 font-bold tow-line h-14">
                {{ education.name }}
              </h3>
              <a class="next-button mt-3.5" href="javascript:void(0)">
                <span class="text font-medium">START NOW</span>
                <span class="icon-container">
                  <span class="icon icon--left">
                    <svg>
                      <use xlink:href="/images/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                  <span class="icon icon--right">
                    <svg>
                      <use xlink:href="/images/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!--End educational paths Section-->

      <!--Start labs Section-->
      <section v-if="labs.length" class="section-padding pb-0">
        <div class="container-content">
          <h2 class="sub-title">labs</h2>
          <div
            class="grid grid-flow-col grid-cols-3 xlDown:grid-cols-2 mt-4 gap-3"
          >
            <div v-for="(lab, idx) in labs" :key="idx" class="labs-card">
              <div class="row g-sm-3 g-2">
                <div class="col-sm-auto">
                  <div class="lab-img">
                    <img
                      :src="lab.base_image || defaultEducationImage"
                      alt="lab-img"
                      class="img-fluid"
                      height="292"
                      width="261"
                    />
                  </div>
                </div>
                <div class="col-sm overflow-hidden">
                  <div class="labs-info">
                    <a
                      aria-label="title"
                      class="title-3 text-uppercase"
                      href="javascript:void(0)"
                    >
                      {{ lab.name }}
                    </a>
                    <p class="mt-1 mb-1 desc">
                      {{ lab.short_description }}
                    </p>
                    <div class="row g-1 label-list flex-wrap">
                      <div v-for="(skill, idx) in lab.skills" class="col-auto">
                        <a aria-label="label" href="#">
                          {{ skill.name }}
                        </a>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mt-2 -mx-1">
                      <div class="px-1">
                        <span class="difficulty-level-label">
                          {{ lab.level.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Start labs Section-->

      <!--Start My Course Price-->
      <section v-if="my_course.length" class="section-padding pb-0">
        <div class="container-content">
          <h2 class="sub-title">My Courses</h2>
          <div
            class="row g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-1 mt-4"
          >
            <div v-for="(course, idx) in my_course" :key="idx" class="col">
              <CourseCard :course="course"></CourseCard>
            </div>
          </div>
        </div>
      </section>
      <!--Start My Course Price-->

      <!--Start My Course Price-->

      <section v-if="instructors.length" class="section-padding">
        <div class="container-content">
          <div
              class="row g-4 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-sm-1 row-cols-1"
          >
            <div
                v-for="(instructor, idx) in instructors"
                :key="idx"
                class="col"
            >
              <div class="instructors-card border position-relative">
                <div class="instructors-lessons d-flex justify-center inline">
                  <svg
                      class="me-2"
                      height="24px"
                      viewBox="0 0 21.49 17.583"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        id="Icon_material-personal-video"
                        d="M21.037,4.5H3.454A1.947,1.947,0,0,0,1.5,6.454V18.176a1.953,1.953,0,0,0,1.954,1.954H8.338v1.954h7.815V20.129h4.884a1.951,1.951,0,0,0,1.944-1.954l.01-11.722A1.953,1.953,0,0,0,21.037,4.5Zm0,13.676H3.454V6.454H21.037Z"
                        data-name="Icon material-personal-video"
                        fill="#143c4e"
                        opacity="0.5"
                        transform="translate(-1.5 -4.5)"
                    />
                  </svg>
                  <p class="big-desc">{{ instructor.courses_count }}</p>
                </div>
                <div class="instructors-inner text-center">
                  <img
                      alt="user"
                      class="mb-3"
                      :src="instructor.base_image || '/images/user-d.webp'"
                  />
                  <h3 class="title-2 mb-2 text-uppercase fw-500">
                    {{ instructor.name }}
                  </h3>
                  <h4 class="title-3 mb-3 text-uppercase fw-400">
                    {{ instructor.working_field }}
                  </h4>
                  <a
                      aria-label="team"
                      class="text-uppercase main-btn px-4"
                      href="javascript:void(0)"
                  >
                    MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></template
    >
    <LoadingContent v-else />
  </div>
</template>

<script>
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import Knob from "primevue/knob";
import ApiService from "@/services/ApiService";
import CourseCard from "@/components/courses/CourseCard.vue";
import store from "@/store/index";
import LoadingContent from "@/components/LoadingContent.vue";

export default {
  name: "Home",
  components: {
    CourseCard,
    Swiper,
    SwiperSlide,
    Knob,
    LoadingContent,
  },
  watch: {
    "$i18n.locale": {
      handler() {
        this.showSwiper = false;
        setTimeout(() => {
          this.showSwiper = true;
        }, 5);
      },
    },
  },
  data() {
    return {
      defaultEducationImage: "/images/instructors.webp",
      completeCourse: 20,
      unCompleteCourse: 15,
      swiperModules: [Navigation, Autoplay],
      showSwiper: true,
      educational_paths: [],
      labs: [],
      my_course: [],
      instructors: [],
      isAuth: false,
      contentLoading: false,
    };
  },
  methods: {
    async getDataIfAuth() {
      await store;
      this.isAuth = this.$store.getters.isUserAuthenticated;
      if (this.isAuth) {
        ApiService.get("my-courses").then((res) => {
          this.my_course = res.data.data.courses;
        });
        ApiService.get("learning-paths/statistics").then((res) => {
          this.educational_paths = res.data.data;
        });
      }
    },
  },
  mounted() {},
  created() {
    ApiService.get("labs").then((res) => {
      this.labs = res.data.data;
      this.contentLoading = true;
    });
    ApiService.get("instructors").then((res) => {
      this.instructors = res.data.data;
    });
    this.getDataIfAuth();
  },
};
</script>

<style scoped></style>
