export const fetchPayableOrders = {
  async fetchPayableOrders(storeId) {
    try {
      const { data: { value } } = await useMyFetch(`stores/payout/all-store-data/${storeId}`)
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
