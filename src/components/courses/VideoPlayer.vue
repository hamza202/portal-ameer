<template>
  <div v-if="options" oncontextmenu="return false;">
    <vue-plyr ref="plyr">
      <video controls crossorigin playsinline data-poster="poster.jpg">
        <source :size="options.size" :src="options.url" type="video/mp4" />
      </video>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    console.log("amer");
    this.$refs.plyr.player.on("ended", () => console.log("ended fired"));
  },
  data() {
    return {
      player: null,
    };
  },
};
</script>
<style>
.video-js {
  width: 100%;
}
</style>
