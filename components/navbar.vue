<template>
  <div>
    <nav
      :class="[
        'fixed z-50 bg-black w-full flex items-center justify-between h-16 px-8 transition-transform duration-500',
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      ]"
    >
      <div class="text-white font-bold text-2xl tracking-widest cursor-pointer">LOGO</div>
      <ul class="flex space-x-12">
        <li>
          <a href="#about" class="text-white hover:text-gray-300 transition">ABOUT</a>
        </li>
        <li>
          <a href="#work" class="text-white hover:text-gray-300 transition">WORK</a>
        </li>
        <li>
          <a href="#contact" class="text-white hover:text-gray-300 transition">CONTACT</a>
        </li>
      </ul>
    </nav>
    <!-- Toggle button removed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: true,
      lastScrollY: 0
    };
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      // Show navbar if scrolling up or near the top of the page
      this.isNavVisible = currentScrollY < this.lastScrollY || currentScrollY < 50;
      this.lastScrollY = currentScrollY;
    }
  },
  mounted() {
    this.lastScrollY = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
