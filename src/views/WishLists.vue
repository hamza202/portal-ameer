<template>
  <div>
    <!--Start My Course Price-->
    <page-header title="Wish List"/>

    <section v-if="my_course.length" class="section-padding">
      <div class="container-content">
        <div
            class="row g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 row-cols-1"
        >
          <div v-for="(course, idx) in my_course" :key="idx" class="col">
            <CourseCard :course="course" @remove-fave="removeFave" :splice="true"></CourseCard>
          </div>
        </div>
      </div>
    </section>
    <!--Start My Course Price-->
    <loading-content v-if="!contentLoading" class="text-center"/>
  </div>

</template>

<script>
import ApiService from "@/services/ApiService";
import CourseCard from "@/components/courses/CourseCard.vue";
import pageHeader from "@/components/PageHeader.vue";
import LoadingContent from "@/components/LoadingContent.vue";
export default {
  name: "WishLists",
  components: {CourseCard,pageHeader, LoadingContent},
  data() {
    return {
      my_course: [],
      contentLoading: false,
    }
  },
  methods: {
    getData() {
      ApiService.get("wish-lists").then((res) => {
        this.my_course = res.data.data.courses;
        this.contentLoading = true;
      });
    },
    removeFave(id){
      let arr = this.my_course;
        const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
        arr.splice(objWithIdIndex, 1);
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
