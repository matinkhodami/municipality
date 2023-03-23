<script lang="ts" setup>
import { ref , reactive } from '@vue/reactivity'
import { defineProps } from 'vue';
import Swipe from '@/components/Swiper/Navigation.vue';

</script>
<template>
      <div class="container mb-2">
            <div class="event">
                  <div class="event-lt">
                        <div>
                              <span class="event-marker-Yellow px-2 py-1">فرهنگی</span>
                              <div class="event-inside">
                                    <img src="@/assets/Image/Event/EventOne.jpg" alt="">
                                    <div class="event-info py-1">
                                          <h4 class="px-3 mb-0">فراخوان طراحی و ساخت "هفت سین" نوروز 1402</h4>
                                          <div class="px-3">
                                                آذر ماه ۱۴۰۱ 
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div class="event-inside">
                              <span class="event-marker-Purpule px-2 py-1">نوآوری</span>
                                    <img src="@/assets/Image/Event/EventTwo.jpg" alt=""> 
                                    <div class="event-info p-1">
                                          <h4 class="px-3 mb-0">مسابقه طراحی محله الگو در شهر تهران برگزار می‌شود</h4>
                                          <div class="px-3">
                                                آذر ماه ۱۴۰۱ 
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="event-center">
                        <Swipe></Swipe>
                  </div>
                  <div class="event-rb">
                        <div>
                              <div class="event-inside">
                                    <span class="event-marker-Red px-2 py-1">گردشگری</span>
                                    <img src="@/assets/Image/Event/EventTree.jpg" alt=""> 
                                    <div class="event-info p-1">
                                          <h4 class="px-3 mb-0">برنامه‌های نوروزی ستاد گردشگری شهرداری تهران</h4>
                                          <div class="px-3">
                                                بهمن ماه ۱۴۰۱ 
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div class="event-inside">
                                    <span class="event-marker-Green px-2 py-1">ورزشی</span>
                                    <img src="@/assets/Image/Event/EventFour.jpg" alt="">
                                    <div class="event-info p-1">
                                          <h4 class="px-3 mb-0 ">برگزاری مراسم پهلوان جان فدا در پایتخت </h4>
                                          <div class="px-3">
                                                آذر ماه ۱۴۰۱ 
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>