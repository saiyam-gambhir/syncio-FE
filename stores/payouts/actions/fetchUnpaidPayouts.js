export const fetchUnpaidPayouts = {
  async fetchUnpaidPayouts(page = 1) {
    try {
      const { storeId } = useConnectionsStore()
      const { data: { value }, pending } = await useMyFetch(`stores/payout/all-payout-data/${storeId}?${new URLSearchParams(this.queries).toString()}`, {
        params: {
          limiter: this.limiter,
          page
        }
      })

      const { payouts, success } = value
      if(success && payouts?.length > 0) {
        this.unPaidPayouts.items = payouts
      } else {
        this.unPaidPayouts.items = []
      }
      this.unPaidPayouts.loading = pending
    } catch (error) {
      throw new Error(error)
    }
  }
}
