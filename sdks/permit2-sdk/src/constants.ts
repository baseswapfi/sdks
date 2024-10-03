import { ChainId } from '@baseswapfi/sdk-core'
import { BigNumber } from '@ethersproject/bignumber'

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3' // Default if Uni is already deployed there

export const PERMIT2_ADDRESSES: { [chainId in ChainId]?: string } = {
  [ChainId.BASE]: PERMIT2_ADDRESS,
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.MODE]: '0x94265f90728993A3f7089049045ceef566A36bB9',
  [ChainId.MODE_TESTNET]: '',
  [ChainId.OPTIMISM]: PERMIT2_ADDRESS
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
