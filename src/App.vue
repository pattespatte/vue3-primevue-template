<script>
import AppNav from '@/components/AppNav.vue'

export default {
  components: {
    AppNav,
  },
}
</script>

<SkipToContent />

<template>
  <div>
    <AppNav />
    <RouterView />
  </div>
</template>
