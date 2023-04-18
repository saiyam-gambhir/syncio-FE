export const fetchUser = {
  async fetchUser(userID) {
    const { data: { value }, pending } = await useMyFetch((`user/${userID}`))

    if(!pending.value) {
      if(value.success) this.user = await value.user
    }
  }
}
