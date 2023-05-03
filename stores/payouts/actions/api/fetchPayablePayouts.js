export const fetchPayablePayouts = {
  async fetchPayablePayouts({ targetStoreId }, page = 1) {
    try {
      const { storeId } = useConnectionsStore()
      const { data: { value } } = await useMyFetch(`stores/payout/payout-orders/${storeId}/${targetStoreId}`, {
        params: {
          limiter: this.limiter,
          page
        }
      })

      const { payoutOrders, success } = value
      if(success) {
        this.payablePayouts.items = Object.keys(payoutOrders).map((key) => {
          return { ...payoutOrders[key] }
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
