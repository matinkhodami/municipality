<script setup lang="ts">
import { ref  } from 'vue';
import SwipeByTime from '@/components/Swiper/SwipeByTime.vue';
import SwipeMenu from '@/components/Swiper/SwipeMenu.vue'
import SwipeBG from '@/components/Swiper/SwipeBG.vue';
import Events from '@/components/Events.vue';
import Footer from '@/components/Footer.vue';
interface Items  {
      title : string;
      iconClass : string;
      type : number;
}
const slideItem = ref<Items[]>([
      {
            title : ' پرداخت بهای  عوارض نوسازی شهر' ,
            iconClass : 'fa-solid fa-money-bill-1-wave' ,
            type : 1
      } ,
      {
            title : 'تهران من',
            iconClass : 'fa-solid fa-tree-city' ,
            type : 1
      } ,
      {
            title : 'کدهای دستوری خدمات الکترونیکی 137' ,
            iconClass : 'fa-duotone fa-mobile-button' ,
            type : 1
      },
      {
            title : 'استعلام بدهی طرح ترافیک پارک حاشیه ای و عوارض  سالیانه  خودرو ' ,
            iconClass : 'fa-duotone fa-car' ,
            type : 1
      } ,
      {
            title : 'ثبت درخواست مردمی ۱۳۷ پلاس' ,
            iconClass : 'fa-duotone fa-headset' ,
            type : 1
      }
])
interface SlideItem2 {
      title : string 
      option : string[]
      type : number
}
const slideItem2 = ref<SlideItem2[]>([
      {
            title : "زندگی در تهران" ,
            option : [
                  "حمل‌و‌نقل" ,
                  "مسکن و ساخت‌و‌ساز" ,
                  "سلامت شهری" ,
                  "اوقات‌ فراغت" ,
                  "ایمنی و بحران"
            ] ,
            type : 2
      } ,
      {
            title : "میز خدمات شهرداری تهران" ,
            option : [] ,
            type : 2
      } ,
      {
            title : "تهران گردی" ,
            option : [
                  "مسیرهای گردشگری" ,
                  "رویدادهایگردشگری" ,
                  "تور مجازی بناهای تاریخی" ,
                  "مراکز اقامتی درتهران" ,
                  "قصه‌های خیابان ولیعصر"
            ] ,
            type : 2
      }
])
</script>

<template>
	<div class="head">
            <SwipeByTime></SwipeByTime>
            <div class="head-item">
                  <div>
                        <!-- Title  -->
                        <span class="head-item-title">
                              وضعیت کیفیت هوا
                        </span>
                        <!-- Description -->
                        <span class="head-item-des">
                              شاخص : 106 ناسالم
                        </span>
                  </div>
                  <!-- Icon -->
                  <span class="head-item-icon fs-1 text-danger-emphasis">
                        <i class="bi bi-fire"></i>
                  </span>
            </div>
            <div class="head-item">
                  <div>
                        <!-- Title  -->
                        <span class="head-item-title">
                              دمای هوا
                        </span>
                        <!-- Description -->
                        <span class="head-item-des">
                              16  درجه - نیمه ابری
                        </span>
                  </div>
                  <!-- Icon -->
                  <span class="head-item-icon fs-1 text-primary-emphasis">
                        <i class="bi bi-cloud-haze2-fill"></i>
                  </span>
            </div>
            <div class="head-item">
                  <div>
                        <!-- Title  -->
                        <span class="head-item-title">
                              اوقات شرعی
                        </span>
                        <!-- Description -->
                        <span class="head-item-des">
                              1:44:8 مانده به اذان ظهر
                        </span>
                  </div>
                  <!-- Icon -->
                  <span class="head-item-icon fs-1 text-warning">
                        <i class="bi bi-alarm"></i>
                  </span>
            </div>
      </div>
      <SwipeMenu title="خدمات الکترونیک پرکاربرد"  :items="slideItem" :itemAccept="1" />
      <SwipeBG title="نرم‌افزارهای موبایلی شهرداری تهران" />
      <SwipeMenu title="" :itemAccept="2" :itemsT2="slideItem2" />
      <Events />
      <!-- Three Items under the footer  -->
      <div class="footer-up d-flex flex-column mt-4 container rounded text-light">
            <div>
                  <img src="@/assets/Image/wp6738561-city-ps4-minimalist-wallpapers.png" alt="building" height="300px" width="100%">
            </div>
            <div class="text-center fs-5 mt-2 footer-up-title">پرتال‌های شهرداری</div>
            <div class="d-flex justify-content-around p-4">
                  <div class="d-flex flex-column align-items-center ">
                        <i class="bi bi-pin-map-fill fs-1"></i>
                        <h5 class="fs-6 ">مناطق</h5>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                        <i class="bi bi-buildings fs-1"></i>
                        <h5 class="fs-6">‌شرکت‌های وابسته، مراکز و ستادها</h5>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                        <i class="bi bi-people-fill fs-1"></i>
                        <h5 class="fs-6">معاونت‌ها و ادارات کل</h5>
                  </div>
            </div>
      </div>
      <Footer></Footer>
</template>
<style lang="scss" scoped>

</style>
