<script setup>
/* ----- PAGE META ----- */
definePageMeta({
	middleware: 'auth',
	requiredAuth: true,
  layout: 'logged-in',
})
</script>

<template>
	<PageHeader
		content="Manage payouts for fulfilled orders"
		title="Manage Payouts">
	</PageHeader>
</template>
