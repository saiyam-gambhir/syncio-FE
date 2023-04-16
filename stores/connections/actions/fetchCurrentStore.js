export const fetchCurrentStore = {
  async fetchCurrentStore() {
    const { data: { value } } = await useMyFetch('stores')
    const { stores, success } = value
    if(success) this.currentStore = await stores[0]
    Boolean(+this.currentStore.is_multi_locations) ? this.isMultilocationEnabled = 'On' : this.isMultilocationEnabled = 'Off'
  }
}
