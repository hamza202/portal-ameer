<template>
  <div class="course-page-watch">
    <div class="course-page-watch-header">
      <div class="container-content">
        <div class="row">
          <div class="col-lg-8">
            <div v-if="videoUrl && videLoadded" class="course-sec-video">
              <video-player
                :url="videoUrl"
                :image="course.base_image"
                :lecture-id="activeLectureId"
                @video-end="videoEnd($event)"
              />
            </div>
            <div v-else class="course-sec-preview">
              <img :src="course.base_image" alt="" />
            </div>
          </div>
          <div class="col-lg-4 position-relative">
            <div class="course-accordion">
              <Accordion :activeIndex="activeUnitIndex">
                <AccordionTab
                  v-for="(unit, unitIndex) in units"
                  :key="unitIndex"
                  :class="unit.id === activeUnitId ? 'active' : null"
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
                      @click="showVideo(lecture, unit, lectureIndex, unitIndex)"
                      :class="lecture.id === activeLectureId ? 'active' : null"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import FiveStars from "@/components/FiveStars.vue";
import VideoPlayer from "@/components/courses/VideoPlayer.vue";
import ApiService from "@/services/ApiService";

export default {
  data() {
    return {
      course: {},
      units: [],
      videoUrl: "",
      videLoadded: false,
      activeLectureIndex: null,
      activeUnitIndex: 0,
      activeLectureId: null,
      activeUnitId: null,
      activeLecture: null,
      activeUnit: null,
      lectures: [],
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
        this.setLectures(units);
      });
    },
    showVideo(lecture, unit, lectureIndex, unitIndex) {
      this.videLoadded = false;
      setTimeout(() => {
        this.videoUrl = lecture.video.url;
        this.activeLectureIndex = lectureIndex;
        this.activeUnitIndex = unitIndex;
        this.activeLectureId = lecture.id;
        this.activeUnitId = unit.id;
        this.activeLecture = lecture;
        this.activeUnit = unit;
        this.videLoadded = true;
      }, 500);
    },
    setLectures(units) {
      const lectures = [];
      for (let unitIndex = 0; unitIndex < units.length; unitIndex++) {
        const unit = units[unitIndex];
        for (
          let lectureIndex = 0;
          lectureIndex < unit.lectures.length;
          lectureIndex++
        ) {
          const lecture = unit.lectures[lectureIndex];
          lectures.push({
            id: lecture.id,
            video: lecture.video.url,
            lecture: lecture,
            unit: unit,
            lectureIndex: lectureIndex,
            unitIndex: unitIndex,
          });
        }
      }
      console.log(lectures);
      this.lectures = lectures;
      if (lectures.length) {
        this.showVideo(
          lectures[0].lecture,
          lectures[0].unit,
          lectures[0].lectureIndex,
          lectures[0].unitIndex
        );
      }
    },
    videoEnd(video) {
      const itemIndex = this.lectures.findIndex(
        (lecture) => lecture.id === video
      );
      if (itemIndex < this.lectures.length) {
        const nextItem = this.lectures[itemIndex + 1];
        this.showVideo(
          nextItem.lecture,
          nextItem.unit,
          nextItem.lectureIndex,
          nextItem.unitIndex
        );
      }
    },
  },
  components: {
    Accordion: Accordion,
    AccordionTab: AccordionTab,
    FiveStars,
    VideoPlayer,
  },
};
</script>

<style></style>
