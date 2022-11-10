<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <the-header />
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>
<script>
import {useMeta} from 'vue-meta';
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {Actions} from "@/store/enums/StoreEnums";
import store from '@/store';
import JwtService from "@/services/JwtService";
import {mapGetters} from "vuex";

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
  mounted() {},
   created() {
     store.dispatch(Actions.VERIFY_AUTH, { api_token: JwtService.getToken() });
     store.dispatch(Actions.CHECK_USER);
   },
  computed: {
    ...mapGetters({
      isAuthGet: "isUserAuthenticated",
    }),
  },
};
</script>
<style scoped></style>
