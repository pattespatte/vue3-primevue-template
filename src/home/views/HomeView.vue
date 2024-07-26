<script lang="ts" setup>
</script>

<template>
  <div class="bg-gray-100">
    <!-- Hero Section -->
    <section class="flex items-center justify-center h-screen bg-cover bg-center" style="background-image: url('https://picsum.photos/800/400?grayscale');">
      <div class="text-center text-white p-8 bg-black bg-opacity-50 rounded-lg">
        <p class="childlike-text-block text-lg">Trying out PrimeVue with Vue 3.  Tailwind CSS is also used.</p>
        <h1 class="text-4xl font-bold">Welcome to Our Corporate Site</h1>
        <p class="mt-4 text-lg">Your tagline or corporate copy goes here.</p>
        <router-link to="/about">
          <button class="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">
            Learn More
          </button>
        </router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold">Our Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div class="p-4 bg-gray-100 rounded-lg">
            <h3 class="font-semibold">Feature 1</h3>
            <p>A brief description of the feature.</p>
          </div>
          <div class="p-4 bg-gray-100 rounded-lg">
            <h3 class="font-semibold">Feature 2</h3>
            <p>A brief description of the feature.</p>
          </div>
          <div class="p-4 bg-gray-100 rounded-lg">
            <h3 class="font-semibold">Feature 3</h3>
            <p>A brief description of the feature.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-200">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold">What Our Clients Say</h2>
        <div class="mt-8">
          <blockquote class="italic">"This is an amazing product!" - Happy Client</blockquote>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-black text-white text-center">
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>
