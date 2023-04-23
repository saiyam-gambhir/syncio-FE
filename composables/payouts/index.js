export function usePayouts() {
  const { showToast } = useToasts()
  const { storeId } = useConnectionsStore()
  const payouts = usePayoutsStore()

  const fetchPayableOrdersHandler = async () => {
    await payouts.fetchPayableOrders(storeId)
  }

  const fetchPayablePayoutsHandler = async targetStoreId => {
    await payouts.fetchPayablePayouts({ targetStoreId })
  }

  const fetchUnpaidPayoutsHandler = async () => {
    await payouts.fetchUnpaidPayouts()
  }

  const fetchPaidPayoutsHandler = async () => {
    await payouts.fetchPaidPayouts()
  }

  return {
    fetchPaidPayoutsHandler,
    fetchPayableOrdersHandler,
    fetchPayablePayoutsHandler,
    fetchUnpaidPayoutsHandler,
    payouts,
  }
}
