import moment from "moment/moment";

export default {
  methods: {
    afterSubmit(message) {
      this.$toast.add({severity:'success', summary: 'Success', detail:message, life: 3000});
    },
    dateFormatter($date){
      return moment($date).format('YYYY-MM-DD');
    }
  }
};
