<!-- this is the forgot password code -->
<script setup>
import { ref } from 'vue';

const email = ref('');

function requestResetLink() {
  alert(`NOTE : "500 Rupees Will Be Deducted From Your Salary" Cause Of this operation And the password Has Been Sent To${email.value}`);
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
          <div class="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" class="h-10 w-auto" />
          </div>
          <h2 class="text-2xl font-semibold text-center text-gray-800 mb-2">Forgot your password</h2>
          <p class="text-sm text-center text-gray-600 mb-6">
            Can't You Remember Your Password 
          </p>
          

          <div class="relative mb-6">
            <input v-model="email" type="email" id="email" name="email" autocomplete="off" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Email Address" />
            <label for="email" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">
              Enter email address
            </label>
          </div>


          <div class="relative flex justify-center w-full mb-4">
            <button @click="requestResetLink" class="bg-[#2d3748] text-[#ffffff] rounded-md px-6 py-2">
              Request reset link
            </button>
          </div>

          <div class="text-center mt-4">
            <a href="/login" class="text-[#45a834] hover:underline">Back to Login</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>