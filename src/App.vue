<script>
import AppNav from '@/components/AppNav.vue'

export default {
  components: {
    AppNav,
  },
}
</script>

<template>
  <SkipToContent />
  <div>
    <AppNav />
    <RouterView />
  </div>
</template>
