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
		content="Sync and manage your inventory"
		title="Products">
	</PageHeader>
</template>
