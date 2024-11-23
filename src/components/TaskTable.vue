<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300">
      <thead class="bg-primary-400">
        <tr>
          <th class="border border-gray-300 px-4 py-2 text-left">Task Name</th>
          <th class="border border-gray-300 px-4 py-2 text-left">Department</th>
          <th class="border border-gray-300 px-4 py-2 text-left">Priority</th>
          <th class="border border-gray-300 px-4 py-2 text-left">Deadline</th>
          <th class="border border-gray-300 px-4 py-2 text-left">Progress</th>
          <th class="border border-gray-300 px-4 py-2 text-left">Assignee</th>
          <th class="border border-gray-300 px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id" class="hover:bg-primary-100">
          <!-- Task Name -->
          <td class="border border-gray-300 px-4 py-2">{{ task.name }}</td>

          <!-- Department -->
          <td class="border border-gray-300 px-4 py-2">
            {{ task.department }}
          </td>

          <!-- Priority -->
          <td class="border border-gray-300 px-4 py-2">
            <span
              :class="getPriorityClass(task.priority)"
              class="px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ task.priority }}
            </span>
          </td>

          <!-- Deadline -->
          <td class="border border-gray-300 px-4 py-2">{{ task.deadline }}</td>

          <!-- Progress -->
          <td class="border border-gray-300 px-4 py-2">
            <div class="relative h-4 bg-gray-200 rounded">
              <div
                :style="{ width: task.progress + '%' }"
                class="absolute h-full bg-primary-500 rounded"
              ></div>
              <span
                class="absolute inset-0 text-xs flex justify-center items-center text-white font-bold"
              >
                {{ task.progress }}%
              </span>
            </div>
          </td>

          <!-- Assignee -->
          <td class="border border-gray-300 px-4 py-2">
            <div class="relative group flex items-center gap-2">
              <img
                :src="task.assignee.avatar || '/user-avatar.png'"
                :alt="task.assignee.name"
                class="w-8 h-8 rounded-full"
              />

              <span class="text-sm font-medium">{{ task.assignee.name }}</span>
              <span
                class="absolute bottom-12 left-0 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100"
              >
                {{ task.assignee.email }}
              </span>
            </div>
          </td>

          <!-- Actions -->
          <td class="border border-gray-300 px-4 py-2 text-center">
            <button
              @click="$emit('edit-task', task)"
              class="text-primary-500 hover:underline"
            >
              Edit
            </button>
            <button
              @click="$emit('delete-task', task.id)"
              class="text-red-500 hover:underline ml-4"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props
defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

// Function to get priority class
const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-200 text-red-700";
    case "Medium":
      return "bg-orange-200 text-orange-700";
    case "Low":
      return "bg-blue-200 text-blue-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
