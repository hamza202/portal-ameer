<template>
  <div class="content-bg add-course">
    <!-- <h1>إضافة دورة جديدة</h1> -->

    <div class="top-progress">
      <CourseProgress value="4" />
    </div>
    <b-form v-if="newPart" @submit.prevent="createPart()">
      <div class="add-course-box-3">
        <div class="add-course-content pt-40 pb-30">
          <h2>أضف قسم جديد</h2>
          <p>تابع معنا وقم بإضافة دورتك بسهولة، هيا بنا!</p>
        </div>
        <div class="add-course-box-fields">
          <div class="course-title-box">
            <input
              v-model="newPart.name"
              type="text"
              placeholder="اكتب عنوان القسم هنا..."
            />
          </div>
          <Field
            v-model="newPart.total_price"
            :item="{
              fieldType: 'input',
              type: 'number',
              label: 'سعر القسم  (ريال)',
              placeholder: 'اكتب هنا... ',
              styleType: 'one',
            }"
          />
          <Field
            v-model="newPart.description"
            :item="{
              fieldType: 'textarea',
              label: 'وصف القسم',
              placeholder: 'اكتب هنا... ',
              styleType: 'one',
            }"
          />
        </div>
        <div class="next-back mt-100">
          <nuxt-link :to="`/teacher/courses/${courseId}/parts`" class="btn back"
            >السابق</nuxt-link
          >
          <button type="button" class="btn next" @click="createPart()">
            حفظ القسم
          </button>
        </div>
      </div>
    </b-form>
    <LoadingContent v-else />

    <WaitingModal
      v-model="isUpload"
      :progress="videoUploadPercentage"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    courseId: {
      type: null,
      default: null,
    },
    partId: {
      type: null,
      default: null,
    },
  },
  data() {
    return {
      newPart: { order: 1 },
      isUpload: false,
      videoUploadPercentage: 0,
    }
  },
  mounted() {
    if (this.type === 'edit') {
      this.newPart = null
      this.getData()
    }
  },
  methods: {
    async createPart() {
      let api = ''
      const success = {}
      if (this.type === 'create') {
        api = `courses/${this.courseId}/parts`
        success.title = 'تمت إضافة القسم بنجاح'
        success.html = 'سوف يتم الإنتقال بك الى إضافة الأقسام'
      } else if (this.type === 'edit') {
        this.newPart._method = 'PUT'
        api = `courses/${this.courseId}/parts/${this.partId}`
        success.title = 'تمت تعديل القسم بنجاح'
        success.html = 'سوف يتم الإنتقال بك الى الأقسام'
      }
      try {
        const newData = this.toFormData(this.newPart)
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
        }
        await this.$axios.post(api, newData, config).then((res) => {
          if (res.data.status === true) {
            this.$swal({
              icon: 'info',
              timer: 2000,
              title: success.title,
              html: success.html,
              confirmButtonText: 'إغلاق',
            })
            this.isUpload = false

            this.$router.push(
              this.localePath({
                path: `/teacher/courses/${this.courseId}/parts`,
              })
            )
          }
        })
      } catch (error) {
        this.isUpload = false

        this.getErrors(error)
      }
    },
    async getData() {
      try {
        await this.$axios
          .get(`courses/${this.courseId}/parts/${this.partId}`)
          .then((res) => {
            this.newPart = {}

            const data = res.data.data
            this.newPart.name = data.name
            this.newPart.total_price = data.total_price
            this.newPart.description = data.description
          })
      } catch (error) {
        this.getErrors(error)
      }
    },
  },
}
</script>

<style></style>
