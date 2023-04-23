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
		content="Upgrade or downgrade anytime. Contact us for help"
		title="Manage Your Plan">
	</PageHeader>
</template>
