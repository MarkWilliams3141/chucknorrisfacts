<template>
  <div class="home">
    <div v-if="true">
      <div class="flex items-center justify-center p-5">
        <img alt="Chuck Norris is so tough" src="../assets/chucknorris.png">
      </div>
      <ul id="facts">
        <li></li>
      </ul>
    </div>
    <div v-else class="flex flex-col items-center justify-center min-h-screen">
      <img alt="Loading Chuck Norris facts" src="../assets/loading.gif">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index'
})
</script>
