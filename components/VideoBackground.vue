<template>
  <div class="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
    <video
      src="https://www.w3schools.com/howto/rain.mp4"
      autoplay
      muted
      loop
      playsinline
      class="w-full h-full object-cover"
    />
    <!-- Optional: Add a dark overlay for contrast -->
    <div class="absolute inset-0 bg-black/50"></div>
  </div>
</template>
