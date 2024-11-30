<script setup>
import { ref } from 'vue';

const profilePic = ref(null);
const name = ref('');
const phone = ref('');
const email = ref('');
const address = ref('');
const department = ref('');
const departments = ['Digital Marketing', 'Web Development', 'App Development', 'ERPNext'];

function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  if (file) {
    profilePic.value = URL.createObjectURL(file);
  }
}

function updateProfile() {
  if (!name.value || !phone.value || !email.value || !address.value || !department.value) {
    alert('Please fill all the fields before updating.');
    return;
  }
  alert(
    `Profile updated with Name: ${name.value}, Phone: ${phone.value}, Email: ${email.value}, Address: ${address.value}, and Department: ${department.value}`
  );
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-[#45a834] to-[#545454] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-[#ffffff] shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <!-- Profile Picture Upload -->
          <div class="flex justify-center mb-6">
            <label for="profile-pic-upload" class="relative cursor-pointer">
              <input @change="handleProfilePicUpload" type="file" id="profile-pic-upload" accept="image/*" class="hidden" />
              <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
                <img :src="profilePic" alt="Profile Picture" v-if="profilePic" class="object-cover w-full h-full" />
                <span v-else class="text-gray-500">Upload</span>
              </div>
            </label>
          </div>

          <!-- Form Title -->
          <h2 class="text-2xl font-semibold text-center text-gray-800 mb-2">Update Profile</h2>

          <!-- Name Input -->
          <div class="relative mb-6">
            <input v-model="name" type="text" id="name" name="name" autocomplete="off" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Name" />
            <label for="name" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">
              Name
            </label>
          </div>

          <!-- Phone Number Input -->
          <div class="relative mb-6">
            <div class="flex items-center">
              <span class="mr-2 text-[#545454]">+91</span>
              <input v-model="phone" type="text" id="phone" name="phone" autocomplete="off" class="peer placeholder-transparent h-10 flex-1 border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Phone Number" />
            </div>
            <label for="phone" class="absolute left-8 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">
              Phone Number
            </label>
          </div>

          <!-- Email Input -->
          <div class="relative mb-6">
            <input v-model="email" type="email" id="email" name="email" autocomplete="off" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Email" />
            <label for="email" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">
              Email
            </label>
          </div>

          <!-- Address Input -->
          <div class="relative mb-6">
            <input v-model="address" type="text" id="address" name="address" autocomplete="off" class="peer placeholder-transparent h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]" placeholder="Address" />
            <label for="address" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">
              Address
            </label>
          </div>

          <!-- Department Dropdown -->
          <div class="relative mb-6">
            <select v-model="department" id="department" name="department" class="h-10 w-full border-b-2 border-[#545454] text-[#000000] focus:outline-none focus:border-[#45a834]">
              <option value="" disabled>Select Department</option>
              <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
            </select>
            <label for="department" class="absolute left-0 -top-3.5 text-[#545454] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-[#000000] peer-focus:text-sm">
              Department
            </label>
          </div>

          <!-- Update Profile Button -->
          <div class="relative flex justify-center w-full mb-4">
            <button @click="updateProfile" class="bg-[#2d3748] text-[#ffffff] rounded-md px-6 py-2">
              Update Profile
            </button>
          </div>

          <!-- Back to Dashboard Link -->
          <div class="text-center mt-4">
            <a href="/dashboard" class="text-[#45a834] hover:underline">Back to Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
