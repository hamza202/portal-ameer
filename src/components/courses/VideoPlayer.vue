<template>
  <div oncontextmenu="return false;">
    <vue-plyr ref="plyr">
      <video controls crossorigin playsinline autoplay data-poster="poster.jpg">
        <source :size="1080" :src="url" type="video/mp4" />
      </video>
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    url: {
      type: String,
      default() {
        return "";
      },
    },
    lectureId: {
      type: null,
      default() {
        return null;
      },
    },
  },
  mounted() {
    this.$refs.plyr.player.on("ended", () => this.videoEndvideoEnd());
  },
  methods: {
    videoEndvideoEnd() {
      this.$emit("videoEnd", this.lectureId);
    },
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
