import { defineStore } from 'pinia'
import deepmerge from 'deepmerge'

/* ----- ACTIONS ----- */
import { fetchPayableOrders } from '~/stores/payouts/actions/fetchPayableOrders'
import { fetchPayablePayouts } from '~/stores/payouts/actions/fetchPayablePayouts'
import { fetchUnpaidPayouts } from '~/stores/payouts/actions/fetchUnpaidPayouts'

export const usePayoutsStore = defineStore('payouts', {
  state: () => {
    return {
      activeTabIndex: 0,
      dashboardStats: null,
      limiter: 10,
      completePayouts: { items: [], pagination: {} },
      openPayouts: { items: [], pagination: {} },
      paidPayouts: { items: [], pagination: {} },
      payableOrders: { items: [], pagination: {} },
      payablePayouts: { items: [], pagination: {} },
      unPaidPayouts: { items: [], pagination: {} },
    }
  },

  actions: deepmerge.all([
    fetchPayableOrders,
    fetchPayablePayouts,
    fetchUnpaidPayouts,
  ]),

  persist: {
    storage: persistedState.sessionStorage,
  },
})
