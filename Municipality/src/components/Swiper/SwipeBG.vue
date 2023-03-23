<script lang="ts" setup>
import { ref , reactive } from '@vue/reactivity'
import { defineProps } from 'vue';

import ItemBG from '@/components/Swiper/ItemBg.vue'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

const slideItem = ref([
      {
            address : './src/assets/Image/App/bazar.png' ,
            name : 'بازار روز همراه'
      } ,
      {
            address : './src/assets/Image/App/keyfiate-havaye-tehran.png' ,
            name : 'کیفیت هوای تهران'
      } ,
      {
            address : './src/assets/Image/App/raya.png' ,
            name : ' رایا (نقشه همراه تهران) '
      } ,
      {
            address : './src/assets/Image/App/mytehran.png' ,
            name : 'تهران‌من'
      } ,
      {
            address : './src/assets/Image/App/docharkhe.png' ,
            name : 'دوچرخه'
      }
])
const breakpoints = reactive({
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    824 : {
      slidesPerView: 3.25,
      spaceBetween: 30
    } ,
    1024 : {
      slidesPerView: 3.5,
      spaceBetween: 40
    } ,
    1300 : {
      slidesPerView: 4.5,
      spaceBetween: 40
    }
})

const modules = [Navigation, Pagination, Scrollbar, A11y , Autoplay] ;
const prop = defineProps({
      title : {
            type : String ,
            required : true
      } ,
})
</script>
<template>
      <div class="container mt-4 d-flex flex-column align-items-center slide">
            <!-- Head of Scroll Menu -->
            <h3 class="mx-auto mb-3">{{  title }}</h3>
            <div class="container bg">
                  <swiper
                        :modules="modules"
                        :navigation="true"
                        :pagination="{ clickable: true }"
                        :breakpoints="breakpoints"
                        :spaceBetween="30" 
                        :centeredSlides="true" 
                        :autoplay='{
                              "delay": 2100,
                              "disableOnInteraction": false
                            }'
                        class="mySwiper"
                        pagination-clickable="true" >
                        <swiper-slide v-for="{ name  , address} in slideItem" :key="title">
                              <ItemBG  :address="address" :name="name"></ItemBG>
                        </swiper-slide>
                  </swiper>
            </div>
            <button type="button" class="slide-btn mt-3 py-1 px-4"> 
                  <i class="fa-duotone fa-circle-caret-down"></i>
                  بیشتر 
            </button>
      </div>
</template>
