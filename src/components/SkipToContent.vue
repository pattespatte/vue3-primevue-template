<script>
export default {
  methods: {
    showSkipLink() {
      document.body.classList.add('skip-link-visible')
    },
  },
}
</script>

<template>
  <a href="#main-content" class="skip-link" @focus="showSkipLink">Skip to main content</a>
</template>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background-color: white;
  color: black;
  padding: 8px;
  z-index: 100;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
}

.skip-link-visible {
  position: static;
  clip: auto;
  height: auto;
  width: auto;
}
</style>
