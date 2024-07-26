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

<style>
@import url('https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap');

.childlike-text-block {
  transform: rotate(-3deg);
  font-family: 'Just Another Hand', cursive; /* Apply the playful font */
  font-size: 2rem !important;
  color: #ffc300;
  letter-spacing: 1px;
}
</style>
