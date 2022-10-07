<template>
  <div>
    <!--  {{$t('hello')}}-->

    <CoursePage />
  </div>
</template>

<script>
import CoursePage from "../components/CoursePage.vue";

export default {
  name: "Home",
  components: { CoursePage },
};
</script>

<style scoped></style>
