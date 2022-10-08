<template>
  <div class="course-subscribe">
    <nuxt-link
      v-if="course.teacher"
      :to="localePath(`/teachers/${course.teacher.id}`)"
      class="image"
    >
      <img
        :src="
          course.teacher.avatar_url || require('~/assets/images/man-vecotr.png')
        "
        alt=""
      />
    </nuxt-link>
    <nuxt-link
      v-if="course.teacher"
      :to="localePath(`/teachers/${course.teacher.id}`)"
      class="text"
    >
      <h3>الأستاذ {{ course.teacher.name }}</h3>
      <span> {{ course.teacher.job_field }} </span>
    </nuxt-link>
    <div v-if="isCoursePage" class="subscribe-btn">
      <nuxt-link
        v-if="course.is_ordered"
        class="btn"
        :to="localePath(`/courses/${course.id}/watch`)"
        >مشاهدة الدورة</nuxt-link
      >
      <button v-else class="btn" @click="addToCart()">إضافة إلى السلة</button>
    </div>
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
    isCoursePage: {
      type: Boolean,
      default: () => {
        return false
      },
    },

    isBuyPart: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },

  methods: {
    async addToCart() {
      if (this.$auth.user) {
        try {
          await this.$axios
            .post(`courses/${this.course.id}/cart`)
            .then((res) => {
              this.$swal({
                icon: 'success',
                timer: 2000,
                title: 'تمت إضافة الدورة إلى السلة بنجاح',
                confirmButtonText: 'إغلاق',
              })
              this.getCart()
            })
        } catch (error) {
          this.getErrors(error)
        }
      } else {
        this.$swal({
          icon: 'info',
          title: 'يجب عليك تسجيل الدخول أولاً',
          html: 'لتتمكن من إضافة الدورة إلى السلة يجب عليك تسجيل  أولاً <a class="btn btn-primary my-3" href="/ar/register">التسجيل </a>',
          confirmButtonText: 'إغلاق',
        })
      }
    },
  },
}
</script>

<style></style>
