<script setup>
/* ----- PROPS ----- */
const props = defineProps({
  activeTabIndex: {
    type: [Number, String],
    required: true
  }
})

/* ----- EMITS ----- */
const emits = defineEmits(['tabChanged'])

/* ----- METHODS ----- */
const tabChangedHandler = index => {
  emits('tabChanged', index)
}
</script>

<template>
  <ul class="p-2 m-0 list-none flex overflow-x-auto select-none" style="background: #f1f1f1; border: 1px solid #dee2e6; border-bottom: 0;">
    <li class="pr-3">
      <Tab
      :class="{ 'active-tab': activeTabIndex === 0, 'non-active-tab text-primary': activeTabIndex !== 0 }"
        @click="tabChangedHandler(0)"
        class="cursor-pointer px-4 py-3 flex align-items-center transition-colors transition-duration-150"
        label="Open">
      </Tab>
    </li>

    <li class="pr-3">
      <Tab
      :class="{ 'active-tab': activeTabIndex === 1, 'non-active-tab text-primary': activeTabIndex !== 1 }"
        @click="tabChangedHandler(1)"
        class="cursor-pointer px-4 py-3 flex align-items-center transition-colors transition-duration-150"
        label="Complete">
      </Tab>
    </li>
  </ul>
</template>
