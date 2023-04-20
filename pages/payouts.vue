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
const changeTabHandler = (tabIndex) => {
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
			<ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
				<li class="pr-3">
					<a @click="changeTabHandler(0)" class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': payouts.activeTabIndex === 0, 'text-700 border-transparent': payouts.activeTabIndex !== 0 }">
						<span class="font-semibold capitalize">Payable Orders</span>
					</a>
				</li>
				<li class="flex align-items-center">
					<div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
				</li>
				<li class="px-3">
					<a @click="changeTabHandler(1)" class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': payouts.activeTabIndex === 1, 'text-700 border-transparent': payouts.activeTabIndex !== 1 }">
						<span class="font-semibold capitalize">Unpaid</span>
					</a>
				</li>
				<li class="flex align-items-center">
					<div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
				</li>
				<li class="pl-3">
					<a @click="changeTabHandler(2)" class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': payouts.activeTabIndex === 2, 'text-700 border-transparent': payouts.activeTabIndex !== 2 }">
						<span class="font-semibold capitalize">Paid</span>
					</a>
				</li>
			</ul>
		</section>

		<section v-if="isSourceStore" class="payouts mt-4">
			<ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
				<li class="pr-3">
					<a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': payouts.activeTabIndex === 0, 'text-700 border-transparent': payouts.activeTabIndex !== 0 }">
						<span class="font-semibold capitalize">Payable Orders</span>
					</a>
				</li>
				<li class="flex align-items-center">
					<div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
				</li>
				<li class="px-3">
					<a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': payouts.activeTabIndex === 1, 'text-700 border-transparent': payouts.activeTabIndex !== 1 }">
						<span class="font-semibold capitalize">Unpaid</span>
					</a>
				</li>
				<li class="flex align-items-center">
					<div style="width:1px; height: 50%" class="border-right-1 surface-border"></div>
				</li>
				<li class="pl-3">
					<a class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150" :class="{ 'border-blue-500 text-blue-500 hover:border-blue-500': payouts.activeTabIndex === 2, 'text-700 border-transparent': payouts.activeTabIndex !== 2 }">
						<span class="font-semibold capitalize">Paid</span>
					</a>
				</li>
			</ul>
		</section>

		<template v-if="isDestinationStore">
			<div v-if="payouts.activeTabIndex === 0">
				<LazyPayableOrders />
			</div>
			<div v-if="payouts.activeTabIndex === 1">
				<LazyUnpaidPayouts />
			</div>
			<div v-if="payouts.activeTabIndex === 2">
			</div>
		</template>

		<template v-else-if="isSourceStore">
			<div v-if="payouts.activeTabIndex === 0">
			</div>
			<div v-if="payouts.activeTabIndex === 1">
			</div>
		</template>
	</section>
</template>
