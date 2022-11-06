<template>
  <page-header title="Profile"/>
  <div class="container-content">
    <ToastComp/>
    <div class="form-style" v-show="contentLoading">
      <FormValidate
          ref="form"
          v-slot="{ errors }"
          :validation-schema="schema"
          autocomplete="off"
          @submit="onSubmit"
      >
        <div class="grid grid-cols-12 py-8 xxlUp:py-16 gap-4">
          <div class="xxlUp:col-span-3 col-span-full">
            <h1 class="text-center text-lg uppercase font-medium">
              Profile picture
            </h1>
            <div class="photo-upload">
              <div class="file-upload-form">
                <input
                    id="photo-upload-button"
                    accept="image/*"
                    class="input-file"
                    name="photo-upload-button"
                    type="file"
                    @change="previewThumbnail"
                />
                <label for="photo-upload-button">
                  <em class="pi pi-plus"></em>
                </label>
              </div>
              <div
                  v-if="imagePrev.length > 0"
                  class="image-preview"
              >
                <img
                    :src="imagePrev"
                    alt="img"
                    class="image-preview__img"
                >
              </div>
            </div>
          </div>
          <div class="xxlUp:col-span-9 col-span-full">
            <div class="grid 3mdUp:grid-cols-2 gap-x-5 gap-y-3">
              <div>
                <h2 class="text-lg uppercase font-medium mb-4">
                  Basics
                </h2>
                <div class="grid grid-cols-2 gap-2">
                  <input-with-validation
                      v-model="form.first_name"
                      :topLabel="true"
                      icon="pi pi-user"
                      label="first_name"
                      name="first_name"
                      setPlaceHolder="first_name"
                      type="text"
                  />
                  <input-with-validation
                      v-model="form.last_name"
                      :topLabel="true"
                      icon="pi pi-user"
                      label="last_name"
                      name="last_name"
                      setPlaceHolder="last_name"
                      type="text"
                  />
                </div>
                <input-with-validation
                    v-model="form.email"
                    :TPlaceHolder="false"
                    :topLabel="true"
                    icon="pi pi-envelope"
                    label="email"
                    name="email"
                    setPlaceHolder="example@email.com"
                    type="email"/>
                <input-with-validation
                    v-model="form.mobile"
                    :TPlaceHolder="false"
                    :topLabel="true"
                    icon="pi pi-phone"
                    label="mobile"
                    name="mobile"
                    setPlaceHolder="0502345678"
                    type="mobile"/>
                <CalendarWithValidation v-model="form.birthday" icon="pi pi-calendar-minus" label="birthday"
                                        name="birthday"/>
              </div>
              <div>
                <h2 class="text-lg uppercase font-medium mb-4">
                  {{ $t('links') }}
                </h2>
                <input-with-validation
                    v-model="form.links.facebook"
                    :topLabel="true"
                    icon="pi pi-facebook"
                    label="Facebook"
                    name="facebook"
                    setPlaceHolder="enter_facebook_link"
                    type="url"/>
                <input-with-validation
                    v-model="form.links.twitter"
                    :topLabel="true"
                    icon="pi pi-twitter"
                    label="Twitter"
                    name="twitter"
                    setPlaceHolder="enter_twitter_link"
                    type="url"/>
                <input-with-validation
                    v-model="form.links.linkedin"
                    :topLabel="true"
                    icon="pi pi-linkedin"
                    label="Linkedin"
                    name="linkedin"
                    setPlaceHolder="enter_linkedin_link"
                    type="url"/>
                <input-with-validation
                    v-model="form.links.website"
                    :topLabel="true"
                    icon="pi pi-link"
                    label="Website"
                    name="website"
                    setPlaceHolder="enter_website_link"
                    type="url"/>
              </div>
            </div>
            {{ form?.links?.facebook }}
            <button class="main-btn !px-10" type="submit" :disabled="disabled">
              {{ $t('save') }}
              <ProgressSpinner v-if="loading" class="ms-2 white-spinner" strokeWidth="4" style="width: 27px; height: 27px;" />
            </button>
          </div>
        </div>

      </FormValidate>
    </div>
        <loading-content v-if="!contentLoading" class="text-center"/>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import InputWithValidation from "@/components/primeVueWithValidation/inputWithValidation.vue";
import ApiService from "@/services/ApiService";
import * as Yup from "yup";
import LoadingOne from "@/components/LoadingOne.vue";
import LoadingContent from "@/components/LoadingContent.vue";
import ProgressSpinner from 'primevue/progressspinner';
export default {
  name: "profile",
  components: {LoadingContent, LoadingOne, InputWithValidation, PageHeader, ProgressSpinner},
  data() {
    return {
      loading:false,
      disabled: false,
      form: {
        profile_photo: '',
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        birthday: '',
        links: {
          facebook: '',
          twitter: '',
          linkedin: '',
          website: ''
        }
      },
      contentLoading: false,
      imageHasChange: false,
      imagePrev:''
    }
  },
  async created() {
    await this.getData();
    this.handleData()
  },
  methods: {
    previewThumbnail(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log(input.files[0])
          this.imagePrev = e.target.result;
          this.form.profile_photo = input.files[0]
        };
        reader.readAsDataURL(input.files[0]);
      }
      this.imageHasChange = true;
    },
    async getData() {
      await ApiService.get('profile').then((res) => {
        this.form = res.data.data;
        this.imagePrev = res.data.data.profile_photo
        this.contentLoading = true;
      })
    },
    handleData() {
      if (!this.form.links.facebook) {
        this.form.links.facebook = '';
      }
    },
    onSubmit() {
      this.loading = true;
      console.log(this.dateFormatter(this.form.birthday))
      let url = 'profile/update',
          form = JSON.parse(JSON.stringify(this.form))
      delete form.profile_photo;
      delete form.birthday;
      form.birthday = this.dateFormatter(this.form.birthday);
      ApiService.update(`${url}`, form).then((res) => {
        this.$toast.add({severity: 'success', summary: 'Success', detail: res.data.message, life: 3000});
        // this.afterSubmit(res.data.message)
        this.loading = false;
        this.disabled = true;
      })
      if (this.imageHasChange){
        let formData = new FormData();
        formData.append("photo", this.form.profile_photo);
        ApiService.post('profile/update/photo', formData)
      }
      setTimeout(()=>{
        this.disabled = false
      },30000)
    }
  },
  computed: {
    schema() {
      return Yup.object().shape({
        first_name: Yup.string().required().label(this.$t('first_name')),
        last_name: Yup.string().required().label(this.$t('last_name')),
        email: Yup.string().required().email().label(this.$t('email')),
      });
    }
  }
}
</script>

<style>
.white-spinner .p-progress-spinner-circle{
  stroke: #ffffff !important;
}
</style>
