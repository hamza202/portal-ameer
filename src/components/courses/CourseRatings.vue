<template>
  <div class="course-ratings">
    <div class="title-btn">
      <h2>التقييمات</h2>
      <b-button v-b-modal.modal-1 class="btn"> قيم المادة </b-button>
    </div>
    <div class="course-ratings-list">
      <div class="course-ratings-item">
        <div class="course-ratings-item-top">
          <div class="image">
            <img src="~/assets/images/man-vecotr.png" alt="" />
          </div>
          <div class="text">
            <h5>محمد خالد</h5>
            <FiveStars />
          </div>
          <div class="time">أمس</div>
        </div>
        <p class="rating-text d-none">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </p>
      </div>
      <div class="course-ratings-item">
        <div class="course-ratings-item-top">
          <div class="image">
            <img src="~/assets/images/man-vecotr.png" alt="" />
          </div>
          <div class="text">
            <h5>محمد خالد</h5>
            <FiveStars stars="4" size="15" />
          </div>
          <div class="time">أمس</div>
        </div>
        <p class="rating-text d-none">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص
        </p>
      </div>
    </div>
    <b-modal id="modal-1" title="إضافة تقييم" hide-footer>
      <b-form @submit.prevent="updateProfile()">
        <b-row>
          <b-col md="12">
            <Field
              v-model="newRating"
              :item="{
                fieldType: 'input',
                label: '',
                placeholder: 'بنك السعودية',
                styleType: 'one',
                icon: 'GridIcon',
              }"
            />
          </b-col>
        </b-row>
        <div class="btn-submit">
          <b-button variant="no" @click="updateProfile()">
            <span>{{ $t('save_edits') }}</span>
          </b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      ratings: [],
      newRating: null,
    }
  },
  mounted() {
    // this.getData()
  },
  methods: {
    async getData() {
      try {
        await this.$axios
          .get(`courses/${this.course.id}/rating`)
          .then((res) => {
            this.ratings = res.data.data
          })
      } catch (error) {
        this.getErrors(error)
      }
    },
  },
}
</script>

<style></style>
