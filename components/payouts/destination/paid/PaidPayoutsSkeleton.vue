<script setup>
/* ----- DATA ----- */
const { randomInteger } = useFilters()
</script>

<template>
  <DataTable :value="[{},{},{},{}]" responsiveLayout="scroll" showGridlines>
    <Column header="Date (AEST)" style="width: 12.5%;">
      <template #body>
        <Skeleton height="18px" width="60%" />
      </template>
    </Column>

    <Column header="Payout ID" style="width: 7.5%;">
      <template #body>
        <Skeleton height="18px" width="40%" />
      </template>
    </Column>

    <Column header="Source store" style="width: 25%;">
      <template #body>
        <Skeleton height="18px" :width="`${randomInteger()}%`" />
      </template>
    </Column>

    <Column header="Payment status" style="width: 12.5%;">
      <template #body>
        <Skeleton height="25.5px" width="40%" borderRadius="20px" />
      </template>
    </Column>

    <Column header="Amount" style="width: 12.5%;">
      <template #body>
        <Skeleton height="18px" width="40%" />
      </template>
    </Column>

    <Column header="Actions" style="width: 30%;" class="text-right">
      <template #body>
        <Skeleton height="31.41px" width="120.33px" />
      </template>
    </Column>
  </DataTable>
</template>
