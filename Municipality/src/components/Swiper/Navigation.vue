<script lang="ts" setup>
import { ref } from 'vue';
 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
const modules = ref([Pagination, Navigation])
</script>
<template>
      <swiper
            :pagination="{
                  type: 'progressbar',
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            >
            <swiper-slide>
                  <div class="navigation">
                        <img src="@/assets/Image/Event/EventFive.jpg" alt="">
                        <div class="navigation-info p-1">
                              <h4 class="px-3 mb-0">فراخوان طراحی و ساخت "هفت سین" نوروز 1402</h4>
                              <div class="px-3">
                                    آذر ماه ۱۴۰۱ 
                              </div>
                        </div>
                  </div>
            </swiper-slide>
            <swiper-slide>
                  <div class="navigation">
                        <img src="@/assets/Image/Event/EventSix.jpg" alt="">
                        <div class="navigation-info p-1">
                              <h4 class="px-3 mb-0">فراخوان طراحی و ساخت "هفت سین" نوروز 1402</h4>
                              <div class="px-3">
                                    آذر ماه ۱۴۰۱ 
                              </div>
                        </div>
                  </div>
            </swiper-slide>
  </swiper>
</template>