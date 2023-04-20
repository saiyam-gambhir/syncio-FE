import { defineStore } from 'pinia'
import deepmerge from 'deepmerge'

/* ----- ACTIONS ----- */
import { fetchPayableOrders } from '~/stores/payouts/actions/fetchPayableOrders'
import { fetchPayablePayouts } from '~/stores/payouts/actions/fetchPayablePayouts'

export const usePayoutsStore = defineStore('payouts', {
  state: () => {
    return {
      activeTabIndex: 0,
      dashboardStats: null,
      limiter: 10,
      payableOrders: {
        items: [],
        pagination: {},
      },
      payablePayouts: {
        items: [],
        pagination: {}
      }
    }
  },

  actions: deepmerge.all([
    fetchPayableOrders,
    fetchPayablePayouts,
  ]),
})
