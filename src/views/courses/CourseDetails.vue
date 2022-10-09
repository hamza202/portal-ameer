<template>
  <div v-if="course" class="course-page">
    <div class="course-page-header">
      <div class="container-content">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="course-image">
              <img :src="course.base_image" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="course-header-details">
              <h5>New</h5>
              <h1>{{ course.name }}</h1>
              <div class="course-price">
                <strong>{{ course.price.formatted }}</strong
                ><span></span>
              </div>
              <div class="add-to-favourite">
                <span>Owned</span>
                <button
                  v-if="course.purchased"
                  class="btn add-to-cart main-btn"
                >
                  Go to course
                </button>

                <button v-else class="btn add-to-cart main-btn">Buy NOW</button>

                <button
                  :class="[
                    'btn',
                    'add-to-favourite-btn',
                    course.is_wishlist ? 'is_wishlist' : 'not_is_wishlist',
                  ]"
                >
                  <vue-feather type="heart" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="course-header-details-box">
              <h5>Course Category</h5>
              <p>
                <vue-feather type="list" /><span>{{
                  course.category.name
                }}</span>
              </p>
            </div>
            <div class="row">
              <div class="col">
                <div class="course-header-details-box">
                  <h5>hours</h5>
                  <p>
                    <vue-feather type="clock" /><span>{{
                      course.number_of_hours
                    }}</span>
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="course-header-details-box">
                  <h5>videos</h5>
                  <p>
                    <vue-feather type="video" /><span>{{
                      course.number_of_videos
                    }}</span>
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="course-header-details-box">
                  <h5>FILE</h5>
                  <p>
                    <vue-feather type="download" /><span>{{
                      course.number_of_download_files
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="course-header-details-box">
              <h5>levely</h5>
              <p>
                <vue-feather type="trending-up" /><span>{{
                  course.level.name
                }}</span>
              </p>
            </div>

            <div class="course-header-details-box">
              <h5>Ratings</h5>
              <div class="d-flex">
                <FiveStars
                  size="5"
                  themeStyle="1"
                  :stars="course.rating.toFixed()"
                />

                <span>4/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="course-page-content">
      <div class="container-content">
        <div class="row">
          <div class="col-lg-8">
            <div class="course-page-body">
              <div class="course-page-body-details">
                <h2>Details</h2>
                <p>
                  {{ course.description }}
                </p>
              </div>
              <div class="course-page-body-details">
                <h2>What you'll learn</h2>
                <p>
                  {{ course.what_you_will_learn }}
                </p>
              </div>
              <div class="course-accordion">
                <Accordion :activeIndex="activeUnitIndex">
                  <AccordionTab
                    v-for="(unit, unitIndex) in units"
                    :key="unitIndex"
                    ><template #header>
                      <h4>{{ unit.name }}</h4>
                      <div class="lectures-count">
                        {{ unit.lectures.length }} lectures
                      </div>
                    </template>
                    <ul>
                      <li
                        v-for="(lecture, lectureIndex) in unit.lectures"
                        :key="lectureIndex"
                      >
                        <div class="icon">
                          <vue-feather type="video" />
                        </div>
                        <h5>{{ lecture.name }}</h5>
                        <div class="play">
                          <span>play</span>
                          <vue-feather type="play" />
                        </div>
                      </li>
                    </ul>
                  </AccordionTab>
                </Accordion>
              </div>

              <!-- <div class="reviews">
                <h2>Reviews</h2>
                <FiveStars size="5" themeStyle="2" stars="5" />

                <div class="review-form">
                  <div class="input-box">
                    <img src="" alt="" />
                    <input type="text" placeholder="Type your comment" />
                  </div>
                  <button class="btn">SEND</button>
                </div>
                <ul class="reviews-list">
                  <li>
                    <div class="image">
                      <img src="" alt="" />
                    </div>
                    <div class="text">
                      <h5>
                        <span>Ryan Sanders</span>
                        <FiveStars size="5" themeStyle="2" stars="5" />
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A facilis vel consequatur tempora atque blanditiis
                        exercitationem incidunt, alias corporis quam assumenda
                        dicta, temporibus.
                      </p>
                    </div>
                  </li>
                </ul>
                <a class="more-reviews">View More</a>
              </div> -->
            </div>
          </div>
          <div class="col-lg-4">
            <div class="course-page-sidebar">
              <div class="course-page-sidebar-widget theme-widget-1">
                <h3>Course instructor</h3>
                <div class="course-page-sidebar-widget-body">
                  <div class="image">
                    <img src="/images/user-1.png" alt="" />
                  </div>
                  <h3>Ryan Sanders</h3>
                  <span>Security Ex</span>
                  <a href="" class="btn main-btn">MORE</a>
                </div>
              </div>
              <div class="course-page-sidebar-widget theme-widget-1">
                <h3>Course Syllabus</h3>
                <div class="course-page-sidebar-widget-body">
                  <h3>Book a private appointment with</h3>
                  <span>instructor</span>
                  <a href="" class="btn main-btn">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import FiveStars from "@/components/FiveStars.vue";
import ApiService from "@/services/ApiService";

export default {
  data() {
    return {
      course: null,
      units: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      ApiService.get(`courses/${this.$route.params.id}/show`).then((res) => {
        this.course = res.data.data.course;
        const units = res.data.data.course.units;
        this.units = units;
      });
    },
  },
  components: {
    Accordion: Accordion,
    AccordionTab: AccordionTab,
    FiveStars,
  },
};
</script>

<style></style>
