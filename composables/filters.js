import { DateTime } from 'luxon'

export function useFilters() {
  const auth = useAuthStore()

  const copyToClipBoard = (val = '') => {
    return navigator.clipboard.writeText(val)
  }

  const formatCommission = (type = 'percentage', val = 0) => {
    if(type === 'percentage') {
      return formatDecimal(val) + '%'
    } else if(type === 'flat_rate') {
      return formatCurrency(val)
    }
  }

  const formatCurrency = (val = 0, currency = auth.currency, locales = auth.locales) => {
    return Intl.NumberFormat(locales, {
      currency,
      style: 'currency'
    }).format(val)
  }

  const formatDate = (val, timeZone = auth.timeZone) => {
    if(!val) return 'Invalid Date'
    const date = DateTime.fromISO(val).setZone(timeZone)
    return {
      date: `${date.toFormat('dd MMM, yyyy')}`,
      time: `${date.toFormat('hh:mm a')}`
    }
  }

  const formatDecimal = (val = 0) => {
    if(typeof(val) === 'number') return val.toFixed(2)
  }

  const randomInteger = (min = 25, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
    copyToClipBoard,
    formatCommission,
    formatCurrency,
    formatDate,
    formatDecimal,
    randomInteger,
  }
}
