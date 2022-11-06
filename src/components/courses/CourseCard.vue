<template>
  <div  class="course-card r-20px">
    <button class="add-fav-button" :class="{'active': isWish}" @click="addToWishlist()">
      <vue-feather type="heart"/>

    </button>
    <router-link :to="`/courses/${course.id}`" aria-label="course link" class="course-card-img-container" href="#">
      <img :src="course.base_image" alt="course img" height="276" width="379">
      <span v-if="course.flag" class="new-course-span">
          NEW
      </span>
    </router-link>
    <div class="course-card-body">
      <router-link :to="`/courses/${course.id}`" class="title-3 text-uppercase" href="#">
        {{ course.name }}
      </router-link>
      <p class="small-desc main-color mt-1">
        {{ course.description }}
      </p>
      <p class="course-card-category light-gray-color mt-2 small-desc">
        Category Name
      </p>
      <a class="d-flex align-items-center course-card-user mt-2 mb-2" href="#">
        <img alt="img" class="me-2" height="39" :src="course.instructor?.profile_photo || '/images/user2.webp'" width="39">
        <span class="small-desc">
            {{ course?.instructor?.name }}
        </span>
      </a>
      <div class="row align-items-center course-card-list g-3">
        <div class="d-flex align-items-center col-auto">
          <div class="icon">
            <vue-feather type="star"/>
          </div>
          <span>
              {{ course.rating }}
          </span>
        </div>
        <div class="d-flex align-items-center col-auto">
          <div class="icon">
            <vue-feather type="clock"/>
          </div>
          <span>
              {{ course.number_of_hours }}
          </span>
        </div>
        <div class="d-flex align-items-center col-auto">
          <div class="icon">
            <vue-feather type="video"/>
          </div>
          <span>
              {{ course.number_of_videos }}
          </span>
        </div>
        <div class="d-flex align-items-center col-auto">
          <div class="icon">
            <vue-feather type="trending-up"/>
          </div>
          <span>
              {{ course.level.name }}
          </span>
        </div>
      </div>
      <p class="course-card-price mt-2" >
        {{course.selling_price.formatted}} <span v-if="course.has_special_price">{{course.price.formatted}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      default: () => {
        return {}
      }
    },
    splice:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      isWish: null
    }
  },
  methods:{
    addToWishlist() {
      if (this.isWish) {
        ApiService.delete(`wish-lists/${this.course.id}`).then((res) => {
          this.isWish = false;
        });
        if (this.splice){
          this.$emit('remove-fave', this.course.id)
        }
      } else {
        ApiService.post(`wish-lists?course_id=${this.course.id}`).then(
            (res) => {
              this.isWish = true;
            }
        );
      }
    },
  },
  mounted() {
    this.isWish = this.course.is_wishlist
  }
}
</script>

<style scoped>

</style>
