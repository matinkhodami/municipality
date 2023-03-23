<script lang="ts" setup>
import { ref } from 'vue';
const isOpen = ref<boolean>(false)
</script>
<template>
      <nav class="navbar">
            <div class="container-fluid">
                  <div class="navbar-left ms-3">
                        <div class="burger" :class="{ 'burger-open' : isOpen}" @click="isOpen = !isOpen">
                              <span class="burger-center-line"></span>
                        </div>
                        <i class="fas fa-magnifying-glass text-primary"></i>
                  </div>
                  <div class="navbar-right me-3">
                        <img src="./assets/Image/logo.png" alt="" width="130">
                  </div>
            </div>
      </nav>
      <div class="container-fluid w-100 navbar-drop" :class="{ 'navbar-drop-open' : isOpen}">
            <ul class="text-secondary-emphasis drop-menu ms-3">
                  <li>
                        صفحه اصلی
                        <i class="bi bi-chevron-left"></i>
                  </li>
                  <li>
                        تهران
                        <i class="bi bi-chevron-left"></i>
                  </li>
                  <li>
                        شهرداری تهران 
                        <i class="bi bi-chevron-left"></i>
                  </li>
                  <li>
                        شهردار تهران
                        <i class="bi bi-chevron-left"></i>
                  </li>
            </ul>
      </div>
</template>