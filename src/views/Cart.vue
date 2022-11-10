<template>
<div>
  <page-header title="Cart"/>
  <div class="container-content">
    <div class="cart-container">
      <div class="p-4 mdDown:!p-2.5 cart-item grid grid-cols-12 items-center gap-3" v-for="(item) in myCart.items" :key="item.id">
          <div class="col-span-8">
              <div class="flex flex-nowrap items-center">
                <img :src="item.course.base_image" class="me-2.5 flex-shrink-0 w-24 h-auto mdDown:w-16 mdDown:w-20 rounded-lg" alt="img">
                <div>
                  <h3 class="text-green-200 font-semibold text-base mdDown:text-base" :title="item.course.name">
                    {{item.course.name}}
                  </h3>
                  <p class="text-xs text-green-200 opacity-40">
                    {{item.course.category.name}}
                  </p>
                </div>
              </div>
          </div>
        <div class="col-span-4">
          <div class="flex items-center">
            <div class="basis-full">
              <h4 class="text-green-300 font-semibold text-lg smDown:text-base">
                {{item.unitPrice.formatted}}
              </h4>
              <span class="block text-green-100 opacity-40 text-xs line-through">
                {{item.total.formatted}}
              </span>
            </div>
            <div class="basis-10 flex justify-end flex-shrink-0">
              <button class="opacity-30 transition-all ease-in-out duration-500 hover:opacity-100 text-center" @click="deleteCartItem(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.555" height="25.555" viewBox="0 0 25.555 25.555" class="w-6 h-auto">
                  <path id="Icon_ionic-ios-add" data-name="Icon ionic-ios-add" d="M25.91,16.875H19.125V10.09a1.125,1.125,0,0,0-2.25,0v6.785H10.09a1.125,1.125,0,0,0,0,2.25h6.785V25.91a1.125,1.125,0,0,0,2.25,0V19.125H25.91a1.125,1.125,0,0,0,0-2.25Z" transform="translate(-12.678 12.778) rotate(-45)" fill="#e51b1b"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import {mapGetters} from "vuex";
import {Actions} from "@/store/enums/StoreEnums";
export default {
  name: "cart",
  components: {PageHeader},
  methods:{
    deleteCartItem(id){
      this.$store.dispatch(Actions.DELETE_CART_ITEM, id);
    }
  },
  computed:{
    ...mapGetters({
      myCart: "getMyCart"
    }),
  }
}
</script>

<style scoped>

</style>
