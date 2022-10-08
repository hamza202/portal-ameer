<template>
  <div class="course-sections">
    <div class="course-sections-top pt-40">
      <!-- <b-form-select v-model="selected" :options="options"></b-form-select> -->
      <!-- <b-form-checkbox v-model="checked" name="check-button" switch>
        تشغيل تلقائي
      </b-form-checkbox> -->
    </div>
    <div class="course-sections-items accordion" role="tablist">
      <div
        v-for="(part, index) in parts"
        :key="index"
        class="course-sections-item"
      >
        <div class="course-sections-item-top" role="tab">
          <div class="number">{{ index + 1 }}</div>
          <div class="text">
            <h6>{{ part.name }}</h6>
            <span>{{ TimeFormat(part.total_time) }}</span>
          </div>
          <div class="section-more">
            <button
              :aria-expanded="collapse === `part-${part.id}` ? 'true' : 'false'"
              class="btn"
              :class="`part-${part.id}`"
              @click="ToggleId(`part-${part.id}`)"
            >
              <ChevronLeftIcon />
            </button>
          </div>
        </div>
        <b-collapse
          :id="`part-${part.id}`"
          accordion="my-accordion"
          role="tabpanel"
        >
          <div class="course-sections-item-body">
            <ul>
              <li
                v-for="(item, itemIndex) in part.items"
                :key="itemIndex"
                :class="[
                  currentItem
                    ? currentItem.id === item.id
                      ? 'active'
                      : ''
                    : null,
                ]"
                @click="
                  showVideo(part.id, item.id, part.is_ordered, part.total_price)
                "
              >
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
    currentItem: {
      type: Object,
      default: () => {
        return {}
      },
    },

    parts: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'الكل' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
      ],
      collapse: null,
    }
  },

  methods: {
    showVideo(part, item, isOrdered, totalPrice) {
      if (isOrdered || totalPrice == 0) {
        this.$emit('item', { part, item })
      } else {
        this.$swal({
          icon: 'warning',
          timer: 2000,
          title: 'يجب عليك شراء القسم أولاً',
          confirmButtonText: 'إغلاق',
        })
      }
    },
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
                title: 'تمت إضافة الدورة إلى السلة بنجاح',
                html: 'سوف يتم الإنتقال بك الى إضافة الأقسام',
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
          html: 'لتتمكن من إضافة الدورة إلى السلة يجب عليك تسجيل الدخول أولاً',
          confirmButtonText: 'إغلاق',
        })
      }
    },
  },
}
</script>

<style></style>
