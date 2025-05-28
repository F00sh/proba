<template>
  <footer class="fixed w-full bg-black text-white py-6 flex flex-col items-center bottom-0 left-0 z-50">
    <div class="flex space-x-8 mb-2">
      <!-- Instagram -->
      <a href="#" target="_blank" aria-label="Instagram" class="hover:text-pink-400 transition">
        <!-- ...icon... -->
      </a>
      <!-- Vimeo -->
      <a href="#" target="_blank" aria-label="Vimeo" class="hover:text-blue-400 transition">
        <!-- ...icon... -->
      </a>
      <!-- LinkedIn -->
      <a href="#" target="_blank" aria-label="LinkedIn" class="hover:text-blue-500 transition">
        <!-- ...icon... -->
      </a>
    </div>
    <div class="text-xs text-gray-400">
      &copy; {{ new Date().getFullYear() }} Your Company Name
    </div>
  </footer>
</template>
