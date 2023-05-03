<script setup>
/* ----- PAGE META ----- */
definePageMeta({
	layout: 'logged-in',
	middleware: 'auth',
	requiredAuth: true,
})

/*----- DATA----- */
const { activeTabIndex, isViewingPayableOrders, setStatusFilter, setActiveTab } = usePayoutsStore()
const { fetchPayableOrdersHandler } = usePayouts()
const { isDestinationStore, isSourceStore } = useConnectionsStore()
const { isPayoutsModuleAvailable } = useAuthStore()

/*----- MOUNTED----- */
onMounted(async () => {
	if(!isPayoutsModuleAvailable) {
		navigateTo({
			path: '/',
			query: { showUpgrade: 'true', type: 'payouts' }
		})
		return
  }

  setStatusFilter('unpaid')
  await fetchPayableOrdersHandler()
})

/* ----- METHODS ----- */
const tabChangedHandler = (index) => {
  setActiveTab(index)
}
</script>

<template>
	<section class="page">
		<PageHeader
			content="Manage payouts for fulfilled orders"
			title="Payouts">
		</PageHeader>

		<!-- Destination store payouts -->
		<section v-if="isDestinationStore" class="payouts mt-4">
			<LazyDestinationTabs
				:activeTabIndex="activeTabIndex"
				@tabChanged="tabChangedHandler()">
			</LazyDestinationTabs>

			<div v-if="activeTabIndex === 0">
				<LazyPayableOrders v-if="isViewingPayableOrders" />
        <LazyPayablePayouts v-else />
			</div>
			<div v-else-if="activeTabIndex === 1">
				<LazyUnpaidPayouts />
			</div>
			<div v-else-if="activeTabIndex === 2">
				<LazyPaidPayouts />
			</div>
		</section>

    <!-- Source store payouts -->
		<section v-if="isSourceStore" class="payouts mt-4">
			<LazySourceTabs
				:activeTabIndex="activeTabIndex"
				@tabChanged="tabChangedHandler">
			</LazySourceTabs>

			<div v-if="activeTabIndex === 0"></div>
			<div v-else-if="activeTabIndex === 1"></div>
		</section>
	</section>
</template>
