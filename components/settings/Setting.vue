<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true
  },

  disabled: {
    type: Boolean,
    default: false
  },

  href: {
    type: String,
    required: false
  },

  icon: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="col-12 lg:col-4 p-3">
    <div class="border-round flex flex-column h-full justify-content-between mb-3 overflow-hidden shadow-2 surface-0">
      <div class="p-4">
        <div class="align-items-center flex">
          <span class="align-items-center border-1 border-circle inline-flex justify-content-center mr-3 surface-card" style="height: 38px; width: 38px">
            <i :class="icon" class="pi text-xl"></i>
          </span>
          <span class="font-semibold text-2xl text-900">{{ title }}</span>
        </div>
        <p class="line-height-4 mb-4 mt-4 text-700">{{ description }}</p>
      </div>

      <div class="border-top-1 px-4 py-3 surface-card surface-border text-right">
        <NuxtLink to="/plan-and-billings" v-if="disabled">
          <Button class="p-button-outlined" icon="pi pi-arrow-right" iconPos="right" label="Unlock this add-on"></Button>
        </NuxtLink>
        <NuxtLink :to="href" v-else>
          <Button class="p-button-outlined" icon="pi pi-arrow-right" iconPos="right" label="More"></Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
