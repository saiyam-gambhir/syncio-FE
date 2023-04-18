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
		content="Manage your connected stores"
		title="Stores">
	</PageHeader>
</template>
