import { defineStore } from 'pinia'
import deepmerge from 'deepmerge'

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
    fetchPaidPayouts,
    fetchPayableOrders,
    fetchPayablePayouts,
    fetchUnpaidPayouts,
  ]),
})
