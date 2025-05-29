<script setup>
import { ref } from 'vue'
const phone = '00385955448400'
const mail = 'fooshmoola@gmail.com'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const message = ref('')

function sendEmail() {
  // Prepare the mailto link
  const subject = encodeURIComponent(`Contact from ${firstName.value} ${lastName.value}`)
  const body = encodeURIComponent(
    `From: ${firstName.value} ${lastName.value}\nEmail: ${email.value}\n\n${message.value}`
  )
  window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-12 px-4 md:px-24 gap-10 min-h-[60vh] pb-24 bg-gray-600/90 md:h-screen">
    <!-- Left: Contact Form -->
    <div class="md:w-1/2 flex flex-col">
      <h2 class="text-5xl md:text-6xl font-bold tracking-wide mb-8 text-white uppercase hover:text-purple-500 transition-colors">Contact</h2>
      <form @submit.prevent="sendEmail" class="flex flex-col space-y-4 w-full max-w-md">
        <div class="flex space-x-4">
          <div class="flex-1">
            <label class="block text-xs tracking-widest font-light text-white mb-1">First Name</label>
            <input v-model="firstName" type="text" class="w-full border border-black/40 bg-gray-200 px-2 py-1 focus:outline-none" />
          </div>
          <div class="flex-1">
            <label class="block text-xs tracking-widest font-light text-white mb-1">Last Name</label>
            <input v-model="lastName" type="text" class="w-full border border-black/40 bg-gray-200 px-2 py-1 focus:outline-none" />
          </div>
        </div>
        <div>
          <label class="block text-xs tracking-widest font-light text-white mb-1">e-mail</label>
          <input v-model="email" type="email" class="w-full border border-black/40 bg-gray-200 px-2 py-1 focus:outline-none" />
        </div>
        <div>
          <label class="block text-xs tracking-widest font-light text-white mb-1">message</label>
          <textarea v-model="message" rows="5" class="w-full border border-black/40 bg-gray-200 px-2 py-1 focus:outline-none"></textarea>
        </div>
        <!-- SEND BUTTON -->
        <button
          type="submit"
          class="w-full bg-black text-white py-2 px-6 rounded-none tracking-widest font-light hover:bg-gray-900 transition"
        >Send</button>
      </form>
    </div>
    <!-- Right: Contact Buttons -->
    <div class="md:w-1/3 flex flex-col items-center justify-center space-y-6 pt-10 pb-40 md:pt-24">
      <a
        :href="`tel:${phone}`"
        class="w-40 text-center bg-black text-white py-2 px-6 rounded-none tracking-widest font-light hover:bg-gray-900 hover:text-purple-500 transition-colors"
        >Phone</a>
      <a
        :href="`https://wa.me/${phone.replace(/[^0-9]/g, '')}`"
        class="w-40 text-center bg-black text-white py-2 px-6 rounded-none tracking-widest font-light hover:bg-gray-900  hover:text-purple-500 transition-colors"
        target="_blank"
        >WhatsApp</a>
      <a
        :href="`mailto:${mail}`"
        class="w-40 text-center bg-black text-white py-2 px-6 rounded-none tracking-widest font-light hover:bg-gray-900  hover:text-purple-500 transition-colors"
        >Email</a>
    </div>
  </section>
</template>
