<script setup>
/* ----- DATA ----- */
const { fetchUnpaidPayoutsHandler, updatePayoutHandler, payouts } = usePayouts()
const { formatCurrency } = useFilters()
const statusOptions = {
  paid: 'success',
  payout_created: 'warning',
  unpaid: 'warning',
}

/* ----- MOUNTED ----- */
onMounted(async () => {
  await fetchUnpaidPayoutsHandler()
})

/* ----- METHODS ----- */
const getStatus = status => {
  return statusOptions[status]
}

const getStatusText = status => {
  if(status === 'payout_created') return 'Unpaid'
  return status
}
</script>

<template>
  <section class="page">
    <UnpaidPayoutsSkeleton v-if="payouts.unPaidPayouts.loading" />
    <DataTable v-else :value="payouts.unPaidPayouts.items" dataKey="payout_id" responsiveLayout="scroll" showGridlines>

      <template #empty v-if="!payouts.unPaidPayouts.loading">
        <h3>You have no Unpaid payouts to show at this time</h3>
        <AppLink link="https://help.syncio.co/en/articles/6398970-payouts-add-on-destination-store-side" label="Learn more about payouts" />
      </template>

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
        <template #body="{ data: { payout_id } }">
          <Button
            @click="updatePayoutHandler({ payout_id: payout_id, status: 'paid', activeTabIndex: 2 })"
            class="p-button-sm p-button-success mr-3"
            icon="pi pi-check"
            iconPos="left"
            label="Mark as Paid">
          </Button>
          <Button
            label="Manage Payout"
            class="p-button-sm p-button-outlined">
          </Button>
        </template>
      </Column>

    </DataTable>
  </section>
</template>
