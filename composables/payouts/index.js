export function usePayouts() {
  const { showToast } = useToasts()
  const { storeId } = useConnectionsStore()
  const {
    fetchPaidPayouts,
    fetchPayableOrders,
    fetchPayablePayouts,
    fetchUnpaidPayouts,
    hidePayableOrders,
    setActiveTab,
    setStatusFilter,
    updatePayout,
  } = usePayoutsStore()

  const STATUSES = { received: 'paid_received', unpaid: 'unpaid' }

  const fetchPayableOrdersHandler = async () => {
    await fetchPayableOrders(storeId)
  }

  const fetchPayablePayoutsHandler = async targetStoreId => {
    await fetchPayablePayouts({ targetStoreId })
    hidePayableOrders()
  }

  const fetchUnpaidPayoutsHandler = async () => {
    setStatusFilter(STATUSES.unpaid)
    await fetchUnpaidPayouts()
  }

  const fetchPaidPayoutsHandler = async () => {
    setStatusFilter(STATUSES.received)
    await fetchPaidPayouts()
  }

  const updatePayoutHandler = async ({ payout_id, status, activeTabIndex }) => {
    const payload = { current_store_id: storeId, payout_id, status }
    const message = await updatePayout(payload)
    setActiveTab(activeTabIndex)
    showToast({ message })
  }

  return {
    fetchPaidPayoutsHandler,
    fetchPayableOrdersHandler,
    fetchPayablePayoutsHandler,
    fetchUnpaidPayoutsHandler,
    updatePayoutHandler,
  }
}
