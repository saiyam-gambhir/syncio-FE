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
const tabChangedHandler = (index) => {
  emits('tabChanged', index)
}
</script>

<template>
  <ul class="p-2 m-0 list-none flex overflow-x-auto select-none" style="background: #f1f1f1; border: 1px solid #dee2e6; border-bottom: 0;">
    <li class="pr-3">
      <Tab
        :class="{ 'bg-primary hover:bg-primary-400 text-indigo-900': activeTabIndex === 0, 'text-white': activeTabIndex !== 0 }"
        @click="tabChangedHandler(0)"
        class="cursor-pointer px-4 py-3 flex align-items-center text-primary transition-colors transition-duration-150 p-ripple"
        label="Payable orders">
      </Tab>
    </li>

    <li class="pr-3">
      <Tab
        :class="{ 'bg-white hover:bg-white text-indigo-900': activeTabIndex === 1, 'text-white': activeTabIndex !== 1 }"
        @click="tabChangedHandler(1)"
        class="cursor-pointer px-4 py-3 flex align-items-center text-primary transition-colors transition-duration-150 p-ripple"
        label="Unpaid">
      </Tab>
    </li>

    <li class="pr-3">
      <Tab
        :class="{ 'bg-white hover:bg-white text-indigo-900': activeTabIndex === 2, 'text-white': activeTabIndex !== 2 }"
        @click="tabChangedHandler(2)"
        class="cursor-pointer px-4 py-3 flex align-items-center text-primary transition-colors transition-duration-150 p-ripple"
        label="Paid">
      </Tab>
    </li>
  </ul>
</template>
