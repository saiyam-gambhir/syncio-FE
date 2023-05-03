export const setStatusFilter = {
  setStatusFilter(status) {
    this.queries[`filters[status]`] = status
  }
}
