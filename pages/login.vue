<template>
  <section class="page">
    <div class="flex align-items-center justify-content-between">
      <h1 class="text-3xl text-center line-height-3 m-0">Login to your account</h1>
      <NuxtLink to="/woocommerce/create-account" class="btn-link hovered text-xl">Register</NuxtLink>
    </div>

    <div class="flex justify-content-between mt-5 login-platforms">
      <Button class="active-btn mr-2 w-6 font-bold border-1 surface-border surface-0 p-button-lg p-component text-900 inline-flex align-items-center justify-content-center">
        <img src="/images/wo-logo-sm.png" alt="shopify logo" class="mr-2" />
        <span class="ml-2">WooCommerce</span>
      </Button>
      <Button class="ml-2 w-6 font-bold border-1 surface-border surface-0 p-button-lg p-component text-600 inline-flex align-items-center justify-content-center">
        <img src="/images/shopify-logo-sm.png" alt="shopify logo" class="mr-2" />
        <span class="ml-2">Shopify</span>
      </Button>
    </div>

    <form class="mt-6" autocomplete="current-password">
      <div class="field">
        <InputText id="email" type="text" class="p-inputtext-lg mb-3 w-full" placeholder="Email address" autocomplete="email" />
      </div>

      <div class="field">
        <Password id="password" class="p-inputtext-lg mb-3 w-full" placeholder="Password" autocomplete="new-password" :feedback="false" toggleMask />
      </div>

      <div class="flex align-items-center mt-5 mb-4">
        <NuxtLink to="/forgot-password" class="btn-link hovered text-xl">Forgot password?</NuxtLink>
      </div>

      <Button label="Login" class="w-full p-button-lg" iconPos="right" @click="loginHandler"></Button>
      <Button label="Shopify Login" :loading="auth.loginForm.loading" icon="pi pi-user" class="w-full p-button-lg mt-4" iconPos="right" @click="shopifyLoginHandler"></Button>
    </form>
  </section>
</template>

<script setup>
/* ----- DATA ----- */
const auth = useAuthStore()

/* ----- METHODS ----- */
const loginHandler = () => {
  const { email, password } = auth.loginForm
  auth.login({ email, password })
}

const shopifyLoginHandler = async () => {
  await auth.shopifyLogin('shopify', 'test-destination-19.myshopify.com')
}

definePageMeta({
  layout: 'logged-out',
})
</script>
