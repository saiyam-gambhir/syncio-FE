import { usePayoutsStore } from '~/stores/payouts'
import { useConnectionsStore } from '~/stores/connections'

export function usePayouts() {
  const { storeId } = useConnectionsStore()
  const payouts = usePayoutsStore()
  const { showToast } = useToasts()

  const fetchPayableOrders = async () => {
    await payouts.fetchPayableOrders(storeId)
  }

  const fetchPayablePayoutsHandler = async (targetStoreId) => {
    await payouts.fetchPayablePayouts({ targetStoreId })
  }

  return {
    fetchPayableOrders,
    fetchPayablePayoutsHandler,
    payouts,
  }
}
