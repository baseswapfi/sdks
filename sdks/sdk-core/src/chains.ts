export enum ChainId {
  ARBITRUM = 42161,
  BASE_GOERLI = 84531,
  BASE = 8453,
  FRAX_TESTNET = 2522,
  MODE = 34443,
  MODE_TESTNET = 919,
  OPTIMISM = 10,
  SCROLL = 534352,
  SCROLL_SEPOLIA = 534351,
  SONIC_TESTNET = 64165,
  WORLDCHAIN = 480
}

export const SUPPORTED_CHAINS = [
  ChainId.BASE,
  ChainId.BASE_GOERLI,
  ChainId.ARBITRUM,
  ChainId.MODE,
  ChainId.OPTIMISM
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export const SUPPORTED_TESTNET_CHAINS = [ChainId.BASE_GOERLI, ChainId.MODE_TESTNET, ChainId.SONIC_TESTNET] as const
export type SupportedTestnetChainsType = typeof SUPPORTED_TESTNET_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  S = 'S'
}
