<script>
export default {
  data() {
    return {
      navigationItems: [
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'Contact', route: '/contact' },
      ],
    }
  },
  methods: {
    navigate(route) {
      this.$router.push(route)
    },
  },
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in navigationItems" :key="item.label">
        <a
          href="#"
          :aria-label="item.label"
          @click="navigate(item.route)"
          @keydown.enter="navigate(item.route)"
          @keydown.space="navigate(item.route)"
        >{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>
