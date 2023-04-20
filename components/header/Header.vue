<script setup>
import { useConnectionsStore } from '@/stores/connections'

/* ----- DATA ----- */
const connections = useConnectionsStore()
const router = useRouter()

const goBackHandler = () => {
  window.history.length > 1 ? router.back() : navigateTo('/')
}
</script>

<template>
  <header class="header-height surface-section border-bottom-1 surface-border flex align-items-center justify-content-between px-5">
    <div class="header-left">
      <Button class="p-button p-button-secondary" icon="pi pi-arrow-left" iconPos="left" @click="goBackHandler" style="background-color: #e6e6e6;"></Button>
    </div>
    <div class="header-right">
      <Tag :value="`${connections.storeType} store`" :class="connections.storeType" />
      <Tag :value="connections.storeName" :class="connections.storeType" class="store-name ml-3" />
    </div>
  </header>
</template>
