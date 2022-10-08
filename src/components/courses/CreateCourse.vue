<template>
  <div class="content-bg add-course">
    <!-- <h1>إضافة دورة جديدة</h1> -->

    <CourseProgress value="50" />
    <b-form v-if="course" @submit.prevent="addVideo()">
      <div class="add-course-box-1" :class="step === 1 ? 'd-block' : 'd-none'">
        <div class="add-course-content pt-40 pb-30">
          <h2>مرحباً بك {{ $auth.user.data.name }}</h2>
          <p>تابع معنا وقم بإضافة دورتك بسهولة، هيا بنا!</p>
        </div>
        <div class="add-course-box-fields">
          <div class="course-title-box">
            <input
              v-model="course.name"
              type="text"
              placeholder="اكتب عنوانك دورتك التعليمية هنا..."
            />
          </div>
          <b-row>
            <b-col md="4">
              <Field
                v-model="course.university"
                :item="{
                  fieldType: 'select',
                  label: 'الجامعة ',
                  apiLink: 'universities',
                }"
              />
            </b-col>
            <b-col md="4">
              <!-- <div class="form-group">
                <label for="">التصنيف</label>
                <v-select
                  dir="rtl"
                  v-model="course.categories"
                  taggable
                  multiple
                >
                  <template #no-options="{ searching }">
                    <template v-if="searching && addMore"> </template>
                    <em v-else style="opacity: 0.5">
                      يمكنك كثير أكثر من مرة
                    </em>
                  </template></v-select
                >
              </div> -->

              <Field
                v-model="course.categories"
                :item="{
                  fieldType: 'select',
                  label: 'التصنيف   ',
                  apiLink: 'categories',
                  isMulti: true,
                }"
              />
            </b-col>
            <b-col v-if="type === 'edit'" md="12">
              <Field
                v-model="course.total_price"
                :item="{
                  fieldType: 'input',
                  type: 'number',
                  label: 'سعر الدورة النهائي  (ريال)',
                  placeholder: 'اكتب هنا... ',
                  styleType: 'one',
                }"
            /></b-col>
            <b-col v-if="type === 'edit'" md="12">
              <Field
                v-model="course.is_published"
                :item="{
                  fieldType: 'radio',
                  label: 'نشر الكورس',
                  radioOptions: [
                    { name: 'نعم', item: '1' },
                    { name: 'لا', item: '0' },
                  ],
                }"
            /></b-col>
            <b-col md="12">
              <Field
                v-model="course.summary"
                :item="{
                  fieldType: 'textarea',
                  label: 'الملخص',
                  placeholder: 'اكتب هنا... ',
                  styleType: 'one',
                }"
              />
            </b-col>

            <b-col md="12">
              <Field
                v-model="course.description"
                :item="{
                  fieldType: 'textarea',
                  label: ' وصف الدورة  ',
                  placeholder: 'اكتب هنا... ',
                  styleType: 'one',
                }"
              />
            </b-col>
            <!-- <b-col md="12">
              <Field
                v-model="course.whatsapp_url"
                :item="{
                  fieldType: 'input',
                  label: 'رابط مجموعة (WhatsApp)',
                  placeholder: 'اكتب هنا... ',
                  styleType: 'one',
                }"
              />
            </b-col> -->
          </b-row>
        </div>
        <div class="next-back mt-100">
          <button type="button" disabled class="btn back">السابق</button>
          <button type="button" class="btn next" @click="goToStep(2)">
            التالي
          </button>
        </div>
      </div>
      <div class="add-course-box-2" :class="step === 2 ? 'd-block' : 'd-none'">
        <div class="add-course-content pt-40 pb-30">
          <h2>أضف صورة الغلاف</h2>
          <p>قم بإضافة صورة غلاف لدورتك التعليمية</p>
        </div>
        <UploadImg
          v-model="course.image"
          :url="image_url"
          @image_url="setCourseImage($event)"
        />
        <div class="add-course-content pt-40 pb-30">
          <h2>أضف مقدمة اعلانية لدورتك التعليمية</h2>
          <p>قم بإضافة فيديو مقدمة لدورتك التعليمية</p>
        </div>
        <VideoUpload v-model="video" />

        <div class="next-back mt-100">
          <button type="button" class="btn back" @click="goToStep(1)">
            السابق
          </button>
          <button type="button" class="btn next" @click="addVideo()">
            حفظ الدورة
          </button>
        </div>
      </div>
      <!-- <b-progress :value="value" :max="100" class="mb-3"></b-progress> -->

      <WaitingModal
        v-model="isUpload"
        :progress="videoUploadPercentage"
        :type="type"
      />
    </b-form>
    <LoadingContent v-else />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateEdit',
  props: {
    type: {
      type: String,
      default: '',
    },
    courseId: {
      type: null,
      default: null,
    },
  },
  data() {
    return {
      step: 1,
      course: { image: '', is_published: 0, intro_url: null },
      videoUploadPercentage: 0,
      videoDownloadPercentage: 0,
      isUpload: false,
      image_url: null,
      video: '',
    }
  },
  mounted() {
    if (this.type === 'edit') {
      this.course = null
      this.getData()
    }
  },
  methods: {
    setCourseImage(val) {
      this.image_url = val
    },
    async addVideo() {
      try {
        if (this.video) {
          const newData = this.toFormData({ file: this.video })
          this.isUpload = true
          const config = {
            onUploadProgress: (event) => {
              this.videoUploadPercentage = Math.round(
                (event.loaded * 100) / event.total
              )
            },
            onDownloadProgress: (event) => {
              this.videoDownloadPercentage = Math.round(
                (event.loaded * 100) / event.total
              )
            },
            headers: {
              Authorization:
                'wSgGZnJzLut7ryqJUcQ357wUZa39YX9gT2hP9XrKnKdaxD5dwJUD3paDPCXhQvmQ',
            },
          }
          await axios
            .post(
              'https://static.6.34.109.65.clients.your-server.de/new_upload.php',
              newData,
              config
            )
            .then((res) => {
              if (res.data.status === true) {
                this.course.intro_url = res.data.url
                this.createCourse()
              }
            })
        } else {
          this.createCourse()
        }
      } catch (error) {
        this.getErrors(error)
      }
    },
    async createCourse() {
      let api = ''
      const success = {}
      if (this.type === 'create') {
        api = 'courses'
        success.title = 'تمت إضافة الدورة بنجاح'
        success.html = 'سوف يتم الإنتقال بك الى إضافة الأقسام'
      } else if (this.type === 'edit') {
        this.course._method = 'PUT'
        api = 'courses/' + this.courseId
        success.title = 'تمت تعديل الدورة بنجاح'
        success.html = 'سوف يتم الإنتقال بك الى الدورات'
      }
      try {
        const newData = this.toFormData(this.course)
        this.isUpload = true
        const config = {
          onUploadProgress: (event) => {
            setTimeout(() => {
              this.videoUploadPercentage = Math.round(
                (event.loaded * 100) / event.total
              )
            }, 2000)
          },
          onDownloadProgress: (event) => {
            this.videoDownloadPercentage = Math.round(
              (event.loaded * 100) / event.total
            )
          },
        }

        await this.$axios.post(api, newData, config).then((res) => {
          if (res.data.status === true) {
            let path = ''
            if (this.type === 'create') {
              path = `/teacher/courses/${res.data.data.id}/parts`
            } else {
              path = `/teacher/courses`
            }
            this.$swal({
              icon: 'info',
              timer: 2000,
              title: success.title,
              html: success.html,
              confirmButtonText: 'إغلاق',
            })
            this.isUpload = false
            this.$router.push(this.localePath({ path }))
          }
        })
      } catch (error) {
        this.isUpload = false

        this.getErrors(error)
      }
    },
    async getData() {
      try {
        await this.$axios.get(`courses/${this.courseId}`).then((res) => {
          this.course = {}

          const data = res.data.data
          this.image_url = data.image_url
          this.course.name = data.name
          this.course.university = data.university
          this.course.categories = data.categories.map((item) => {
            return item.category
          })
          this.course.summary = data.summary
          this.course.description = data.description
          this.course.whatsapp_url = data.whatsapp_url
          this.course.total_price = data.total_price
          this.course.is_published = data.is_published
        })
      } catch (error) {
        this.getErrors(error)
      }
    },
    goToStep(step) {
      this.step = step
    },
  },
}
</script>

<style></style>
