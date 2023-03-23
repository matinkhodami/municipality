<script lang="ts">
export default {}
import { ref , reactive } from '@vue/reactivity'
import { defineProps } from 'vue';
</script>
<template>
      <div class="footer mt-2">
            <div>
                  <div class="footer-title">
                        دسترسی سریع
                  </div>
                  <div class="footer-item footer-item-first">
                        <ul>
                              <li>
                                    مراکز تخلیه امن اضطراری
                                    <span>
                                          <i class="bi bi-chevron-left"></i>
                                    </span>
                              </li>
                              <li>
                                    شهرداری‌های کشور
                                    <span>
                                          <i class="bi bi-chevron-left"></i>
                                    </span>
                              </li>
                              <li>
                                    حریم شخصی کاربران
                                    <span>
                                          <i class="bi bi-chevron-left"></i>
                                    </span>
                              </li>
                        </ul>
                  </div>
            </div>
            <div>
                  <div class="footer-title">
                        ارتباط با ما
                  </div>
                  <div class="footer-item footer-item-second">
                        <ul>
                              <li>
                                    <span>
                                          نشانی
                                          <i class="bi bi-pin-map"></i>
                                    </span>
                                    <span>
                                          تهران - ضلع جنوبی پارک شهر ـ خیابان بهشت ـ ساختمان شهرداری مرکزی
                                    </span>
                              </li>
                              <li>
                                    <span>
                                          تلفن
                                          <i class="bi bi-telephone-plus-fill"></i>
                                    </span>
                                    <span>
                                          021-55611112
                                    </span>
                              </li>
                              <li>
                                    <span>
                                          ایمیل
                                          <i class="bi bi-envelope-at-fill"></i>
                                    </span>
                                    <span>
                                          ird@tehran.ir
                                    </span>
                              </li>
                        </ul>
                  </div>

            </div>
            <div>
                  <div class="footer-title">
                        اطلاعات و شفافیت
                  </div>
                  <div class="footer-item footer-item-first">
                        <ul>
                              <li>
                                    داده نمای تهران
                                    <span>
                                          <i class="bi bi-chevron-left"></i>
                                    </span>
                              </li>
                              <li>
                                    API شهرداری تهران
                                    <span>
                                          <i class="bi bi-chevron-left"></i>
                                    </span>
                              </li>
                              <li>
                                    سامانه شفافیت
                                    <span>
                                          <i class="bi bi-chevron-left"></i>
                                    </span>
                              </li>
                        </ul>
                  </div>

            </div>
            <div>
                  <div class="footer-title">
                        دریافت اپلیکیشن تهران من
                  </div>
                  <div class="footer-item d-flex flex-column align-items-center ">
                        <img src="@/assets/Image/qr-code.png" alt="QR Code">
                        <button type="button" class="btn btn-success mt-3">
                              <i class="bi bi-download"></i>
                              Download
                        </button>
                  </div>
            </div>
      </div>
      <div class="under-footer">
            Made by <span>MtnPhantom</span> & <span>Amin</span> 
      </div>
</template>
<script setup lang="ts">

</script>