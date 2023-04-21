<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="pr-3">
    <a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150">
      <span class="font-semibold capitalize">{{ label }}</span>
    </a>
  </li>
</template>