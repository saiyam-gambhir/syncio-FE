<script setup>
import { useFilters } from '~/composables/filters'
import { usePayouts } from '~/composables/payouts'

/* ===== DATA ===== */
const { formatCommission, formatCurrency } = useFilters()
const { payouts, fetchPayablePayoutsHandler } = usePayouts()
</script>

<template>
  <section class="page">
    <DataTable :value="payouts.payableOrders?.items" responsiveLayout="scroll" showGridlines>
      <Column header="Source store" style="width: 32.5%;" class="store-name">
        <template #body="{ data: { store_name } }">
          {{ store_name }}
        </template>
      </Column>

      <Column header="Total commissions" style="width: 14.5%;" class="tabular-nums text-right p-message-success">
        <template #body="{ data: { commission_type, commission_value } }">
          {{ formatCommission(commission_type, commission_value) }}
        </template>
      </Column>

      <Column header="Total sales" style="width: 15.5%;" class="tabular-nums text-right">
        <template #body="{ data: { total_sales } }">
          {{ formatCurrency(total_sales) }}
        </template>
      </Column>

      <Column header="Unpaid orders" style="width: 13.5%;" class="tabular-nums text-right">
        <template #body="{ data: { unpaid_orders } }">
          {{ unpaid_orders }}
        </template>
      </Column>

      <Column header="Payout amount" style="width: 13.5%;" class="tabular-nums text-right">
        <template #body="{ data: { payout_amount } }">
          <strong>{{ formatCurrency(payout_amount) }}</strong>
        </template>
      </Column>

      <Column header="Actions" style="width: 10%;" class="text-right">
        <template #body="{ data: { id } }">
          <Button
            icon="pi pi-arrow-right"
            class="p-button-rounded p-button-outlined p-button-info"
            v-tooltip.top="'View details'"
            @click="fetchPayablePayoutsHandler(id)">
          </Button>
        </template>
      </Column>
    </DataTable>
  </section>
</template>
