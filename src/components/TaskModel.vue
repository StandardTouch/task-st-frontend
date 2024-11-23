<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-6 rounded shadow-lg w-1/2">
      <h2 class="text-xl font-bold mb-4">
        {{ task.id ? "Edit Task" : "Add Task" }}
      </h2>
      <form @submit.prevent="validateAndSaveTask">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <!-- Task Name -->
          <div>
            <label class="block mb-1">Task Name</label>
            <input
              v-model="task.name"
              type="text"
              :class="[
                'border p-2 w-full rounded focus:ring-primary-500',
                validationTriggered && !task.name
                  ? 'border-red-500'
                  : 'border-gray-300',
                task.name && !validationTriggered
                  ? 'focus:border-green-500'
                  : '',
              ]"
              @blur="markTouched('name')"
              required
            />
            <span
              v-if="validationTriggered && !task.name"
              class="text-red-500 text-sm"
            >
              Task Name is required.
            </span>
          </div>

          <!-- Department -->
          <div>
            <label class="block mb-1">Department</label>
            <select
              v-model="task.deptId"
              :class="[
                'border p-2 w-full rounded focus:ring-primary-500',
                validationTriggered && !task.deptId
                  ? 'border-red-500'
                  : 'border-gray-300',
                task.deptId && !validationTriggered
                  ? 'focus:border-green-500'
                  : '',
              ]"
              @blur="markTouched('deptId')"
              required
            >
              <option value="" disabled>Select Department</option>
              <option
                v-for="dept in departments"
                :key="dept.id"
                :value="dept.id"
              >
                {{ dept.name }}
              </option>
            </select>
            <span
              v-if="validationTriggered && !task.deptId"
              class="text-red-500 text-sm"
            >
              Department is required.
            </span>
          </div>

          <!-- Priority -->
          <div>
            <label class="block mb-1">Priority</label>
            <select
              v-model="task.priority"
              :class="[
                'border p-2 w-full rounded focus:ring-primary-500',
                validationTriggered && !task.priority
                  ? 'border-red-500'
                  : 'border-gray-300',
                task.priority && !validationTriggered
                  ? 'focus:border-green-500'
                  : '',
              ]"
              @blur="markTouched('priority')"
              required
            >
              <option value="" disabled>Select Priority</option>
              <option
                v-for="priority in priorities"
                :key="priority"
                :value="priority"
              >
                {{ priority }}
              </option>
            </select>
            <span
              v-if="validationTriggered && !task.priority"
              class="text-red-500 text-sm"
            >
              Priority is required.
            </span>
          </div>

          <!-- Deadline -->
          <div>
            <label class="block mb-1">Deadline</label>
            <input
              v-model="task.deadline"
              type="date"
              :class="[
                'border p-2 w-full rounded focus:ring-primary-500',
                validationTriggered && !task.deadline
                  ? 'border-red-500'
                  : 'border-gray-300',
                task.deadline && !validationTriggered
                  ? 'focus:border-green-500'
                  : '',
              ]"
              @blur="markTouched('deadline')"
              required
            />
            <span
              v-if="validationTriggered && !task.deadline"
              class="text-red-500 text-sm"
            >
              Deadline is required.
            </span>
          </div>

          <!-- Progress -->
          <div class="col-span-2">
            <label class="block mb-1">Progress (%)</label>
            <input
              v-model="task.progress"
              type="number"
              :class="[
                'border p-2 w-full rounded focus:ring-primary-500',
                validationTriggered && !task.progress
                  ? 'border-red-500'
                  : 'border-gray-300',
                task.progress && !validationTriggered
                  ? 'focus:border-green-500'
                  : '',
              ]"
              @blur="markTouched('progress')"
              min="0"
              max="100"
              required
            />
            <span
              v-if="validationTriggered && !task.progress"
              class="text-red-500 text-sm"
            >
              Progress is required.
            </span>
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="block mb-1">Description</label>
          <textarea
            v-model="task.desc"
            :class="[
              'border p-2 w-full rounded focus:ring-primary-500',
              validationTriggered && !task.desc
                ? 'border-red-500'
                : 'border-gray-300',
              task.desc && !validationTriggered ? 'focus:border-green-500' : '',
            ]"
            @blur="markTouched('desc')"
            rows="4"
          ></textarea>
        </div>

        <!-- Actions -->
        <div class="flex justify-end mt-6">
          <button
            @click="closeModal"
            type="button"
            class="bg-gray-300 px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { defineProps, defineEmits } from "vue";

// Props
defineProps({
  visible: Boolean,
  task: Object,
  departments: Array,
  priorities: Array,
});

// Emit Event
const emit = defineEmits(["save", "close"]);

// Reactive validation states
const validationTriggered = ref(false);
const touchedFields = reactive({
  name: false,
  deptId: false,
  priority: false,
  deadline: false,
  progress: false,
  desc: false,
});

// Mark field as touched
const markTouched = (field) => {
  touchedFields[field] = true;
};

// Validate and save task
const validateAndSaveTask = () => {
  validationTriggered.value = true;

  // Perform validation
  const isValid =
    task.name && task.deptId && task.priority && task.deadline && task.progress;

  if (!isValid) {
    console.error("Validation failed!");
    return;
  }

  // Emit save event
  emit("save", task);
  closeModal();
};

// Close modal
const closeModal = () => {
  emit("close");
};
</script>

<style>
/* Optional styles */
</style>
