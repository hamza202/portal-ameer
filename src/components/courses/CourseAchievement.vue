<template>
  <div class="course-achievement">
    <h2>الانجازات الخاصة بالدورة</h2>
    <div class="achievement-list">
      <div class="achievement-box">
        <div class="icon">
          <EyeIcon />
        </div>
        <h5>0</h5>
        <span>مشاهدة</span>
      </div>
      <div class="achievement-box">
        <div class="icon">
          <UserIcon />
        </div>
        <h5>{{ course.users_count }}</h5>
        <span>مشترك</span>
      </div>
      <div class="achievement-box">
        <div class="icon">
          <VideoIcon />
        </div>
        <h5>0</h5>
        <span>فيديو</span>
      </div>
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
