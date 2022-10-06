<template>
<div>
  <button @click="setLang(opLang)">{{ opLang }}</button>
  {{ $t('home') }}
</div>
</template>

<script>
export default {
  name: "TheFooter",
  data(){
    return{
      currentLang: null,
    }
  },
  methods:{
    setLang(switchTo) {
      this.$store.dispatch('lang/setLang', switchTo);
      this.currentLang = this.$store.getters['lang/getLang']
      // window.location.reload()
    }
  },
  computed:{
    opLang() {
      let opLang;
      if (this.currentLang === 'ar') {
        opLang = 'en'
      } else {
        opLang = 'ar'
      }
      return opLang;
    }
  },
  created() {
    const storeLang = localStorage.getItem('lang')
    this.$store.dispatch('lang/setLang', storeLang ? storeLang : 'ar');
    this.currentLang = this.$store.getters['lang/getLang']
  }
}
</script>

<style scoped>

</style>
