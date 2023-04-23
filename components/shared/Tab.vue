<script setup>
/* ----- PROPS ----- */
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a class="cursor-pointer px-4 py-3 flex align-items-center transition-colors transition-duration-150">
    <span class="font-semibold capitalize">{{ label }}</span>
  </a>
</template>
