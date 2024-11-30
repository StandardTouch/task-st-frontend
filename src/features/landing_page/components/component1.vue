<template>
  <!-- Main Section Content -->
  <section
    class="relative z-10 bg-primary-100 p-12 md:p-16 rounded-lg flex flex-col md:flex-row items-center md:justify-between shadow-lg"
  >
    <!-- Left Side Content -->
    <div class="md:w-1/2 space-y-6">
      <h1 class="text-4xl font-bold text-primary-700">
        Revolutionise your productivity with
        <span class="text-primary-500">RoziRoti</span>
      </h1>
      <p class="text-primary-600">
        We empower your business by keeping everyone accountable for their work.
      </p>
      <div class="flex items-center space-x-4">
        <!-- Avatars -->
        <div class="flex -space-x-2">
          <img
            v-for="n in 3"
            :key="n"
            class="w-8 h-8 rounded-full border-2 border-white"
            :src="`https://randomuser.me/api/portraits/thumb/men/${n}.jpg`"
            alt="User avatar"
          />
          <span
            class="bg-primary-500 text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center"
          >
            12+
          </span>
        </div>
        <!-- Request a Demo Button -->
        <button
          class="bg-primary-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-primary-600"
        >
          Request a demo
        </button>
      </div>
    </div>
    <!-- Right Side: Image and Card -->
    <div
      class="mt-10 md:mt-0 md:w-1/2 relative bg-primary-500 rounded-tl-[150px] p-10 h-[190px]"
    >
      <!-- Main Image -->
      <div class="absolute -top-8 -left-12">
        <img src="/women.png" alt="Main User" class="w-76 h-56" />
      </div>

      <!-- Text Section -->
      <div class="text-white text-right ml-auto">
        <h2 class="text-2xl font-bold">It's the high time for change</h2>
        <p class="text-sm font-semi-bold mt-2">Empower your workforce today.</p>
      </div>
    </div>
  </section>
</template>
