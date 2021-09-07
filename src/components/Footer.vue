<template>
  <footer class="footer fixed bottom-0 w-full">
    <p>
      <strong>Chuck Norris Quotes by <a href="https://github.com/markwilliams3141">Mark Williams - Copyright © {{currentYear}}</a></strong>
    </p>
    <p>
      Thanks to <a href="https://api.chucknorris.io/">chucknorris.io</a>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  name: 'Footer'
})
</script>

<style scoped>
.footer {
  background-color: #e8e288;
}

</style>
