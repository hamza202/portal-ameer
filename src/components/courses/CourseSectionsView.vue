<template>
  <div class="course-sections-view">
    <div class="title-time">
      <h2>أقسام الدورة</h2>
      <div class="time">
        <ClockIcon />
        <span>{{ TimeFormat(course.total_time) }}</span>
      </div>
    </div>
    <div class="course-sections-view-items accordion" role="tablist">
      <div
        v-for="(part, index) in parts"
        :key="index"
        class="course-sections-view-item"
      >
        <div class="course-sections-view-item-top" role="tab">
          <div class="number">{{ index + 1 }}</div>
          <div class="text">
            <h6>{{ part.name }}</h6>
            <span>{{ TimeFormat(part.total_time) }}</span>
          </div>
          <div class="side-buy">
            <div class="price">{{ getPrice(part.total_price) }}</div>
            <div class="cart-view" :class="{ ordred: part.is_ordered }">
              <button
                v-if="!part.is_ordered && parseInt(part.total_price) !== 0"
                class="btn"
                @click="addToCart(part.id)"
              >
                <ShoppingCartIcon />
              </button>

              <nuxt-link
                v-if="part.total_price == 0"
                :to="localePath(`/courses/${course.id}/watch?part=${part.id}`)"
              >
                <EyeIcon />
              </nuxt-link>
            </div>
          </div>
          <div class="section-more">
            <button
              :aria-expanded="collapse === `accordion-${index}` ? true : false"
              class="btn"
              :class="`part-${index}`"
              @click="ToggleId(`accordion-${index}`)"
            >
              <ChevronLeftIcon />
            </button>
          </div>
        </div>
        <b-collapse
          :id="`accordion-${index}`"
          accordion="my-accordion"
          role="tabpanel"
        >
          <div class="course-sections-view-item-body">
            <ul>
              <li v-for="(item, itemIndex) in part.items" :key="itemIndex">
                <div class="icon" :class="part.is_ordered ? 'icon-fill' : null">
                  <PlayIcon v-if="part.is_ordered || part.total_price == 0" />
                  <LockIcon v-else />
                </div>
                <div class="title">
                  {{ item.name }}
                </div>
                <div class="time">{{ TimeFormat(item.time) }}</div>
              </li>
            </ul>
          </div></b-collapse
        >
      </div>
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
    parts: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      collapse: null,
    }
  },
  methods: {
    ToggleId(id) {
      this.$root.$emit('bv::toggle::collapse', id)
      if (this.collapse === id) {
        this.collapse = null
        this.$emit('collapse', null)
      } else {
        this.collapse = id
        this.$emit('collapse', id)
      }
    },

    async addToCart(part) {
      if (this.$auth.user) {
        try {
          await this.$axios
            .post(`courses/${this.course.id}/parts/${part}/cart`)
            .then((res) => {
              this.$swal({
                icon: 'success',
                timer: 2000,
                title: 'تمت إضافة القسم إلى السلة بنجاح',
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
          html: 'لتتمكن من إضافة القسم إلى السلة يجب عليك تسجيل  أولاً <a class="btn btn-primary my-3" href="/ar/register">التسجيل </a>',
          confirmButtonText: 'إغلاق',
        })
      }
    },
  },
}
</script>

<style></style>
