<template>
  <page-header title="courses" />
  <div class="courses-page">
    <div class="container-content">
      <div class="row justify-between">
        <div class="col-lg-3">
          <div class="page-filters">
            <!-- <div class="page-filters-widget">
              <h3>Search</h3>

              <div class="page-filters-widget-body page-filters-widget-theme-1">
                <div class="search-by-name">
                  <input v-model="search" type="text" class="form-control" />
                  <button class="btn">
                    <vue-feather type="search" placeholder="Searching..." />
                  </button>
                </div>
              </div>
            </div> -->
            <div class="page-filters-widget">
              <h3>category</h3>

              <div
                v-if="selectData.categories"
                class="page-filters-widget-body page-filters-widget-theme-1"
              >
                <div
                  v-for="(categoryItem, categoryIndex) in selectData.categories"
                  class="btn-checkbox"
                  :key="categoryIndex"
                >
                  <input
                    v-model="category"
                    name="category"
                    type="radio"
                    class="btn-check"
                    :id="'category-' + categoryItem.id"
                    :value="categoryItem.id"
                    @change="changeFilter('category')"
                  />
                  <label class="btn" :for="'category-' + categoryItem.id">{{
                    categoryItem.name
                  }}</label>
                </div>
              </div>
            </div>
            <div class="page-filters-widget">
              <h3>Levels</h3>

              <div
                v-if="levels"
                class="page-filters-widget-body page-filters-widget-theme-1"
              >
                <div
                  v-for="(levelItem, levelIndex) in levels"
                  class="btn-checkbox"
                  :key="levelIndex"
                >
                  <input
                    v-model="level"
                    name="level"
                    type="radio"
                    class="btn-check"
                    :id="'level-' + levelItem.id"
                    :value="levelItem.id"
                    @change="changeFilter('level')"
                  />
                  <label class="btn" :for="'level-' + levelItem.id">{{
                    levelItem.name
                  }}</label>
                </div>
              </div>
            </div>
            <!-- <div class="page-filters-widget">
              <h3>Rating</h3>

              <div class="page-filters-widget-body page-filters-widget-theme-1">
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">
                    <vue-feather type="star" /> <span>5/5</span></label
                  >
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">
                    <vue-feather type="star" /> <span>5/5</span></label
                  >
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">
                    <vue-feather type="star" /> <span>5/5</span></label
                  >
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">
                    <vue-feather type="star" /> <span>5/5</span></label
                  >
                </div>
              </div>
            </div> -->
            <div class="page-filters-widget">
              <h3>Price</h3>

              <div class="page-filters-widget-body page-filters-widget-theme-2">
                <h5>from {{ price[0] }}$ to {{ price[1] }}$</h5>
                <Slider
                  v-model="price"
                  :range="true"
                  max="1000"
                  @slideend="sliderEnd()"
                />
              </div>
            </div>

            <!-- <div class="page-filters-widget">
              <h3>Sort by</h3>

              <div class="page-filters-widget-body page-filters-widget-theme-1">
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
                <div class="btn-checkbox">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btn-check-2"
                    checked
                    autocomplete="off"
                  />
                  <label class="btn" for="btn-check-2">Checked</label>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div
              v-for="(course, courseIndex) in courses"
              :key="courseIndex"
              class="col-lg-4"
            >
              <CourseCard :course="course" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import Slider from "primevue/slider";
import ApiService from "@/services/ApiService";
import CourseCard from "@/components/courses/CourseCard.vue";
export default {
  data() {
    return {
      price: [0, 1000],
      courses: [],
      selectData: {},
      category: null,
      level: null,
      search: "",
      params: "",
      levels: [
        {
          id: 1,
          name: "Beginner",
        },
        {
          id: 2,
          name: "amateur",
        },
        {
          id: 3,
          name: "professional",
        },
        {
          id: 4,
          name: "experience",
        },
      ],
    };
  },
  mounted() {
    this.getSelectData("categories");
    this.searchParams();
  },
  methods: {
    searchParams() {
      let params = this.$route.query;
      let category = params.category;
      let level = params.level;
      let from_price = params.from_price;
      let to_price = params.to_price;
      if (category || level || from_price || to_price) {
        this.category = category;
        this.level = level;
        this.price = [from_price || 0, to_price || 1000];
        this.changeFilter("all");
      } else {
        this.getData("");
      }
    },
    sliderEnd($event) {
      this.changeFilter("price");
    },
    getData(params) {
      ApiService.get(`courses` + (params ? `?${params}` : "")).then((res) => {
        this.courses = res.data.data.courses;
      });
    },
    changeFilter(mode) {
      let params = "";
      if (this.category) {
        params += `category=${this.category}&`;
      }
      if (this.level) {
        params += `level=${this.level}&`;
      }
      if (mode === "price" || mode === "all") {
        params += `from_price=${this.price[0]}&`;
        params += `to_price=${this.price[1]}&`;
      }
      this.params = params;
      console.log(params);
      this.getData(params);
    },
    getSelectData(api) {
      ApiService.get(api).then((res) => {
        this.selectData[api] = res.data.data;
      });
    },
  },
  components: {
    PageHeader,
    Slider,
    CourseCard,
  },
};
</script>

<style></style>
