<template>
  <div
    :class="[
      'five-stars-view',
      'stars-' + stars,
      'five-stars-style-' + themeStyle,
    ]"
  >
    <div class="star"><vue-feather type="star" :size="size" /></div>
    <div class="star"><vue-feather type="star" :size="size" /></div>
    <div class="star"><vue-feather type="star" :size="size" /></div>
    <div class="star"><vue-feather type="star" :size="size" /></div>
    <div class="star"><vue-feather type="star" :size="size" /></div>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: null,
      default: 5,
    },
    size: {
      type: null,
      default: "20",
    },
    themeStyle: {
      type: null,
      default: "1",
    },
  },
};
</script>

<style></style>
