<script lang="ts">
export default {}
import { ref } from '@vue/reactivity'
import { callWithAsyncErrorHandling, defineProps  } from 'vue';
import type { PropType } from 'vue';
</script>
<template>
      <!-- h means horizontal -->
      <div class="slide-item" v-if="type == 1">
            <div class="d-flex flex-column justify-content-center align-items-center p-4">
                  <i :class="iconClass" class="mb-2"></i>
                  <h5>{{ title }}</h5>
            </div>
      </div>
      <div v-if="type == 2" class="mt-2 mb-5">
            <figure>
                  <h5>{{ title }}</h5>
                  <img src="https://picsum.photos/id/287/250/300" alt="Mountains">
                  <figcaption>
                        <ul>
                              <li v-for="item in option">{{ item }}</li>
                        </ul>
                  </figcaption>
            </figure>
      </div>
</template>
<script setup lang="ts">
const prop = defineProps({
      title : {
            type : String ,
            required : true
      } ,
      iconClass : {
            type : String ,
            required : false
      } ,
      option : {
            type : Array as PropType<string[]> ,
            required : false
      } ,
      type : {
            type : Number ,
            required : true
      }
})
</script>
<style lang="scss" scoped>
</style>