<script lang="ts" setup>
import { ref } from '@vue/reactivity'
import { Autoplay, Pagination, Navigation } from 'swiper';
import Item from './scrollItem.vue'
import { Swiper , SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [ Autoplay, Pagination, Navigation ]
const progressCircle = ref<HTMLElement | null>(null);
const progressContent = ref<HTMLElement | null>(null);
const onAutoplayTimeLeft = (s : any, time : any, progress : any) => {
      progressCircle.value!.style.setProperty('--progress', JSON.stringify(1 - progress))
      progressContent.value!.textContent = `${Math.ceil(time / 1000)}s`;
};
</script>
<template>
      <swiper
            :centeredSlides="true"
            :speed="1000"
            :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
            }"
            :pagination="{
                  clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            class="mySwiper">
            <swiper-slide>
                  <img class="img-fluid" src="@/assets/Image/moon-light-shine-through-window-into-islamic-mosque-interior.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                  <img class="img-fluid" src="@/assets/Image/Blue-mosque.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                  <img class="img-fluid" src="@/assets/Image/blue-mosque-istanbul-is-turkey.jpg" alt="">
            </swiper-slide>
            <template #container-end>
                  <div class="autoplay-progress">
                        <svg viewBox="0 0 48 48" ref="progressCircle">
                        <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref="progressContent"></span>
                  </div>
            </template>
  </swiper>
</template>
<style lang="scss" scoped>

.autoplay-progress {
      position: absolute ;
      right: 16px;
      bottom: 16px;
      z-index: 10;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background: #000;
      border-radius: 50%;
      color: var(--swiper-theme-color);
}
.autoplay-progress svg {
      --progress: 0;
      position: absolute;
      left: 0;
      top: 0px;
      z-index: 10;
      width: 100%;
      height: 100%;
      stroke-width: 2px;
      stroke: var(--swiper-theme-color);
      fill: none ;
      stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
      stroke-dasharray: 125.6;
      transform: rotate(0deg);
}
</style>