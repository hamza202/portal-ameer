<template>
  <div class="loading-content text-center">
    <LoadingOne />
    <h2>... جاري تحميل المحتوى</h2>
  </div>
</template>

<script>
import LoadingOne from "@/components/LoadingOne.vue";
export default {
  components: {
    LoadingOne,
  },
};
</script>

<style lang="scss">
.loading-content {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 25px;
    font-weight: bold;
  }
}
</style>
