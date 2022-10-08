<template>
  <section class="section-padding">

    <ToastComp/>
    <div class="container-content">
      <FormValidate
          ref="form"
          v-slot="{ errors }"
          :validation-schema="schema"
          autocomplete="off"
          @submit="onSubmit"
      >
        <div class="form-style">
          <div class="flex justify-center">
            <div class="lgUp:basis-8/12 xlUp:basis-6/12 basis-full">
              <div class="auth-card">
                <h1 class="main-title mb-6 smDown:mb-4 capitalize">
                  {{ $t('sign_up') }}
                </h1>
                <div class="grid grid-cols-2 gap-3">
                  <div >
                    <input-with-validation
                        v-model="form.first_name"
                        :TPlaceHolder="true"
                        :isRequired="true"
                        :topLabel="true"
                        icon="pi pi-user"
                        label="first_name"
                        name="first_name"
                        setPlaceHolder="enter_f_name"
                        type="text"></input-with-validation>
                  </div>
                  <div>
                    <input-with-validation
                        v-model="form.last_name"
                        :TPlaceHolder="true"
                        :isRequired="true"
                        :topLabel="true"
                        icon="pi pi-user"
                        label="last_name"
                        name="first_name"
                        setPlaceHolder="enter_l_name"
                        type="text"></input-with-validation>
                  </div>
                </div>
                <input-with-validation
                    v-model="form.email"
                    :TPlaceHolder="false"
                    :isRequired="true"
                    :topLabel="true"
                    icon="pi pi-envelope"
                    label="email"
                    name="email"
                    setPlaceHolder="example@email.com"
                    type="email"></input-with-validation>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <input-with-validation
                        v-model="form.password"
                        :isRequired="true"
                        :topLabel="true"
                        icon="pi pi-unlock"
                        label="password"
                        name="password"
                        setPlaceHolder="enter_pass"
                        type="password"></input-with-validation>
                  </div>
                  <div>
                    <input-with-validation
                        v-model="form.password_confirmation"
                        :isRequired="true"
                        :topLabel="true"
                        icon="pi pi-unlock"
                        label="password_confirmation"
                        name="password_confirmation"
                        setPlaceHolder="enter_pass"
                        type="password"></input-with-validation>
                  </div>
                </div>
                <div class="grid">

                </div>
                <div class="field-checkbox mb-4">
                  <Checkbox inputId="privacy" v-model="form.privacy_policy" :binary="true"/>
                  <label for="privacy">agree the terms and the privacy policy?</label>
                </div>
                <div class="mb-4">
                  <router-link class="text-green-300 mb-4 transition-all ease-in-out duration-300 hover:text-green-500"
                               to="/log-in">
                    I have an account
                  </router-link>
                </div>
                <button class="main-btn !px-10" type="submit">
                  {{ $t('sign_up') }}
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
import * as Yup from "yup";
import {Actions} from '@/store/enums/StoreEnums';
import Checkbox from 'primevue/checkbox';

export default {
  components:{
    Checkbox
  },
  data() {
    return {
      form: {
        first_name: null,
        email: null,
        password: null,
        password_confirmation: null,
        privacy_policy: false
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
      const yupString = Yup.string();
      const hasValueInPassword = !!this.form.password;
      const requiredOrOptional = yupString.required();

      return Yup.object().shape({
        first_name: Yup.string().required().label(this.$t('first_name')),
        last_name: Yup.string().required().label(this.$t('last_name')),
        email: Yup.string().required().email().label(this.$t('email')),
        password: requiredOrOptional.min(6).label(this.$t('password')),
        password_confirmation: requiredOrOptional.oneOf([Yup.ref('password')], this.$t('password_match')).label(this.$t('password_confirmation')),
      });
    }
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>
