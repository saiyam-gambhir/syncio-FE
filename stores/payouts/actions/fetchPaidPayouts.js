import { useConnectionsStore } from '~/stores/connections'

export const fetchPaidPayouts = {
  async fetchPaidPayouts(page = 1) {
    try {
      const { storeId } = useConnectionsStore()
      const { data: { value } } = await useMyFetch(`stores/payout/all-payout-data/${storeId}`, {
        params: {
          limiter: this.limiter,
          page
        }
      })

      const { payouts, success } = value
      if(success) this.paidPayouts.items = payouts
    } catch (error) {
      throw new Error(error)
    }
  }
}
