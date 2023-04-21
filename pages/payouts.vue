<script setup>
import { useAuthStore } from '~/stores/auth'
import { useConnectionsStore } from '~/stores/connections'
import { usePayouts } from '~/composables/payouts'
import { useRouter } from 'vue-router'

/* ----- PAGE META ----- */
definePageMeta({
	middleware: 'auth',
	requiredAuth: true,
  layout: 'logged-in',
})

/*----- DATA----- */
const { fetchPayableOrdersHandler, payouts } = usePayouts()
const { isDestinationStore, isSourceStore } = useConnectionsStore()
const auth = useAuthStore()
const router = useRouter()

/*----- MOUNTED----- */
onMounted(async () => {
	if(!auth.isOrderModuleAvailable) {
    router.push({ path: '/', query: { showUpgrade: 'true', type: 'payouts' }})
    return
  }
  await fetchPayableOrdersHandler()
})

/* ----- METHODS ----- */
const tabChangedHandler = (tabIndex) => {
	payouts.$patch({
		activeTabIndex: tabIndex
	})
}
</script>

<template>
	<section class="page">
		<PageHeader
			content="Manage payouts for fulfilled orders"
			title="Payouts">
		</PageHeader>

		<section v-if="isDestinationStore" class="payouts mt-4">
			<LazyDestinationTabs
				:activeTabIndex="payouts.activeTabIndex"
				@tabChanged="tabChangedHandler">
			</LazyDestinationTabs>

			<div v-if="payouts.activeTabIndex === 0">
				<LazyPayableOrders />
			</div>
			<div v-if="payouts.activeTabIndex === 1">
				<LazyUnpaidPayouts />
			</div>
			<div v-if="payouts.activeTabIndex === 2">
				<LazyPaidPayouts />
			</div>
		</section>

		<section v-if="isSourceStore" class="payouts mt-4">
			<SourceTabs
				:activeTabIndex="payouts.activeTabIndex"
				@tabChanged="tabChangedHandler">
			</SourceTabs>

			<div v-if="payouts.activeTabIndex === 0"></div>
			<div v-if="payouts.activeTabIndex === 1"></div>
		</section>
	</section>
</template>
