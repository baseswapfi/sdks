import { ChainId, Percent } from '@baseswapfi/sdk-core'
import JSBI from 'jsbi'

export const V2_FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.BASE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  [ChainId.BASE_GOERLI]: '0x14db9CFcaE4E7F6971034F0E8e4D9Fc3e54CDafE',
  [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
  [ChainId.MODE]: '0xfb926356baf861c93c3557d7327dbe8734a71891',
  [ChainId.MODE_TESTNET]: '0xa26655bab784c9bd9daadaaff2a05a93484bf9c7',
  [ChainId.OPTIMISM]: '0x22505cb4d5d10b2c848a9d75c57ea72a66066d8c'
}

// Stock Uni hash
// export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f';

/**
 * @deprecated use INIT_CODE_HASHES instead
 */
export const INIT_CODE_HASH = '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b'

export const INIT_CODE_HASHES: { [chainId: number]: string } = {
  [ChainId.BASE]: '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b',
  [ChainId.BASE_GOERLI]: '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b',
  [ChainId.SCROLL]: '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b',
  [ChainId.MODE]: '0x337ec3ca78ed47c450332dd308033d9900832b31b7539f3befcbc556bff3a4a8',
  [ChainId.MODE_TESTNET]: '0x7c8fef18ebd49f340baabc0813d53d037c9eba0e0dfa80280b8b50c5a749ad9c',
  [ChainId.OPTIMISM]: '0x6e07608342d32f0f0dd02578dbad53c670910abf33b1835b20deef24001435e8'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)

export const CHAIN_LP_TOKEN_INFO: {
  [chainId: number]: { name: string; symbol: string }
} = {
  [ChainId.BASE]: {
    name: `Baseswap LP's`,
    symbol: 'BSWAP-LP'
  },
  [ChainId.MODE]: {
    name: `SwapMode LPs`,
    symbol: 'SMD-LP'
  },
  [ChainId.MODE_TESTNET]: {
    name: `SwapMode LPs`,
    symbol: 'SMD-LP'
  },
  [ChainId.OPTIMISM]: {
    name: `Superswap LPs`,
    symbol: 'SPS-LP'
  }
}
