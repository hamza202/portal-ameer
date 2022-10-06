<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <the-header/>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>
<script>
import { useMeta } from 'vue-meta';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {TheFooter, TheHeader},
   setup () {
        useMeta({
        title: `Cyber Sky || Home`
      })
  },
  data() {
    return {
    }
  },
  methods: {},
  mounted() {},
  created() {
    console.log(import.meta.env.VITE_API_URL)
  },
  computed: {},
}
</script>
<style scoped>

</style>
