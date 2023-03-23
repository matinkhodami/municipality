<script lang="ts" setup>
import { ref , reactive } from '@vue/reactivity'
import { defineProps  }  from 'vue';
import type { PropType  } from 'vue';
import Item from '@/components/Swiper/scrollItem.vue'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

const breakpoints = reactive({
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 824
    768 : {
      slidesPerView: 2.5,
      spaceBetween: 30
    } ,
    // when window width is >= 1024px
    1024 : {
      slidesPerView: 3.5,
      spaceBetween: 40
    } ,
    // when window width is >= 1300px
    1300 : {
      slidesPerView: 4.5,
      spaceBetween: 40
    }
})

interface Items  {
      title : string;
      iconClass : string;
      type : number;
}
interface SlideItem2 {
      title : string ;
      option : string[] ;
      type : number
}
interface SlideItem3 {
      title : string ;
      address : string ;
      date : string ;
      type : number ;
}
const modules = [Navigation, Pagination, Scrollbar, A11y , Autoplay] ;
const prop = defineProps({
      title : {
            type : String ,
            required : true
      } ,
      items : {
            type : Array as PropType<Items[]> ,
            required : false
      } ,
      itemsT2 : {
            type : Array as PropType<SlideItem2[]> ,
            required : false 
      } ,
      itemT3 : {
            type : Array as PropType<SlideItem3[]> ,
            required : false 
      } ,
      itemAccept : {
            type : Number ,
            required : true
      }
})
</script>
<template>
      <div class="container mt-4 mb-5 d-flex flex-column  align-items-center slide">
            <!-- Head of Scroll Menu -->
            <h3 class="mx-auto mb-4">{{  title }}</h3>
            <div class="container">
                  <swiper
                        :modules="modules"
                        :navigation="true"
                        :pagination="{ clickable: true }"
                        :breakpoints="breakpoints"
                        :spaceBetween="30" 
                        :centeredSlides="true" 
                        class="mySwiper"
                        pagination-clickable="true" 
                        >
                        <swiper-slide v-for="item in items" :key="item.title" v-if="itemAccept == 1">
                              <Item :title="item.title"  :iconClass="item.iconClass" :type="item.type"></Item>
                        </swiper-slide>
                        <swiper-slide v-for="item in itemsT2" :key="item.title" v-if="itemAccept == 2">
                              <Item :type="item.type" :title="item.title" :option="item.option"></Item>
                        </swiper-slide>
                  </swiper>
            </div>
            <button type="button" class="slide-btn mt-3 py-1 px-4"> 
                  <i class="fa-duotone fa-circle-caret-down"></i>
                  بیشتر 
            </button>
      </div>
</template>
<style lang="scss" scoped>

</style>