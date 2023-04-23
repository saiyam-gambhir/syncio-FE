<script setup>
/* ----- PAGE META ----- */
definePageMeta({
	middleware: 'auth',
	requiredAuth: true,
  layout: 'logged-in',
})
</script>

<template>
	<section class="page">
		<PageHeader
			content="Get the most out of Syncio so you can focus on growing your business"
			title="Welcome">
		</PageHeader>

		<article class="grid mt-4">
			<DashboardLeft />
			<DashboardRight />
		</article>
	</section>
</template>
