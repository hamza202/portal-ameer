<template>
  <div class="content-bg add-course">
    <!-- <h1>إضافة دورة جديدة</h1> -->

    <CourseProgress value="50" />
    <b-form v-if="newItem" @submit.prevent="addVideo()">
      <div class="add-course-box-5">
        <div class="add-course-content pt-40 pb-30">
          <h2>أضف درس جديد</h2>
          <p>تابع معنا وقم بإضافة دورتك بسهولة، هيا بنا!</p>
        </div>
        <div class="add-course-box-fields">
          <div class="course-title-box">
            <input
              v-model="newItem.name"
              type="text"
              placeholder="اكتب عنوان الدرس هنا..."
            />
          </div>
        </div>
        <div class="add-course-box-fields">
          <div class="add-section-box">
            <h2>إضافة الفيديو</h2>

            <div class="video-container">
              <VideoUpload v-model="video" @time="getTime($event)" />

              <h2>رفع ملفات</h2>
              <AttachmentsUpload
                v-model="attachments"
                :attachments="oldFiles"
                :type="type"
              />
            </div>
          </div>
        </div>
        <div class="next-back mt-100">
          <nuxt-link
            :to="`/teacher/courses/${courseId}/parts/${partId}/items`"
            class="btn back"
            >السابق</nuxt-link
          >
          <button type="button" class="btn next" @click="addVideo()">
            إضافة الدرس
          </button>
        </div>
      </div>
    </b-form>
    <LoadingContent v-else />

    <WaitingModal
      v-model="isUpload"
      :progress="videoUploadPercentage"
      :type="type"
      :text="isUploadText"
    />
  </div>
</template>

<script>
import axios from 'axios'
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
    itemId: {
      type: null,
      default: null,
    },
  },
  data() {
    return {
      step: 1,
      itemType: null,

      newItem: {
        video_thumbnail: '',
        video_url: '',
        order: 1,
        price: 0,
        description: 'test',
        time: 50,
      },
      oldFiles: [],
      attachments: [],
      video: '',
      currentItem: {},
      isUpload: false,
      videoUploadPercentage: false,
      isUploadText: null,
    }
  },
  mounted() {
    if (this.type === 'edit') {
      this.newItem = null
      this.getData()
    }
  },
  methods: {
    goToStep(step) {
      this.step = step
    },
    changeType(value) {
      this.itemType = value
    },
    getTime(val) {
      this.newItem.time = val
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
                this.newItem.video_url = res.data.url
                this.createItem()
              }
            })
        } else {
          this.createItem()
        }
      } catch (error) {
        this.getErrors(error)
      }
    },
    redirect() {
      this.$router.push(
        this.localePath({
          path: `/teacher/courses/${this.courseId}/parts/${this.partId}/items`,
        })
      )
    },
    async createItem() {
      let api = ''
      const success = {}
      if (this.type === 'create') {
        api = `courses/${this.courseId}/parts/${this.partId}/items`
        success.title = 'تمت إضافة الدرس بنجاح'
        success.html = 'سوف يتم الإنتقال بك الى إضافة القسم'
      } else if (this.type === 'edit') {
        this.newItem._method = 'PUT'
        api = `courses/${this.courseId}/parts/${this.partId}/items/${this.itemId}`
        success.title = 'تمت تعديل الدرس بنجاح'
        success.html = 'سوف يتم الإنتقال بك الى القسم'
      }
      try {
        const newData = this.toFormData(this.newItem)
        await this.$axios.post(api, newData).then((res) => {
          if (res.data.status === true || res.status === 204) {
            this.$swal({
              icon: 'info',
              timer: 2000,
              title: success.title,
              html: success.html,
              confirmButtonText: 'إغلاق',
            })
            this.isUpload = false
            this.currentItem = res.data.data
            if (this.attachments.length) {
              this.addAttachments()
            } else {
              this.redirect()
            }
          }
        })
      } catch (error) {
        this.isUpload = false

        this.getErrors(error)
      }
    },
    async addAttachments() {
      try {
        const newData = this.toFormData({ attachments: this.attachments })
        this.isUpload = true
        this.isUploadText = 'جاري رفع المرفقات'
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
        console.log(this.attachments)

        await this.$axios
          .post(
            `courses/${this.courseId}/parts/${this.partId}/items/${
              this.currentItem ? this.currentItem.id : this.itemId
            }/add_attachment`,
            newData,
            config
          )
          .then((res) => {
            if (res.data.status === true) {
              this.$swal({
                icon: 'info',
                timer: 2000,
                title: 'تمت إضافة المرفقات بنجاح',
                html: 'سوف يتم الإنتقال بك الى إضافة الأقسام',
                confirmButtonText: 'إغلاق',
              })
              this.redirect()
            }
          })
      } catch (error) {
        this.getErrors(error)
      }
    },
    async getData() {
      try {
        await this.$axios
          .get(
            `courses/${this.courseId}/parts/${this.partId}/items/${this.itemId}`
          )
          .then((res) => {
            this.newItem = {}

            const data = res.data.data
            this.newItem.name = data.name
            this.oldFiles = data.attachments
          })
      } catch (error) {
        this.getErrors(error)
      }
    },
  },
}
</script>

<style></style>
