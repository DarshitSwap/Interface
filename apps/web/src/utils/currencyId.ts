import { Currency } from 'darshitswap-sdk-core'

export function currencyId(currency?: Currency): string {
  if (currency?.isNative) return 'ETH'
  if (currency?.isToken) return currency.address
  throw new Error('invalid currency')
}
