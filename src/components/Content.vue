<template>
  <main class="content flex-grow container mx-auto">
    <router-view> </router-view>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content'
})
</script>
