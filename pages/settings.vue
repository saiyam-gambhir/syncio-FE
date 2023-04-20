<script setup>
import { useAuthStore } from '~/stores/auth'

/* ----- PAGE META ----- */
definePageMeta({
	middleware: 'auth',
	requiredAuth: true,
  layout: 'logged-in',
})

/* ----- DATA ----- */
const auth = useAuthStore()
</script>

<template>
  <section class="page">
    <PageHeader
      content="Manage your settings to make Syncio work better for you"
      title="Settings">
    </PageHeader>

    <section class="settings mt-4">
      <div class="surface-white">
        <div class="grid">
          <LazySetting
            description="Find specific information about your account with Syncio, including how to store type, your Syncio key and how to uninstall Syncio"
            href="/account-details"
            icon="pi-user"
            title="Account details">
          </LazySetting>

          <LazySetting
            description="Manage and upgrade your base plan and add ons"
            href="/plan-and-billings"
            icon="pi-file"
            title="Plan and billing">
          </LazySetting>

          <LazySetting
            description="Manage what attributes sync across your connected stores"
            :disabled="!auth.isProductModuleAvailable"
            href="/product-settings"
            icon="pi-list"
            title="Product settings">
          </LazySetting>

          <LazySetting
            description="Set commissions at store, vendor or product level"
            :disabled="!auth.isPayoutsModuleAvailable"
            href="/payouts-settings"
            icon="pi-dollar"
            title="Payouts settings">
          </LazySetting>

          <LazySetting
            description="Manage your Marketplace profile and settings"
            href="/marketplace-settings"
            icon="pi-shopping-bag"
            title="Marketplace">
          </LazySetting>

          <LazySetting
            description="Choose how you'd like to receive communications for your account"
            href="/notifications"
            icon="pi-bell"
            title="Notifications">
          </LazySetting>
        </div>
      </div>
    </section>
  </section>
</template>
