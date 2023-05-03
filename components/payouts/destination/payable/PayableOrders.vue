<script setup>
/* ----- DATA ----- */
const { fetchPayablePayoutsHandler } = usePayouts()
const { formatCommission, formatCurrency } = useFilters()
const payouts = usePayoutsStore()
</script>

<template>
  <section class="page">
    <DataTable :value="payouts.payableOrders?.items" responsiveLayout="scroll" showGridlines>
      <Column header="Source store" style="width: 32.5%;" class="store-name">
        <template #body="{ data: { store_name } }">
          {{ store_name }}
        </template>
      </Column>

      <Column header="Total commissions" style="width: 14.5%;" class="p-message-success tabular-nums text-right">
        <template #body="{ data: { total_commissions } }">
          <strong>{{ formatCurrency(total_commissions) }}</strong>
        </template>
      </Column>

      <Column header="Total sales" style="width: 15.5%;" class="tabular-nums text-right">
        <template #body="{ data: { total_sales } }">
          {{ formatCurrency(total_sales) }}
        </template>
      </Column>

      <Column header="Unpaid orders" style="width: 11%;" class="tabular-nums text-right">
        <template #body="{ data: { unpaid_orders } }">
          {{ unpaid_orders }}
        </template>
      </Column>

      <Column header="Payout amount" style="width: 11%;" class="tabular-nums text-right">
        <template #body="{ data: { payout_amount } }">
          <strong>{{ formatCurrency(payout_amount) }}</strong>
        </template>
      </Column>

      <Column header="Actions" style="width: 15%;" class="text-right">
        <template #body="{ data: { id } }">
          <Button
            @click="fetchPayablePayoutsHandler(id)"
            class="p-button-sm p-button-outlined"
            label="View details">
          </Button>
        </template>
      </Column>
    </DataTable>
  </section>
</template>
