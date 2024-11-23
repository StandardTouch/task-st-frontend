<template>
  <div class="flex gap-4 mb-6">
    <select
      v-model="filters.deptId"
      class="border border-gray-300 p-2 rounded focus:ring-primary-500"
      @change="applyFilters"
    >
      <option value="">All Departments</option>
      <option v-for="dept in departments" :key="dept.id" :value="dept.id">
        {{ dept.name }}
      </option>
    </select>
    <select
      v-model="filters.priority"
      class="border border-gray-300 p-2 rounded focus:ring-primary-500"
      @change="applyFilters"
    >
      <option value="">All Priorities</option>
      <option v-for="priority in priorities" :key="priority" :value="priority">
        {{ priority }}
      </option>
    </select>
    <select
      v-model="filters.status"
      class="border border-gray-300 p-2 rounded focus:ring-primary-500"
      @change="applyFilters"
    >
      <option value="">All Status</option>
      <option v-for="status in statuses" :key="status" :value="status">
        {{ status }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    departments: Array,
    priorities: Array,
    statuses: Array,
    filters: Object,
  },
  methods: {
    applyFilters() {
      this.$emit("filter-changed", this.filters);
    },
  },
};
</script>
