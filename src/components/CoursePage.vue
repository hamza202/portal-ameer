<template>
  <div class="course-page">
    <div class="course-page-header">
      <div class="grid grid-cols-1 smUp:grid-cols-4">
        <div class="col-lg-3">
          <div class="course-image">
            <img src="" alt="" />
          </div>
        </div>
        <div class="col-span-2">
          <div class="course-header-details">
            <h5>New</h5>
            <h1>Cyber Security For Beginners v2022</h1>
            <div class="add-to-favourite">
              <span>Owned</span>
              <button class="btn">
                <vue-feather type="heart" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="course-header-details-box">
            <h5>Course Category</h5>
            <p><vue-feather type="list" /><span>Course Category NAME</span></p>
          </div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeartIcon from "../icons/HeartIcon.vue";

export default {
  components: { HeartIcon },
};
</script>

<style></style>
