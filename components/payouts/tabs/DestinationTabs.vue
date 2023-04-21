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
  <ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
    <Tab
      :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': activeTabIndex === 0 }"
      @click="tabChangedHandler(0)"
      label="Payable orders">
    </Tab>
    <Tab
      :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': activeTabIndex === 1 }"
      @click="tabChangedHandler(1)"
      label="Unpaid">
    </Tab>
    <Tab
      :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': activeTabIndex === 2 }"
      @click="tabChangedHandler(2)"
      label="Paid">
    </Tab>
  </ul>
</template>
