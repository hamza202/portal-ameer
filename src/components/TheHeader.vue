<template xmlns="http://www.w3.org/1999/html">
  <header>
    <div class="main-header-menu">
      <div class="container-content">
        <Menubar :model="items" class="bg-white-100 border-0 py-6" ref="menuBar">
          <template #start>
            <router-link class="logo" to="/">
              <img alt="logo" class="md:block hidden" src="/images/logo.svg">
              <img alt="logo" class="md:hidden block" src="/images/icon.svg">
            </router-link>
          </template>
          <template #item="{item}">
            <router-link v-slot="{href, navigate, isActive, isExactActive}" :to="item.to" custom>
              <a :class="{'active-link': isActive, 'active-link-exact': isExactActive}" :href="href"
                 @click="navigate, closeMenu()">{{ $t(item.label) }}</a>
            </router-link>
          </template>
          <template #end>
            <div class="grid grid-flow-col gap-4">
              <div>
                <button class="menu-btn" type="button" @click="searchToggle">
                  <svg height="16.123" viewBox="0 0 16.119 16.123" width="16.119" xmlns="http://www.w3.org/2000/svg">
                    <path id="Icon_ionic-ios-search" d="M20.43,19.449l-4.483-4.525a6.389,6.389,0,1,0-.97.982l4.454,4.5a.69.69,0,0,0,.974.025A.694.694,0,0,0,20.43,19.449Zm-9.5-3.488a5.045,5.045,0,1,1,3.568-1.478A5.013,5.013,0,0,1,10.926,15.961Z"
                          data-name="Icon ionic-ios-search"
                          fill="#143c4e" transform="translate(-4.5 -4.493)"/>
                  </svg>
                </button>
                <OverlayPanel ref="search">
                  <input-with-validation :topLabel="false" icon="pi pi-search" label="search" name=""/>
                </OverlayPanel>
              </div>
              <div>
                <router-link class="menu-btn" to="/">
                  <svg height="16.123" viewBox="0 0 17.466 16.123" width="17.466" xmlns="http://www.w3.org/2000/svg">
                    <path id="Icon_ionic-md-heart-empty" d="M16.038,4.5a5.166,5.166,0,0,0-3.93,1.843A5.166,5.166,0,0,0,8.178,4.5a4.748,4.748,0,0,0-4.8,4.833c0,3.338,2.968,6.017,7.465,10.148l1.268,1.142,1.268-1.142c4.5-4.131,7.465-6.81,7.465-10.148A4.748,4.748,0,0,0,16.038,4.5ZM12.645,18.326l-.176.164-.361.327-.361-.327-.176-.164A53.367,53.367,0,0,1,6.419,13.2a6.16,6.16,0,0,1-1.7-3.871,3.492,3.492,0,0,1,1-2.49,3.417,3.417,0,0,1,2.46-1,3.851,3.851,0,0,1,2.9,1.365L12.108,8.43l1.029-1.222a3.836,3.836,0,0,1,2.9-1.365,3.434,3.434,0,0,1,2.465,1,3.5,3.5,0,0,1,1,2.49A6.192,6.192,0,0,1,17.8,13.2,53.475,53.475,0,0,1,12.645,18.326Z"
                          data-name="Icon ionic-md-heart-empty"
                          fill="#143c4e" transform="translate(-3.375 -4.5)"/>
                  </svg>
                </router-link>
              </div>
              <div>
                <button class="menu-btn" type="button" @click="cartToggle">
              <span
                  class="bg-red-100 rounded-full flex items-center justify-center w-6 h-6
                  text-white-100 text-xs font-semibold absolute -top-3 ltr:-right-3 rtl:-left-3">
                2
              </span>
                  <em class="pi pi-shopping-cart"></em>
                </button>
                <OverlayPanel ref="cart">
                  <ul class="list-none cart-drop-lst">
                    <li class="grid max-w-[250px] grid-flow-col gap-3">
                      <div class="cart-drop-lst-img">
                        <img src="/images/cart-icon.jpg" class="w-16 h-auto rounded-lg" alt="cart img">
                      </div>
                      <div>
                        <p class="desc font-semibold text-green-100">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cumque deserunt ea ex explicabo, facilis ipsum molestiae nemo nostrum possimus qui quia quod rem rerum saepe vel voluptas voluptatibus!
                        </p>
                        <p class="head-font text-red-100 text-base font-medium head-font">
                          $25.00 <span class="line-through text-green-100 opacity-30 ltr:pl-1 rtl:pr-1 text-sm">$40.00</span>
                        </p>
                      </div>
                    </li>
                    <li class="grid max-w-[250px] grid-flow-col gap-3">
                      <div class="cart-drop-lst-img">
                        <img src="/images/cart-icon.jpg" class="w-16 h-auto rounded-lg" alt="cart img">
                      </div>
                      <div>
                        <p class="desc font-semibold text-green-100">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cumque deserunt ea ex explicabo, facilis ipsum molestiae nemo nostrum possimus qui quia quod rem rerum saepe vel voluptas voluptatibus!
                        </p>
                        <p class="head-font text-red-100 text-base font-medium head-font">
                          $25.00 <span class="line-through text-green-100 opacity-30 ltr:pl-1 rtl:pr-1 text-sm">$40.00</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                  <router-link class="text-center block font-semibold main-link" to="/">
                    View All
                  </router-link>
                </OverlayPanel>
              </div>
              <div>
                <button aria-controls="overlay_mene" aria-haspopup="true" class="menu-btn" type="button" @click="toggle">
                  <em class="pi pi-user"></em>
                </button>
                <Menu id="overlay_mene" ref="menu" :model="item2" :popup="true"/>
              </div>
            </div>
          </template>
        </Menubar>
      </div>
    </div>

    <div class="category-menu">
      <div class="container-content">
        <Menubar :model="items" class="bg-gray-900 border-0 py-0" ref="menuBar">
          <template #item="{item}">
            <router-link v-slot="{href, navigate, isActive, isExactActive}" :to="item.to" custom>
              <a :class="{'active-link': isActive, 'active-link-exact': isExactActive}" :href="href"
                 @click="navigate, closeMenu()">{{ $t(item.label) }}</a>
            </router-link>
          </template>

        </Menubar>
      </div>
    </div>
  </header>
</template>

<script>
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu';
import OverlayPanel from 'primevue/overlaypanel';
import InputWithValidation from "./primeVueWithValidation/inputWithValidation.vue";

export default {
  name: "TheHeader",
  components: {
    InputWithValidation,
    Menubar,
    Menu,
    OverlayPanel
  },
  data() {
    return {
      item2: [
        {
          label: 'Router',
          icon: 'pi pi-upload',
          command: () => {
            this.$router.push('/profile')
          }
        }
      ],
      items: [
        {
          label: 'home',
          to: '/'
        },
        {
          label: 'Quit',
          to: '/log-in'
        }
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    cartToggle(event) {
      this.$refs.cart.toggle(event);
    },
    searchToggle(event){
      this.$refs.search.toggle(event);
      console.log(this.$refs.menuBar);

    },
    closeMenu() {
      document.body.click();
    },
  },
  created() {},
  computed: {

  },
}
</script>

<style scoped>

</style>
