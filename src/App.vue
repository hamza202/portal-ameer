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
import {useMeta} from 'vue-meta';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import ApiService from "./services/ApiService";

export default {
  components: {TheFooter, TheHeader},
  setup() {
    useMeta({
      title: `Cyber Sky || Home`
    })
  },
  data() {
    return {
      data: null
    }
  },
  methods: {},
  mounted() {

  },
   created() {
       ApiService.post('auth/login', {email: 'hamza@gmail.com', password:'12345678'}).then((res) =>{
        console.log(res)
      })

    ApiService.init()
  },
  computed: {},
}
</script>
<style scoped>

</style>
