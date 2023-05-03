export const updatePayout = {
  async updatePayout(payload) {
    try {
      const { data: { value } } = await useMyPost('stores/payout/update-payout-status', {
        body: { ...payload }
      })
      const { message, success } = value
      if(success) return message
    } catch (error) {
      throw new Error(error)
    }
  }
}
