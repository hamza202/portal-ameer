import i18n from "../../src/plugin/i18n.js";
export default {
  namespaced: true,
  state() {
    return {
      lang: null,
    };
  },
  mutations: {
    SET_LANG(state, payload) {
      localStorage.setItem('lang', payload)
      state.lang = payload;
      i18n.global.locale.value = payload
      let htmlEl=document.querySelector("html");
      htmlEl?.setAttribute('lang',payload);
      if(payload === 'ar'){
        htmlEl?.setAttribute('dir','rtl');
      }else {
        htmlEl?.setAttribute('dir','ltr');
      }
    }
  },
  actions: {
    setLang(context, payload) {
      context.commit('SET_LANG', payload);
    }
  },
  getters: {
    getLang(state) {
      return state.lang;
    },
  }
};
