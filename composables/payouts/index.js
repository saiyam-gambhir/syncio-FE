export function usePayouts() {
  const { showToast } = useToasts()
  const { storeId } = useConnectionsStore()
  const payouts = usePayoutsStore()
  const {
    fetchPaidPayouts,
    fetchPayableOrders,
    fetchPayablePayouts,
    fetchUnpaidPayouts,
    updatePayout,
  } = usePayoutsStore()

  const fetchPayableOrdersHandler = async () => {
    await fetchPayableOrders(storeId)
  }

  const fetchPayablePayoutsHandler = async targetStoreId => {
    await fetchPayablePayouts({ targetStoreId })
  }

  const fetchUnpaidPayoutsHandler = async () => {
    payouts.$patch({
      queries: { 'filters[status]': 'unpaid' }
    })
    await fetchUnpaidPayouts()
  }

  const fetchPaidPayoutsHandler = async () => {
    payouts.$patch({
      queries: { 'filters[status]': 'paid_received' }
    })
    await fetchPaidPayouts()
  }

  const updatePayoutHandler = async ({ payout_id, status, activeTabIndex }) => {
    const payload = { current_store_id: storeId, payout_id, status }
    const message = await updatePayout(payload)
    payouts.$patch({ activeTabIndex })
    showToast({ message })
  }

  return {
    fetchPaidPayoutsHandler,
    fetchPayableOrdersHandler,
    fetchPayablePayoutsHandler,
    fetchUnpaidPayoutsHandler,
    payouts,
    updatePayoutHandler,
  }
}
