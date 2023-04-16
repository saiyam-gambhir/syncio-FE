<script setup>
import { onMounted } from 'vue'
import { useUpgradeDialog } from '@/composables/upgradeDialog'
import { useUrlSearchParams } from '@vueuse/core'

/* ===== DATA ===== */
const { showUpgradeDialogHandler } = useUpgradeDialog()
const { showUpgrade, type } = useUrlSearchParams()

/* ===== MOUNTED ===== */
onMounted(() => {
	if(Boolean(showUpgrade)) {
  	showUpgradeDialogHandler(type)
  }
})

definePageMeta({
  layout: 'logged-in'
})
</script>

<template>
	<PageHeader
		content="Get the most out of Syncio so you can focus on growing your business"
		title="Welcome">
	</PageHeader>

	<article class="grid mt-4">
    <DashboardLeft />
    <DashboardRight />
	</article>
</template>
