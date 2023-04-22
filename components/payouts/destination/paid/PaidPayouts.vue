<script setup>
import { useFilters } from '~/composables/filters'
import { usePayouts } from '~/composables/payouts'

/* ----- DATA ----- */
const { formatCurrency } = useFilters()
const { fetchPaidPayoutsHandler, payouts } = usePayouts()
const statusOptions = {
  paid: 'success',
  payout_created: 'warning',
  unpaid: 'warning',
}
const selectionMode = ref('multiple')
const cars = ref([
  { vin: 'a1653d4d', year: 1998, brand: 'VW', color: 'White' },
  { vin: 'ddeb9b10', year: 1985, brand: 'Toyota', color: 'Green' },
  { vin: 'd8ebe413', year: 1982, brand: 'Renault', color: 'Blue' },
  { vin: 'aab227b7', year: 1995, brand: 'BMW', color: 'Black' },
  { vin: '631f7412', year: 2000, brand: 'Mercedes', color: 'White' },
  { vin: '7d2d22b0', year: 2013, brand: 'Jaguar', color: 'Silver' },
  { vin: 'de0d8870', year: 1990, brand: 'Ford', color: 'Black' },
  { vin: '6c2f2dce', year: 1992, brand: 'VW', color: 'Indigo' },
])

/* ----- MOUNTED ----- */
onMounted(async () => {
  await fetchPaidPayoutsHandler()
})

/* ----- METHODS ----- */
const getStatus = status => {
  return statusOptions[status]
}

const getStatusText = status => {
  if(status === 'payment_confirmed') return 'Received'
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
        <template #body="{}">
          <Button
            label="Manage Payout"
            class="p-button-sm p-button-outlined">
          </Button>
        </template>
      </Column>
    </DataTable>
  </section>
</template>
