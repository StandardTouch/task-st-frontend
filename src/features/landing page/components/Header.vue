<template>
  <header
    class="bg-gradient-to-r from-green-600 to-green-800 text-white py-4 shadow-md w-full"
  >
    <div class="w-full px-4 flex items-center justify-between">
      <!-- Logo Section -->
      <div class="flex items-center">
        <img
          src="/logo.png"
          alt="Company Logo"
          class="w-20 md:w-28 rounded-lg shadow-lg"
        />
        <h1 class="ml-4 text-lg md:text-xl font-bold">Rozi Roti</h1>
      </div>

      <!-- Search Bar -->
      <div class="hidden md:flex items-center flex-1 mx-8">
        <input
          type="text"
          placeholder="Search..."
          class="w-full px-4 py-2 rounded-lg shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          class="ml-2 px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white shadow-md"
        >
          Search
        </button>
      </div>

      <!-- Login/Signup Buttons -->
      <div class="flex space-x-4">
        <button
          class="px-4 py-2 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-200"
        >
          Login
        </button>
        <button
          class="px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
