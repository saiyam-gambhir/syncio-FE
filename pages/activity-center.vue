<template>
	<PageHeader
		content="See what's happening with your syncs, find and fix issues"
		title="Activity Center">
	</PageHeader>
</template>

<script setup>
/* ----- PAGE META ----- */
definePageMeta({
	middleware: 'auth',
	requiredAuth: true,
  layout: 'logged-in',
})
</script>
