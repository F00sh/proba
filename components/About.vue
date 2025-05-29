<script setup>

const skills = [
  "GRAPHIC DESIGN",
  "3D MODELING",
  "ANIMATION",
  "UI/UX",
  "WEB"
]

const body = [
  "As a versatile product designer, I specialize in game design, animation, web design, and more.",
  "With a bachelor's degree in product design and a solid foundation in art and design, I am equipped to deliver high-quality services in product and graphic design, 3D modeling, 2D/3D animation, web design, UI/UX, and video game asset modeling and mechanics design.",
  "I am proficient in using Adobe Creative Suite, Blender, HTML & CSS, Figma, Revit, and AutoCAD. I am eager to collaborate with steady clients who value creativity and precision in their projects.",
  "Based in Croatia, I am ready to bring your vision to life with innovative and effective design solutions."
]
</script>

<template>
  <section class="w-full h-screen flex flex-col md:flex-row justify-between items-stretch md:items-center py-12 px-4 md:px-24 gap-6 bg-black">
    <!-- Left Column -->
    <div class="md:w-1/3 flex flex-col justify-start items-start">
      <h2 class="text-5xl md:text-6xl font-bold tracking-wide mb-6 text-white uppercase  hover:text-purple-500 transition-colors">
        ABOUT ME
      </h2>
      <ul class="space-y-2 md:space-y-4 text-2xl md:text-3xl tracking-widest text-white/90">
        <li v-for="(skill, i) in skills" :key="i" class="hover:pl-5 duration-300  hover:text-purple-500">
          {{ skill }}
        </li>
      </ul>
    </div>
    <!-- Right Column -->
    <div class="md:w-2/3 md:h-1/2 bg-white/10 rounded-xl p-8 text-white text-md font-light leading-relaxed border border-white/10 shadow-xl flex flex-col justify-center">
      <p class="mb-6" v-for="(p, i) in body" :key="i">{{ p }}</p>
    </div>
  </section>
</template>
