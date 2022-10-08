<template>
  <div class="course-page-watch">
    <div class="course-page-watch-header">
      <div class="container-content">
        <div class="row">
          <div class="col-lg-8">
            <div class="course-sec-video">
              <video-player
                :options="{
                  url: 'https://www.w3schools.com/html/mov_bbb.mp4',
                  size: 1080,
                }"
              />
            </div>
          </div>
          <div class="col-lg-4 position-relative">
            <div class="course-accordion">
              <Accordion>
                <AccordionTab
                  ><template #header>
                    <h4>Introduction</h4>
                    <div class="lectures-count">3 lectures</div>
                  </template>
                  <ul>
                    <li>
                      <div class="icon">
                        <vue-feather type="video" />
                      </div>
                      <h5>What is Reconnaissance</h5>
                      <div class="play">
                        <span>play</span>
                        <vue-feather type="play" />
                      </div>
                    </li>
                  </ul>
                </AccordionTab>
                <AccordionTab header="Header II"> Content </AccordionTab>
                <AccordionTab header="Header III"> Content </AccordionTab>
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
                  ً Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="course-page-body-details">
                <h2>What you'll learn</h2>
                <p>
                  01 Footprinting and Reconnaissance <br />
                  02 Scanning Networks and Enumeration <br />
                  03 Password attacks <br />
                  04 Web application vulnerabilities <br />
                  05 System hacking <br />
                  06 Wireless attacks <br />
                  07 IOT pentesting <br />
                  08 Malware attacks <br />
                  09 Cloud <br />
                  10 cryptography <br />
                  11 Active Directory Attacks <br />
                  12 Report Writing <br />
                </p>
              </div>

              <div class="reviews">
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
              </div>
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
import VideoPlayer from "@/components/courses/VideoPlayer.vue";
import ApiService from "@/services/ApiService";

export default {
  mounted() {
    ApiService.get("courses");
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
