<script setup>
import { useFilters } from '~/composables/filters'
import { usePayouts } from '~/composables/payouts'

/* ----- DATA ----- */
const { formatCurrency } = useFilters()
const { payouts } = usePayouts()
const statusOptions = {
  paid: 'success',
  payout_created: 'warning',
  unpaid: 'warning',
}

/* ----- MOUNTED ----- */
onMounted(async () => {
  //await fetchUnpaidPayoutsHandler()
})

/* ----- METHODS ----- */
const getStatus = status => {
  return statusOptions[status]
}

const getStatusText = status => {
  if(status === 'payout_confirmed') return 'Received'
  return status
}
</script>

<template>
  <section class="page">
    <DataTable :value="payouts.paidPayouts?.items" responsiveLayout="scroll" showGridlines>
      <Column header="Date (AEST)" style="width: 12.5%;">
        <template #body="{ data: { date } }">
          {{ date }}
        </template>
      </Column>

      <Column header="Payout ID" style="width: 7.5%;">
        <template #body="{ data: { payout_id } }">
          {{ payout_id }}
        </template>
      </Column>

      <Column header="Source store" style="width: 25%;" class="store-name">
        <template #body="{ data: { store_name } }">
          {{ store_name }}
        </template>
      </Column>

      <Column header="Payment status" style="width: 12.5%;">
        <template #body="{ data: { status } }">
          <Tag :severity="getStatus(status)" rounded>{{ getStatusText(status) }}</Tag>
        </template>
      </Column>

      <Column header="Amount" style="width: 12.5%;" class="tabular-nums text-right">
        <template #body="{ data: { payout_total } }">
          {{ formatCurrency(payout_total) }}
        </template>
      </Column>

      <Column header="Actions" style="width: 30%;" class="text-right">
        <template #body="{ data: { id } }">
          <Button
            class="p-button-sm p-button-success mr-3"
            icon="pi pi-check"
            iconPos="left"
            label="Mark as Paid">
          </Button>
          <Button
            label="Manage Payout"
            class="p-button-sm p-button-outlined"
            @click="fetchPayablePayoutsHandler(id)">
          </Button>
        </template>
      </Column>
    </DataTable>
  </section>
</template>
