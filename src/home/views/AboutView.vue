<script>
export default {
  name: 'About',
}
</script>

<template>
  <main class="flex flex-col items-center justify-center px-8 py-16 text-center max-w-7xl mx-auto">
    <section class="text-left">
      <h1 class="text-3xl font-bold mb-4">
        About Us
      </h1>
      <p class="mb-4">
        Welcome to our about page! Here's some information about us:
      </p>
      <h2 class="text-2xl font-bold mb-2">
        Our Mission
      </h2>
      <p class="mb-4">
        To provide the best possible [your product/service] experience.
      </p>
      <h2 class="text-2xl font-bold mb-2">
        Our Team
      </h2>
      <ul class="list-disc pl-6">
        <li>Team Member 1</li>
        <li>Team Member 2</li>
      </ul>
    </section>
    <img src="https://picsum.photos/450/300" alt="Random Image" class="mt-8">
  </main>
</template>
