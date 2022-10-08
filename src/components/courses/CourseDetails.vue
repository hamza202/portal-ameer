<template>
  <div class="course-details">
    <div class="price-title">
      <h1>{{ course.name }}</h1>
      <div class="price">{{ getPrice(course.total_price) }}</div>
    </div>
    <div class="desc">
      {{ course.summary }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style></style>
