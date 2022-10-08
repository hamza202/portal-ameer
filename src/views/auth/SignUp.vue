<template>
  <section class="section-padding">

    <ToastComp />
    <div class="container-content">
      <FormValidate
          ref="form"
          :validation-schema="schema"
          @submit="onSubmit"
          v-slot="{ errors }"
          autocomplete="off"
      >
        <div class="form-style">
          <div class="flex justify-center">
            <div class="lgUp:basis-8/12 xlUp:basis-6/12 basis-full">
              <div class="auth-card">
                <h1 class="main-title mb-6 smDown:mb-4 capitalize">
                  {{ $t('sign_up') }}
                </h1>
                <div class="flex smDown:flex-wrap smUp:space-x-3">
                  <div class="smUp:basis-6/12 basis-full">
                    <input-with-validation
                        label="first_name"
                        :isRequired="true"
                        :topLabel="true"
                        type="text"
                        name="first_name"
                        v-model="form.first_name"
                        :TPlaceHolder="true"
                        setPlaceHolder="enter_f_name"
                        icon="pi pi-user"></input-with-validation>
                  </div>
                  <div class="smUp:basis-6/12 basis-full">
                    <input-with-validation
                        label="last_name"
                        :isRequired="true"
                        :topLabel="true"
                        type="text"
                        name="first_name"
                        v-model="form.last_name"
                        :TPlaceHolder="true"
                        setPlaceHolder="enter_l_name"
                        icon="pi pi-user"></input-with-validation>
                  </div>
                </div>
                <input-with-validation
                    label="email"
                    :isRequired="true"
                    :topLabel="true"
                    type="email"
                    name="email"
                    v-model="form.email"
                    :TPlaceHolder="false"
                    setPlaceHolder="example@email.com"
                    icon="pi pi-envelope"></input-with-validation>
                <input-with-validation
                    label="password"
                    :isRequired="true"
                    :topLabel="true"
                    type="password"
                    name="password"
                    v-model="form.password"
                    setPlaceHolder="enter_pass"
                    icon="pi pi-unlock"></input-with-validation>
                <p class="text-green-300 mb-4">
                  {{$t('forget_pass')}}
                </p>
                <button type="submit" class="main-btn !px-10">
                  {{$t('sign_in')}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </FormValidate>
    </div>
  </section>
</template>

<script>
import Toast from 'primevue/toast';
import * as Yup from "yup";
import { Actions } from '@/store/enums/StoreEnums';

export default {
  data() {
    return {
      form: {
        first_name:null,
        email: null,
        password: null,
      },
      formErrors: {},
    }
  },
  methods: {
    async onSubmit() {
      // Clear existing errors
      await this.$store.dispatch(Actions.LOGOUT);
      await this.$store.dispatch(Actions.LOGIN, this.form);
      const [errorName] = Object.keys(this.$store.getters.getErrors);
      const error = this.$store.getters.getErrors[errorName];
      if (!error) {
        this.$router.push({name: 'home'})
      } else {
        this.$toast.add({severity: 'error', summary: 'error', detail: 'Wrong email or password', life: 3000});

      }
    }
  },
  computed: {
    schema() {
      return Yup.object().shape({
        first_name:Yup.string().required().label(this.$t('first_name')),
        last_name:Yup.string().required().label(this.$t('last_name')),
        email: Yup.string().required().email().label(this.$t('email')),
        password: Yup.string().required().label(this.$t('password')),
      });
    }
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>
