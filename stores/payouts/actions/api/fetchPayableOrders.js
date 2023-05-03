export const fetchPayableOrders = {
  async fetchPayableOrders(storeId) {
    try {
      const { data: { value } } = await useMyFetch(`stores/payout/all-store-data/${storeId}?${new URLSearchParams(this.queries).toString()}`)
      const { payableOrders, success } = value
      if(success) {
        this.payableOrders.items = Object.keys(payableOrders).map(key => {
          return { ...payableOrders[key], id: +key }
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
