<template>
  <div>
    <Content />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Content from '@/components/Content'
import Footer from '@/components/Footer'
export default {
  name: 'DefaultLayout',
  components: { Footer, Content }
}
</script>
