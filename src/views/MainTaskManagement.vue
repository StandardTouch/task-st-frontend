<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <!-- Replace text with logo -->
      <img src="/logo.png" alt="Logo" class="h-12" />
      <button
        @click="showModal = true"
        class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600"
      >
        Add Task
      </button>
    </div>
    <TaskFilters
      :departments="departments"
      :priorities="priorities"
      :statuses="statuses"
      :filters="filters"
      @filter-changed="updateFilters"
    />
    <TaskTable
      :tasks="filteredTasks"
      @edit-task="editTask"
      @delete-task="deleteTask"
    />
    <TaskModel
      v-if="showModal"
      :visible="showModal"
      :task="currentTask"
      :departments="departments"
      :priorities="priorities"
      @save="saveTask"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import TaskFilters from "../components/TaskFilters.vue";
import TaskModel from "../components/TaskModel.vue";
import TaskTable from "../components/TaskTable.vue";

// Reactive states
const showModal = ref(false);
const currentTask = reactive({
  name: "",
  deptId: "",
  priority: "",
  deadline: "",
  desc: "",
});

const filters = reactive({ deptId: "", priority: "", status: "" });

// Static data
const departments = ref([
  { id: 1, name: "DGM" },
  { id: 2, name: "WEB" },
  { id: 3, name: "ERP" },
]);
const priorities = ref(["Low", "Medium", "High"]);
const statuses = ref(["Pending", "In Progress", "Completed"]);

const tasks = ref([
  {
    id: 1,
    name: "Add field Status",
    department: "ERP",
    priority: "High",
    assignee: {
      name: "Anwar",
      email: "anwar@standardtouch.com",
      avatar: null, // No avatar provided
    },
    progress: 90,
    deadline: "23/11/2024",
  },
  {
    id: 2,
    name: "Deploy new site in frappe cloud",
    department: "ERP",
    priority: "Low",
    status: "Pending",
    progress: 60,
    deadline: "23/11/2024",
    assignee: {
      name: "Ateeq",
      email: "ateeq@standardtouch.com",
      avatar: null, // No avatar provided
    },
  },
  {
    id: 3,
    name: "Deploy new site in frappe cloud",
    department: "ERP",
    priority: "Medium",
    status: "Pending",
    progress: 70,
    deadline: "23/11/2024",
    assignee: {
      name: "Zaid",
      email: "zaid@standardtouch.com",
      avatar: null, // No avatar provided
    },
  },
]);

// Computed property for filtered tasks
const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    return (
      (!filters.deptId || task.deptId == filters.deptId) &&
      (!filters.priority || task.priority == filters.priority) &&
      (!filters.status || task.status == filters.status)
    );
  });
});

// Methods
const updateFilters = (updatedFilters) => {
  Object.assign(filters, updatedFilters);
};

const saveTask = (task) => {
  if (task.id) {
    const index = tasks.value.findIndex((t) => t.id === task.id);
    tasks.value.splice(index, 1, task);
  } else {
    tasks.value.push({ ...task, id: Date.now() });
  }
  closeModal();
};

const editTask = (task) => {
  Object.assign(currentTask, task);
  showModal.value = true;
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const closeModal = () => {
  showModal.value = false;
  Object.assign(currentTask, {
    name: "",
    deptId: "",
    priority: "",
    deadline: "",
    desc: "",
  });
};
</script>
