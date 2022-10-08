<template>
  <div class="course-page">
    <div class="course-page-header">
      <div class="row">
        <div class="col-lg-3">
          <div class="course-image">
            <img src="/images/course-1.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
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
          <div class="row">
            <div class="col">
              <div class="course-header-details-box">
                <h5>hours</h5>
                <p><vue-feather type="clock" /><span>21</span></p>
              </div>
            </div>
            <div class="col">
              <div class="course-header-details-box">
                <h5>videos</h5>
                <p><vue-feather type="video" /><span>84</span></p>
              </div>
            </div>
            <div class="col">
              <div class="course-header-details-box">
                <h5>FILE</h5>
                <p><vue-feather type="download" /><span>9</span></p>
              </div>
            </div>
          </div>
          <div class="course-header-details-box">
            <h5>levely</h5>
            <p><vue-feather type="chart" /><span>Beginner</span></p>
          </div>

          <div class="course-header-details-box">
            <h5>Ratings</h5>
            <div class="d-flex">
              <div class="rating-box-1">
                <vue-feather type="list" />
                <vue-feather type="list" />
                <vue-feather type="list" />
                <vue-feather type="list" />
                <vue-feather type="list" />
              </div>
              <span>4/5</span>
            </div>
          </div>
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
