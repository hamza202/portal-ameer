<template>
  <div v-if="course" class="course-page">
    <ToastComp/>
    <div class="course-page-header">
      <div class="container-content">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="course-image">
              <img :src="course.base_image" alt=""/>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="course-header-details">
              <h5 v-if="course.flag">{{ course.flag }}</h5>
              <h1>{{ course.name }}</h1>
              <div class="course-price">
                <strong>{{ course.selling_price.formatted }}</strong
                ><span>{{ course.price.formatted }}</span>
              </div>
              <div class="add-to-favourite">
                <router-link
                    v-if="course.purchased"
                    :to="`/courses/${$route.params.id}/watch`"
                    class="btn add-to-cart main-btn"
                >
                  Go to course
                </router-link>
                <button
                    v-else-if="!isItemInCart"
                    class="btn add-to-cart main-btn"
                    @click="addToCart()"
                >
                  {{ $t('add_to_cart') }}
                </button>
                <button
                    v-else-if="isItemInCart"
                    class="btn add-to-cart red-btn"
                    @click="removeFromCart()"
                >
                  {{ $t('delete_from_cart') }}
                </button>
                <button
                    :class="[
                    'btn',
                    'add-to-favourite-btn',
                    course.is_wishlist ? 'is_wishlist' : 'not_is_wishlist',
                  ]"
                    @click="addToWishlist()"
                >
                  <vue-feather type="heart"/>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="course-header-details-box">
              <h5>Course Category</h5>
              <p>
                <vue-feather type="list"/>
                <span>{{
                    course.category.name
                  }}</span>
              </p>
            </div>
            <div class="row">
              <div class="col">
                <div class="course-header-details-box">
                  <h5>hours</h5>
                  <p>
                    <vue-feather type="clock"/>
                    <span>{{
                        course.number_of_hours
                      }}</span>
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="course-header-details-box">
                  <h5>videos</h5>
                  <p>
                    <vue-feather type="video"/>
                    <span>{{
                        course.number_of_videos
                      }}</span>
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="course-header-details-box">
                  <h5>FILE</h5>
                  <p>
                    <vue-feather type="download"/>
                    <span>{{
                        course.number_of_download_files
                      }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="course-header-details-box">
              <h5>levely</h5>
              <p>
                <vue-feather type="trending-up"/>
                <span>{{
                    course.level.name
                  }}</span>
              </p>
            </div>

            <div class="course-header-details-box">
              <h5>Ratings</h5>
              <div class="d-flex">
                <FiveStars
                    :stars="course.rating.toFixed()"
                    size="5"
                    themeStyle="1"
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
                <Accordion>
                  <AccordionTab
                      v-for="(unit, unitIndex) in units"
                      :key="unitIndex"
                  >
                    <template #header>
                      <h4>{{ unit.name }}</h4>
                      <div class="lectures-count">
                        {{ unit.lectures.length }} lectures
                      </div>
                    </template>
                    <ul>
                      <li
                          v-for="(lecture, lectureIndex) in unit.lectures"
                          :key="lectureIndex"
                          @click="showVideo()"
                      >
                        <div class="icon">
                          <vue-feather type="video"/>
                        </div>
                        <h5>{{ lecture.name }}</h5>
                        <div class="play">
                          <span>play</span>
                          <vue-feather type="play"/>
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
                    <img :src="course.instructor.profile_photo" alt=""/>
                  </div>
                  <h3>{{ course.instructor.name }}</h3>
                  <span>{{ course.instructor.working_field }} </span>
                  <router-link
                      :to="`/instructors/${course.instructor.id}`"
                      class="btn main-btn"
                  >MORE
                  </router-link
                  >
                </div>
              </div>
              <div class="course-page-sidebar-widget theme-widget-1">
                <h3>Course Syllabus</h3>
                <div class="course-page-sidebar-widget-body">
                  <h3>Book a private appointment with</h3>
                  <span>instructor</span>
                  <a class="btn main-btn" href="">Download</a>
                </div>
              </div>
              <div class="course-page-sidebar-widget theme-widget-2" v-if="course.download_files.length">
                <h3>Download Files</h3>
                <div class="course-page-sidebar-widget-body">
                  <ul>
                    <li
                        v-for="(file, fileIndex) in course.download_files"
                        :key="fileIndex"
                    >
                      <a :href="file.url">
                        <vue-feather type="download"/>
                        <span>{{ file.name }} </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="course-page-sidebar-widget theme-widget-3">
                <h3>Certifications qualify</h3>
                <div class="course-page-sidebar-widget-body">
                  <ul>
                    <li
                        v-for="(
                        certificate, certificateIndex
                      ) in course.certificates"
                        :key="certificateIndex"
                    >
                      <img
                          :alt="certificate.company_name"
                          :src="certificate.base_image || '/images/user-1.png'"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LoadingContent v-else/>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import FiveStars from "@/components/FiveStars.vue";
import ApiService from "@/services/ApiService";
import LoadingContent from "@/components/LoadingContent.vue";
import {Actions, Mutations} from "@/store/enums/StoreEnums";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      course: null,
      units: [],
    };
  },
  watch: {
    itemHasDeleted: {
      handler: function (){
        this.deleteMessage()
      }
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    deleteMessage(){
      this.$toast.add({severity: 'success', summary: 'Success', detail: "item is deleted", life: 3000});
    },
    removeFromCart(){
      this.$store.dispatch(Actions.DELETE_CART_ITEM, this.isItemInCart.id);
    },
    showVideo() {
      this.$router.push(`/courses/${this.$route.params.id}/watch`);
    },
    getData() {
      ApiService.get(`courses/${this.$route.params.id}/show`).then((res) => {
        this.course = res.data.data.course;
        const units = res.data.data.course.units;
        this.units = units;
      });
    },
    addToWishlist() {
      if (this.course.is_wishlist) {
        ApiService.delete(`wish-lists/${this.$route.params.id}`).then((res) => {
          this.course.is_wishlist = false;
        });
      } else {
        ApiService.post(`wish-lists?course_id=${this.$route.params.id}`).then(
            (res) => {
              this.course.is_wishlist = true;
            }
        );
      }
    },
    addToCart() {
      ApiService.post(`cart/items?course_id=${this.$route.params.id}`).then(
          (res) => {
            this.$store.commit(Mutations.SET_CART_ITEMS, res)
            this.$toast.add({severity: 'success', summary: 'Success', detail: res.data.message, life: 3000});
          }
      );
    },
  },
  components: {
    Accordion,
    AccordionTab,
    FiveStars,
    LoadingContent,
  },

  computed: {
    ...mapGetters({
      myCart: "getMyCart",
      itemHasDeleted: "itemCartDeleted"
    }),
    isItemInCart(){
      let arr = this.myCart.items;
      return arr.find((item) => {
        return item.course.id === Number(this.$route.params.id);
      })
    }
  },
  created() {

  }
};
</script>
