<template>
  <div>
    <section class="home-hero section-padding bg-green-100">
      <div class="container-content">
        <div class="grid xxlUp:grid-rows-2 xxlUp:grid-cols-3 grid-cols-1 xxlUp:grid-flow-col gap-3">
          <div class="xxlUp:row-span-2 xxlUp:col-span-2">
            <swiper
                v-if="showSwiper"
                :autoplay="{delay: 4000}"
                :loop="true"
                :modules="swiperModules"
                :slides-per-view="1"
                navigation
            >
              <swiper-slide class="relative">
                <img alt="slider" class="w-full h-[55vh] max-h-[450px] mdDown:rounded-lg object-cover rounded-xl"
                     src="/images/slider.webp">
                <div
                    class="p-4 rounded-xl mdDown:rounded-lg bg-white-100 bg-opacity-90 mdDown:ltr:left-[8%] absolute top-1/2 transform translate-y-[-50%]
                    w-9/12 mdDown:w-10/12 mdDown:ltr:left-[8%] mdDown:rt:right-[8%] rtl:left-20 ltr:left-20">
                  <h1 class="hero-title uppercase mb-2 font-bold text-green-100">
                    highly qualified trainers
                  </h1>
                  <p class="text-lg mdDown:text-base">
                    Cyber Sky, where you will find what you are looking for in various cybersecurity disciplines,
                    including courses with highly qualified trainers and virtual labs that simulate reality.
                  </p>
                  <router-link class="main-btn !px-7 mt-3" to="/log-in">
                    {{ $t('sign_in') }}
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div>
            <div class="h-full w-full bg-white-100 rounded-xl p-4 flex items-center space-s-3">
              <div class="basis-auto">
                <Knob v-model="completeCourse" :max="50" :min="0" :strokeWidth="7" readonly/>
              </div>
              <div class="basis-full">
                <h3 class="capitalize text-lg font-medium">
                  Completed Courses
                </h3>
                <ul class="list-unstyled flex items-center space-s-3 mt-1.5">
                  <li class="flex items-center">
                    <svg height="17.266" viewBox="0 0 17.266 17.266" width="17.266" xmlns="http://www.w3.org/2000/svg">
                      <g id="Icon_feather-clock" data-name="Icon feather-clock" opacity="0.5"
                         transform="translate(0.5 0.5)">
                        <path id="Path_24" d="M19.266,11.133A8.133,8.133,0,1,1,11.133,3,8.133,8.133,0,0,1,19.266,11.133Z"
                              data-name="Path 24"
                              fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1" transform="translate(-3 -3)"/>
                        <path id="Path_25" d="M18,9v4.88l3.253,1.627" data-name="Path 25"
                              fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1" transform="translate(-9.867 -5.747)"/>
                      </g>
                    </svg>
                    <span class="text-base font-medium ms-1">
                      21
                    </span>
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.56" height="17.265" viewBox="0 0 26.56 17.265">
                      <g id="Icon_feather-video" data-name="Icon feather-video" transform="translate(0.5 0.5)" opacity="0.5">
                        <path id="Path_26" data-name="Path 26" d="M32.133,10.5,24,16.309l8.133,5.809Z" transform="translate(-6.573 -8.176)" fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <path id="Path_27" data-name="Path 27" d="M3.824,7.5H16.6a2.324,2.324,0,0,1,2.324,2.324V21.442A2.324,2.324,0,0,1,16.6,23.765H3.824A2.324,2.324,0,0,1,1.5,21.442V9.824A2.324,2.324,0,0,1,3.824,7.5Z" transform="translate(-1.5 -7.5)" fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      </g>
                    </svg>

                    <span class="text-base font-medium ms-1">
                      84
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div class="h-full w-full bg-white-100 rounded-xl p-4 flex items-center space-s-3">
              <div class="basis-auto">
                <Knob v-model="unCompleteCourse" :max="50" :min="0" :strokeWidth="7" readonly/>
              </div>
              <div class="basis-full">
                <h3 class="capitalize text-lg font-medium">
                  Incomplete Courses
                </h3>
                <ul class="list-unstyled flex items-center space-s-3 mt-1.5">
                  <li class="flex items-center">
                    <svg height="17.266" viewBox="0 0 17.266 17.266" width="17.266" xmlns="http://www.w3.org/2000/svg">
                      <g id="Icon_feather-clock" data-name="Icon feather-clock" opacity="0.5"
                         transform="translate(0.5 0.5)">
                        <path id="Path_24" d="M19.266,11.133A8.133,8.133,0,1,1,11.133,3,8.133,8.133,0,0,1,19.266,11.133Z"
                              data-name="Path 24"
                              fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1" transform="translate(-3 -3)"/>
                        <path id="Path_25" d="M18,9v4.88l3.253,1.627" data-name="Path 25"
                              fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1" transform="translate(-9.867 -5.747)"/>
                      </g>
                    </svg>
                    <span class="text-base font-medium ms-1">
                      18/21
                    </span>
                  </li>
                  <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.56" height="17.265" viewBox="0 0 26.56 17.265">
                      <g id="Icon_feather-video" data-name="Icon feather-video" transform="translate(0.5 0.5)" opacity="0.5">
                        <path id="Path_26" data-name="Path 26" d="M32.133,10.5,24,16.309l8.133,5.809Z" transform="translate(-6.573 -8.176)" fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <path id="Path_27" data-name="Path 27" d="M3.824,7.5H16.6a2.324,2.324,0,0,1,2.324,2.324V21.442A2.324,2.324,0,0,1,16.6,23.765H3.824A2.324,2.324,0,0,1,1.5,21.442V9.824A2.324,2.324,0,0,1,3.824,7.5Z" transform="translate(-1.5 -7.5)" fill="none" stroke="#143c4e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      </g>
                    </svg>

                    <span class="text-base font-medium ms-1">
                      67/84
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-content">
        <h2 class="sub-title">
          educational paths
        </h2>
        <div class="grid grid-flow-col grid-cols-4">
          <div class="border border-gray-800 rounded-xl p-4">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {Autoplay, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import Knob from 'primevue/knob';


export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    Knob
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.showSwiper = false;
        setTimeout(() => {
          this.showSwiper = true;
        }, 5)
      }
    }
  },
  data() {
    return {
      completeCourse: 20,
      unCompleteCourse:15,
      swiperModules: [Navigation, Autoplay],
      showSwiper: true,
    }
  },
  created() {
  }

};
</script>

<style scoped></style>
