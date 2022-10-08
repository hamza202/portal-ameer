<template>
  <div class="other-courses">
    <h2>دورات مشابهة</h2>
    <b-row>
      <b-col v-for="(course, index) in courses" :key="index" md="4">
        <CourseCard :item="course" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style></style>
