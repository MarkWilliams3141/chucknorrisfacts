<template>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'

export default {
  components: {
    DefaultLayout
  },
  data () {
    return {
      layout: null
    }
  },
  watch: {
    $route (to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = 'DefaultLayout' // default layout if meta is missing
      }
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Consolas,monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
