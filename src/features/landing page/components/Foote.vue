<template>
    <footer class="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo and Description -->
          <div class="space-y-4">
            <div class="flex items-center">
              <img
                src="../sources/logo.png"
                alt="Rozi Roti Logo"
                class="w-40 md:w-48 rounded-lg shadow-lg"
              />
            </div>
            <p class="text-sm">
              Your trusted partner in providing quality services and solutions. Connecting you with excellence in every step.
            </p>
          </div>
  
          <!-- Contact Section -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="material-icons mr-2">phone</span> +91 94816 35967 (India)
              </li>
              <li class="flex items-center">
                <span class="material-icons mr-2">phone</span> +966 59 115 3847 (Riyadh)
              </li>
              <li class="flex items-center">
                <span class="material-icons mr-2">email</span> support@roziroti.com
              </li>
            </ul>
            <div class="flex mt-4 space-x-4">
              <a href="#" aria-label="Facebook" class="hover:scale-110 transition-transform">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                  alt="Facebook"
                  class="w-8 h-8"
                />
              </a>
              <a href="#" aria-label="Twitter" class="hover:scale-110 transition-transform">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14417/14417460.png"
                  alt="Twitter"
                  class="w-8 h-8"
                />
              </a>
              <a href="#" aria-label="Instagram" class="hover:scale-110 transition-transform">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                  alt="Instagram"
                  class="w-8 h-8"
                />
              </a>
              <a href="#" aria-label="LinkedIn" class="hover:scale-110 transition-transform">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  alt="LinkedIn"
                  class="w-8 h-8"
                />
              </a>
            </div>
          </div>
  
          <!-- Locations Tab Section -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Our Locations</h4>
            <div class="tabs flex flex-wrap justify-center md:justify-start mb-4">
              <button
                v-for="(location, index) in locations"
                :key="index"
                class="px-4 py-2 rounded-full text-sm font-semibold transition hover:bg-white hover:text-green-800"
                @mouseover="selectTab(index)"
                @mouseout="clearTab"
              >
                {{ location.city }}
              </button>
            </div>
            <div
              class="tab-content bg-white text-gray-800 rounded-lg shadow-lg p-4"
              v-show="selectedTab !== null"
            >
              <h4 class="text-lg font-semibold">{{ locations[selectedTab]?.city }}</h4>
              <p>{{ locations[selectedTab]?.address }}</p>
              <p>Tel: {{ locations[selectedTab]?.phone }}</p>
            </div>
          </div>
        </div>
  
        <!-- Policies Section -->
        <div class="border-t border-green-500 mt-8 pt-6 text-center">
          <p>&copy; 2024 Standard Touch | e–Solutions | All Rights Reserved</p>
          <div class="mt-2 space-x-4">
            <a href="#privacy-policy" class="hover:text-green-300">Privacy Policy</a>
            <span>|</span>
            <a href="#terms-conditions" class="hover:text-green-300">Terms & Conditions</a>
            <span>|</span>
            <a href="#refund-policy" class="hover:text-green-300">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        locations: [
          {
            city: "India",
            address: "1-1165/5e, First Floor, Glass House, Gulbarga, Karnataka, India.",
            phone: "+91 94816 35967",
          },
          {
            city: "Riyadh",
            address: "P.O. Box 385038, Riyadh, Saudi Arabia.",
            phone: "+966 59 115 3847",
          },
          {
            city: "UAE",
            address: "712, Sunshine Building, Al Garhoud, Dubai.",
            phone: "+971 50 910 8646",
          },
        ],
        selectedTab: null, // Initially no tab is selected
      };
    },
    methods: {
      selectTab(index) {
        this.selectedTab = index; // Show the selected location
      },
      clearTab() {
        this.selectedTab = null; // Clear the selection when mouse leaves
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styles for hover effects */
  .tab-content {
    transition: opacity 0.3s ease-in-out;
  }
  </style>
  