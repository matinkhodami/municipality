<script lang="ts">
export default {}
import { ref , reactive } from '@vue/reactivity'
import { defineProps } from 'vue';
</script>
<template>
      <div class="app-card pb-5 pt-3">
            <div class="d-flex justify-content-center align-items-center p-2">
                  <img :src="address" :alt="name">
            </div>
            <h5>{{ name }}</h5>
      </div>
</template>
<script lang="ts" setup>
const prop = defineProps({
      name : {
            type : String ,
            required : true
      } ,
      address : {
            type : String ,
            required : true
      }
})
</script>