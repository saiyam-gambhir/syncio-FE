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
		content="Push your orders with synced products to connected source stores"
		title="Orders">
	</PageHeader>
</template>
