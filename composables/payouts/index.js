import { usePayoutsStore } from '~/stores/payouts'
import { useConnectionsStore } from '~/stores/connections'

export function usePayouts() {
  const { storeId } = useConnectionsStore()
  const payouts = usePayoutsStore()
  const { showToast } = useToasts()

  const fetchPayableOrdersHandler = async () => {
    await payouts.fetchPayableOrders(storeId)
  }

  const fetchPayablePayoutsHandler = async targetStoreId => {
    await payouts.fetchPayablePayouts({ targetStoreId })
  }

  const fetchUnpaidPayoutsHandler = async () => {
    await payouts.fetchUnpaidPayouts()
  }

  return {
    fetchPayableOrdersHandler,
    fetchPayablePayoutsHandler,
    fetchUnpaidPayoutsHandler,
    payouts,
  }
}
