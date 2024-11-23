<!-- code for the sign up page  -->
<script setup>
import { ref, computed } from 'vue';

const passwordVisible = ref(false);
const password = ref('');
const confirmPassword = ref('');
const passwordMatchError = ref(false);

function Alert() {
  alert("'Sorry' Rozi Roti Does not Support Login from Google 😓, we cannot afford it.");
}

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}

function validatePasswords() {
  passwordMatchError.value = password.value !== confirmPassword.value && confirmPassword.value !== '';
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#45a834] to-[#545454] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-[#ffffff] shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <img src="/logo.png" alt="Logo">
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <input autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Full Name" />
                <label for="name" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">Full Name</label>
              </div>
              <div class="relative">
                <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Email Address" />
                <label for="email" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">Email Address</label>
              </div>
              <div class="relative">
                <input autocomplete="off" id="phone" name="phone" type="tel" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Phone Number" />
                <label for="phone" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">Phone Number</label>
              </div>
              <div class="relative">
                <input :type="passwordVisible ? 'text' : 'password'" autocomplete="off" id="password" name="password" v-model="password" @input="validatePasswords" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Password" />
                <label for="password" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">Password</label>
              </div>
              <div class="relative">
                <input :type="passwordVisible ? 'text' : 'password'" autocomplete="off" id="confirm_password" name="confirm_password" v-model="confirmPassword" @input="validatePasswords" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Re Enter Password" />
                <label for="confirm_password" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">Re Enter Password</label>

                <p v-if="passwordMatchError" class="text-red-600 text-sm mt-2">Passwords do not match.</p>
              </div>

              <div class="relative flex justify-center w-full mt-4">
                <button type="button" @click="togglePasswordVisibility" class="text-2xl focus:outline-none" aria-label="Toggle password visibility">
                  {{ passwordVisible ? "🙈" : "🙉" }}
                </button>
              </div>
              
              <div class="relative flex justify-center w-full mt-4">
                <button class="bg-[#45a834] text-[#ffffff] rounded-md px-4 py-2">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center mt-4">
          <button @click="Alert" class="flex items-center bg-[#ffffff] border border-[#545454] rounded-lg shadow-md px-6 py-2 text-sm font-medium text-[#545454] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#545454]">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M46.145 24.001c0-1.337-.115-2.639-.328-3.901H24v7.402h12.362c-.531 2.694-2.084 4.969-4.348 6.512v5.396h7.023c4.106-3.781 6.508-9.346 6.508-15.409z"/>
              <path fill="#34A853" d="M24 48c6.516 0 11.976-2.17 15.968-5.887l-7.023-5.396c-2.04 1.372-4.607 2.191-8.945 2.191-6.877 0-12.711-4.648-14.812-10.959H2.92v6.809A23.973 23.973 0 0 0 24 48z"/>
              <path fill="#FBBC05" d="M9.188 28.95a14.919 14.919 0 0 1-.779-4.76c0-1.653.286-3.256.779-4.759V12.622H2.92A23.96 23.96 0 0 0 0 24c0 3.946.935 7.672 2.92 11.378l6.268-6.428z"/>
              <path fill="#EA4335" d="M24 9.545c3.583 0 6.79 1.238 9.318 3.646l7.068-7.068C35.975 2.877 30.516 0 24 0 14.705 0 6.829 5.644 2.92 12.622l6.268 6.809C11.289 14.194 17.122 9.545 24 9.545z"/>
            </svg>
            <span>Sign Up with Google</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>