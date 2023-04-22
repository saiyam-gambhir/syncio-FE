<template>
  <header class="header-height surface-section border-bottom-1 surface-border flex align-items-center justify-content-between px-5">
    <div class="header-left">
      <Button severity="secondary" icon="pi pi-arrow-left" iconPos="left" @click="goBackHandler" style="background-color: #e6e6e6;"></Button>
    </div>
    <div class="header-right">
      <Tag :value="`${storeType} store`" :class="storeType" />
      <Button icon="pi pi-user" rounded outlined class="ml-4"></Button>
    </div>
  </header>
</template>

<script setup>
/* ----- DATA ----- */
const { storeType } = useConnectionsStore()
const router = useRouter()

/* ----- METHODS ----- */
const goBackHandler = () => {
  window.history.length > 1 ? router.back() : navigateTo('/')
}
</script>
