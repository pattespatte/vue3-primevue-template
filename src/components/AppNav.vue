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
}
</script>

<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-2xl font-bold hover:text-gray-200">My Website</a>
      <ul class="flex space-x-6">
        <li v-for="item in navigationItems" :key="item.label">
          <router-link :to="item.route" class="hover:text-gray-200" active-class="text-gray-200">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a {
  @apply text-blue-300; /* override text color */
}

.text-white {
  @apply text-gray-800; /* override text color */
}
</style>
