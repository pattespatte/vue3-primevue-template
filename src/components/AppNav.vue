<script>
export default {
  data() {
    return {
      navigationItems: [
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'Contact', route: '/contact' },
      ],
    };
  },
};
</script>

<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link
        id="home-link"
        to="/"
        class="text-2xl font-bold hover:text-gray-200"
      >
        My Website
      </router-link>
      <p class="text-sm text-gray-300 px-4">Publicly available at <a href="https://pattespatte.github.io/vue3-primevue-template/">https://pattespatte.github.io/vue3-primevue-template/</a>.</p>
      <ul class="flex space-x-6">
        <li v-for="item in navigationItems" :key="item.label">
          <router-link
            :to="item.route"
            class="hover:text-gray-200"
            active-class="text-gray-200"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a {
  @apply text-blue-300; /* Add underline */
}

/* Style the 'active' class (remove underline) */
#home-link,
.router-link-exact-active,
.active {
  @apply no-underline;
}

/* Style the 'active' class (remove underline) */
.router-link-exact-active,
.active {
  @apply no-underline;
  padding: 0.5rem 1rem; /* Add some padding for the background */
  border-radius: 0.25rem; /* Optional: Add rounded corners */
  background-color: rgba(255, 255, 255, 0.2); /* Example: Light background */
}

.text-white {
  @apply text-gray-800; /* override text color */
}

/* Focus Styles */
.router-link-exact-active:focus,
.router-link-active:focus {
  outline: 2px solid rgba(255, 255, 255, 0.8); /* Visible outline on focus */
}
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }
}
</style>
