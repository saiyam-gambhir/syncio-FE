<script setup>
import { useAuthStore } from '@/stores/auth'

/* ----- DATA ----- */
const auth = useAuthStore()
const knobSize = ref(125)
const knobStroke = ref(15)
</script>

<template>
  <div class="mt-auto text-center pt-4 surface-border border-top-1 surface-section pb-4">
    <h2>Products Synced</h2>

    <Knob
      :max="auth.productsSyncedLimit"
      :min="0"
      :size="knobSize"
      :strokeWidth="knobStroke"
      rangeColor="rgba(250, 117, 123, .25)"
      textColor="rgba(0, 0 , 0, 1)"
      v-model="auth.productsSynced"
      v-tooltip.top="`${auth.productsSynced} of ${auth.productsSyncedLimit} products synced`"
      valueColor="rgba(250, 117, 123, 1)" />

    <NuxtLink to="/plan-and-billings">
      <Button class="mt-2 p-button-lg btn-shine font-bold">
        Upgrade
        <div class="shine"></div>
        <div class="shine-1"></div>
      </Button>
    </NuxtLink>
  </div>
</template>
