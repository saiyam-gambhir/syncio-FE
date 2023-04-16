export const fetchCurrentPlan = {
  async fetchCurrentPlan(userId) {
    const { data: { value } } = await useMyFetch(`user/${userId}/current-plan`)
    const { plan, success } = value
    if(success) this.plan = await plan
  }
}
