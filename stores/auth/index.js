import deepmerge from 'deepmerge'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      currency: 'USD',
      forgotPasswordForm: { email: '', emailNotFound: false, emailSent: false, loading: false, submitted: false },
      isAuthenticated: false,
      isBatteryLowDialogVisible: false,
      isNetworkDialogVisible: false,
      isUpgradeDialogRequested: false,
      locales: 'en-US',
      loginForm: { email: '', loading: false, password: '', submitted: false },
      plan: null,
      plans: [],
      registrationForm: { email: '', loading: false, name: '', password: '', passwordConfirmation: '', submitted: false },
      resetPasswordForm: { email: '', loading: false, password: '', passwordConfirmation: '', submitted: false, token: '' },
      timeZone: 'America/New_York',
      upgradeDialogType: '',
      user: null,
    }
  },

  getters: {
    productsSynced({ plan = {} }) {
      return Number.parseInt(plan?.product_mappers_count, 10) || 0
    },

    productsSyncedLimit({ plan = {} }) {
      return Number.parseInt(plan?.syncio_plan?.sync_product_limit, 10) || 0
    },

    userId({ user = {} }) {
      return user?.id
    },

    isOrderModuleAvailable({ plan = { active_addons: [] } }) {
      return plan.active_addons.some(addon => addon.name === 'Orders')
    },

    isPayoutsModuleAvailable({ plan = { active_addons: [] } }) {
      return plan.active_addons.some(addon => addon.name === 'Payouts')
    },

    isProductModuleAvailable({ plan = { active_addons: [] } }) {
      return plan.active_addons.some(addon => addon.name === 'Product Settings')
    },

    showOrdersUpgradeDialog({ upgradeDialogType = '' }) {
      return upgradeDialogType === 'orders'
    },

    showPayoutsUpgradeDialog({ upgradeDialogType = '' }) {
      return upgradeDialogType === 'payouts'
    },

    showProductSettingsUpgradeDialog({ upgradeDialogType = '' }) {
      return upgradeDialogType === 'product-settings'
    },
  },

  actions: deepmerge.all([
    fetchCurrentPlan,
    fetchPlans,
    fetchUser,
    forgotPassword,
    login,
    shopifyLogin,
  ]),
})
