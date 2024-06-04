<script>
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

export default {
  name: 'Contact',
  components: {
    InputText,
    Textarea,
    Dropdown,
    Checkbox,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
        country: null,
        interests: [],
      },
      countries: [
        { name: 'United States', code: 'us' },
        { name: 'Canada', code: 'ca' },
        { name: 'United Kingdom', code: 'uk' },
      ],
      interests: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission here (e.g., send data to server)
      // eslint-disable-next-line no-console
      console.log(this.formData)
    },
  },
}
</script>

<template>
  <main class="flex flex-col items-center justify-center px-8 py-16 text-center max-w-7xl mx-auto">
    <section class="text-left w-full max-w-lg">
      <h1 class="text-3xl font-bold mb-4">
        Reach Out!
      </h1>
      <p class="mb-4">
        We'd love to hear from you! Please fill out this form and we'll get back to you as soon as possible.
      </p>
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <InputText id="name" v-model="formData.name" class="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <InputText id="email" v-model="formData.email" class="mt-1 p-2 w-full border rounded-md" type="email" required />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <Textarea id="message" v-model="formData.message" rows="4" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
          <Dropdown id="country" v-model="formData.country" :options="countries" option-label="name" placeholder="Select your country" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label for="interests" class="block text-sm font-medium text-gray-700">Interests</label>
          <div class="mt-2">
            <div v-for="interest in interests" :key="interest.value" class="inline-flex items-center mr-4">
              <Checkbox id="interest" v-model="formData.interests" :value="interest.value" class="form-checkbox" />
              <label :for="interest.value" class="ml-2">{{ interest.label }}</label>
            </div>
          </div>
        </div>
        <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
button {
  cursor: pointer;;
}
</style>
