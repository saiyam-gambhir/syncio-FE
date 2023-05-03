import deepmerge from 'deepmerge'

export const usePayoutsStore = defineStore('payouts', {
  state: () => {
    return {
      activeTabIndex: 0,
      dashboardStats: null,
      isViewingPayableOrders: true,
      limiter: 10,
      completePayouts: { items: [], pagination: {} },
      openPayouts: { items: [], pagination: {} },
      paidPayouts: { items: [], loading: true, pagination: {} },
      payableOrders: { items: [], pagination: {} },
      payablePayouts: { items: [], pagination: {} },
      unPaidPayouts: { items: [], loading: true, pagination: {} },
      queries: {
        'filters[status]': '',
      }
    }
  },

  actions: deepmerge.all([
    // API
    fetchPaidPayouts,
    fetchPayableOrders,
    fetchPayablePayouts,
    fetchUnpaidPayouts,
    updatePayout,

    // UI
    hidePayableOrders,
    setActiveTab,
    setStatusFilter,
  ]),
})
