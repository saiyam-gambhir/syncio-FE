<script setup>
import { useAuthStore } from '~/stores/auth'
import { useConnectionsStore } from '~/stores/connections'

/* ----- DATA ----- */
const { charging, level } = useBattery()
const { showUpgrade, type } = useUrlSearchParams()
const { showUpgradeDialogHandler } = useUpgradeDialog()
const auth = useAuthStore()
const connections = useConnectionsStore()
const loading = ref(true)
const online = useOnline()

/* ----- WATCHER ----- */
watch(online, () => {
  if(!online.value) {
    auth.isNetworkDialogVisible = true
  }
})

watch(level, () => {
  if(level.value < .2 && !charging.value) {
    auth.isBatteryLowDialogVisible = true
  }
})

/* ----- MOUNTED ----- */
onMounted(async () => {
  await nextTick()
  loading.value = false

	const USER_ID = sessionStorage.USER_ID
	if(!auth.user) {
    loading.value = true
		await auth.fetchUser(USER_ID)
		await auth.fetchCurrentPlan(USER_ID)
		await connections.fetchCurrentStore()
    loading.value = false
  }

	if(Boolean(showUpgrade)) {
  	showUpgradeDialogHandler(type)
  }
})
</script>

<template>
  <main class="main">
    <section v-if="loading" class="loading-page flex align-items-center justify-content-center">
      <Logo />
    </section>

    <div v-else>
      <LazyBatteryLowDialog :level="level" v-if="auth.isBatteryLowDialogVisible" />
      <NetworkDialog :online="online" v-if="!online" />
      <Toast position="top-center" successIcon="pi pi-check-circle" />

      <div class="min-h-screen flex relative lg:static">
        <Navbar></Navbar>

        <div class="min-h-screen flex flex-column relative flex-auto">
          <Header></Header>

          <div class="flex flex-auto flex-column router-view mx-auto">
            <div class="flex-auto surface-section p-5 pt-4">
              <NuxtPage></NuxtPage>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.loading-page {
  height: 100vh;
  background: linear-gradient(90deg,rgba(252,176,87,.5) 33.33%,rgba(250,117,123,.5) 66.66%);

  svg {
    animation: logo .75s infinite alternate;
    width: 40rem !important;
  }
}

@keyframes logo {
  0% { opacity: .75; scale: .9; filter: brightness(3) }
  100% { opacity: 1; scale: 1; filter:brightness(1) }
}
</style>
