import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  mixedRouteQuoterV1Address?: string
  mixedRouteQuoterV2Address?: string
}

const DEFAULT_NETWORKS = [ChainId.BASE, ChainId.BASE_GOERLI]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const PROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xd5046B976188EB40f6DE40fB527F89c05b323385',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '',
  [ChainId.MODE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  [ChainId.MODE_TESTNET]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
}

export const XPROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xE4750593d1fC8E74b31549212899A72162f315Fa', // xBSX
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '',
  [ChainId.MODE]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45', // xSMD
  [ChainId.MODE_TESTNET]: '0x2ee99Be3c520B7Bd64f51641c3e7Ef28950E03B7',
}

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
  [ChainId.MODE]: '0xfb926356baf861c93c3557d7327dbe8734a71891',
  [ChainId.MODE_TESTNET]: '0xa26655bab784c9bd9daadaaff2a05a93484bf9c7',
  [ChainId.OPTIMISM]: '0x22505cb4D5d10b2C848A9d75C57eA72A66066D8C',
  [ChainId.ARBITRUM]: '0x1C6E968f2E6c9DEC61DB874E28589fd5CE3E1f2c',
}
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.BASE]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SCROLL]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
  [ChainId.MODE]: '0xc1e624c810d297fd70ef53b0e08f44fabe468591',
  [ChainId.MODE_TESTNET]: '0x9ce528e9a6bd2d489b9bbe2f97f4c8d6a23805f7',
  [ChainId.OPTIMISM]: '0x6D0829dABd4B41e9a999283a11DDa1516F591e86',
  [ChainId.ARBITRUM]: '0x7238FB45146BD8FcB2c463Dc119A53494be57Aac',
}

const OPTIMISM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  mixedRouteQuoterV1Address: '',
}

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693', // Uni custom one
  quoterAddress: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
  tickLensAddress: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
  swapRouter02Address: '',
  mixedRouteQuoterV1Address: '0x73eFdC8039B47207Cc718b7ADcB3D0dC8E76c082',
}
// v3 router: 0x1B8eea9315bE495187D873DA7773a874545D9D48

// Base Goerli v3 addresses
const BASE_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xd4e13e0451D32bf846a77b7C354c7cf611290CfC',
  multicallAddress: '0xC5F0F11926d6355273cB66fCf6fB7A5CbD78f848', // Uni custom one
  quoterAddress: '0x154184eAe9de0dcac56c804Ffee021e7F2B0B2bf',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x4c656A290161CE89538e305075098FE92bDcB5E6',
  tickLensAddress: '0x4460e525CAbF58d2E8F742482A0D228641abfAF6',
  swapRouter02Address: '',
}
// v3 router: 0xdA4b92605A385CFB148450d4E89A6A4De4AE92C0

const ARBITRUM_ADDRESSES: ChainAddresses = {
  // v3CoreFactoryAddress: '0x855F2c70cf5cb1D56C15ed309a4DfEfb88ED909E',
  v3CoreFactoryAddress: '0xa3792B3678b61001839c404ffcD20EF103473f68', // @note This is the defiedge PoolDeployer
  multicallAddress: '0x3647c51266cc1610d1318edbdc1129da75db75c5', // Uni custom one
  quoterAddress: '0x3D3429862B7a4053003Ddfdb76f1b2da6aed21A1', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0x81F2c375AEDbdF02f11c1Ae125e2f51Efa777cEa',
  tickLensAddress: '0x4f881DAD698afDb3eb186f1F3fb7db15Abc0F86a',
  swapRouter02Address: '',
  mixedRouteQuoterV1Address: '',
}

const MODE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x6E36FC34eA123044F278d3a9F3819027B21c9c32',
  multicallAddress: '0x7bb14ed986dae0c8423350a7f1c59a31b3c84509', // Uni custom one
  quoterAddress: '0xA642c56a9bCd863E52348798b31A8Db2BCdA5aee',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0xcc3726bCc27f232bC1CaAB40853AEa91ae43C216',
  tickLensAddress: '0x62e879c8979694DbC3A4EF1dd324b08Ee3Ac3688',
  swapRouter02Address: '0x7107112065dAF2EEedD56B06cdF185f3eFFF516D',
  mixedRouteQuoterV1Address: '0xC6004410771E706F46d756f3a6fCE7B1Df934498',
}

const MODE_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '0x30d273e96038cc14d1eedf0aa44e77be9caaa9b2', // Uni custom one
  quoterAddress: '', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  mixedRouteQuoterV1Address: '',
}

const SONIC_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0', // Uni custom one
  quoterAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A',
  tickLensAddress: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
  swapRouter02Address: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
  mixedRouteQuoterV1Address: '',
}

// // Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
// const DEFAULT_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
//   multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984',
//   quoterAddress: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
//   v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
//   nonfungiblePositionManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
// }
// const MAINNET_ADDRESSES: ChainAddresses = {
//   ...DEFAULT_ADDRESSES,
//   mixedRouteQuoterV1Address: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
// }
// const GOERLI_ADDRESSES: ChainAddresses = {
//   ...DEFAULT_ADDRESSES,
//   mixedRouteQuoterV1Address: '0xBa60b6e6fF25488308789E6e0A65D838be34194e',
// }

// const OPTIMISM_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES
// const ARBITRUM_ONE_ADDRESSES: ChainAddresses = {
//   ...DEFAULT_ADDRESSES,
//   multicallAddress: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
//   tickLensAddress: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
// }
// const POLYGON_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES

// // celo v3 addresses
// const CELO_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
//   multicallAddress: '0x633987602DE5C4F337e3DbF265303A1080324204',
//   quoterAddress: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8',
//   v3MigratorAddress: '0x3cFd4d48EDfDCC53D3f173F596f621064614C582',
//   nonfungiblePositionManagerAddress: '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
//   tickLensAddress: '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D',
// }

// // BNB v3 addresses
// const BNB_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
//   multicallAddress: '0x963Df249eD09c358A4819E39d9Cd5736c3087184',
//   quoterAddress: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
//   v3MigratorAddress: '0x32681814957e0C13117ddc0c2aba232b5c9e760f',
//   nonfungiblePositionManagerAddress: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
//   tickLensAddress: '0xD9270014D396281579760619CCf4c3af0501A47C',
//   swapRouter02Address: '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2',
// }

// // optimism goerli addresses
// const OPTIMISM_GOERLI_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10',
//   multicallAddress: '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd',
//   quoterAddress: '0x9569CbA925c8ca2248772A9A4976A516743A246F',
//   v3MigratorAddress: '0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8',
//   nonfungiblePositionManagerAddress: '0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6',
//   tickLensAddress: '0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e',
// }

// // optimism sepolia addresses
// const OPTIMISM_SEPOLIA_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x8CE191193D15ea94e11d327b4c7ad8bbE520f6aF',
//   multicallAddress: '0x80e4e06841bb76AA9735E0448cB8d003C0EF009a',
//   quoterAddress: '0x0FBEa6cf957d95ee9313490050F6A0DA68039404',
//   v3MigratorAddress: '0xE7EcbAAaA54D007A00dbb6c1d2f150066D69dA07',
//   nonfungiblePositionManagerAddress: '0xdA75cEf1C93078e8b736FCA5D5a30adb97C8957d',
//   tickLensAddress: '0xCb7f54747F58F8944973cea5b8f4ac2209BadDC5',
//   swapRouter02Address: '0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4',
// }

// // arbitrum goerli v3 addresses
// const ARBITRUM_GOERLI_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6',
//   multicallAddress: '0x8260CB40247290317a4c062F3542622367F206Ee',
//   quoterAddress: '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA',
//   v3MigratorAddress: '0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3',
//   nonfungiblePositionManagerAddress: '0x622e4726a167799826d1E1D150b076A7725f5D81',
//   tickLensAddress: '0xb52429333da969a0C79a60930a4Bf0020E5D1DE8',
// }

// // arbitrum sepolia v3 addresses
// const ARBITRUM_SEPOLIA_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x248AB79Bbb9bC29bB72f7Cd42F17e054Fc40188e',
//   multicallAddress: '0x2B718b475e385eD29F56775a66aAB1F5cC6B2A0A',
//   quoterAddress: '0x2779a0CC1c3e0E44D2542EC3e79e3864Ae93Ef0B',
//   v3MigratorAddress: '0x398f43ef2c67B941147157DA1c5a868E906E043D',
//   nonfungiblePositionManagerAddress: '0x6b2937Bde17889EDCf8fbD8dE31C3C2a70Bc4d65',
//   tickLensAddress: '0x0fd18587734e5C2dcE2dccDcC7DD1EC89ba557d9',
//   swapRouter02Address: '0x101F443B4d1b059569D643917553c771E1b9663E',
// }

// // sepolia v3 addresses
// const SEPOLIA_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
//   multicallAddress: '0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07',
//   quoterAddress: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
//   v3MigratorAddress: '0x729004182cF005CEC8Bd85df140094b6aCbe8b15',
//   nonfungiblePositionManagerAddress: '0x1238536071E1c677A632429e3655c799b22cDA52',
//   tickLensAddress: '0xd7f33bcdb21b359c8ee6f0251d30e94832baad07',
//   swapRouter02Address: '0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E',
//   // TODO: ROUTE-277 - update deploy address once after quoter refactoring.
//   mixedRouteQuoterV2Address: '0xa8b0be287acB850952DE4287b84B7222cc654C09',
// }

// // Avalanche v3 addresses
// const AVALANCHE_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
//   multicallAddress: '0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2',
//   quoterAddress: '0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F',
//   v3MigratorAddress: '0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97',
//   nonfungiblePositionManagerAddress: '0x655C406EBFa14EE2006250925e54ec43AD184f8B',
//   tickLensAddress: '0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950',
//   swapRouter02Address: '0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE',
// }

// const BASE_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
//   multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
//   quoterAddress: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
//   v3MigratorAddress: '0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7',
//   nonfungiblePositionManagerAddress: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
//   tickLensAddress: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d',
//   swapRouter02Address: '0x2626664c2603336E57B271c5C0b26F421741e481',
//   mixedRouteQuoterV1Address: '0xe544efae946f0008ae9a8d64493efa7886b73776',
// }

// // Base Goerli v3 addresses
// const BASE_GOERLI_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2',
//   multicallAddress: '0xB206027a9E0E13F05eBEFa5D2402Bab3eA716439',
//   quoterAddress: '0xedf539058e28E5937dAef3f69cEd0b25fbE66Ae9',
//   v3MigratorAddress: '0x3efe5d02a04b7351D671Db7008ec6eBA9AD9e3aE',
//   nonfungiblePositionManagerAddress: '0x3c61369ef0D1D2AFa70d8feC2F31C5D6Ce134F30',
//   tickLensAddress: '0x1acB873Ee909D0c98adB18e4474943249F931b92',
//   swapRouter02Address: '0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d',
// }

// const ZORA_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x7145F8aeef1f6510E92164038E1B6F8cB2c42Cbb',
//   multicallAddress: '0xA51c76bEE6746cB487a7e9312E43e2b8f4A37C15',
//   quoterAddress: '0x11867e1b3348F3ce4FcC170BC5af3d23E07E64Df',
//   v3MigratorAddress: '0x048352d8dCF13686982C799da63fA6426a9D0b60',
//   nonfungiblePositionManagerAddress: '0xbC91e8DfA3fF18De43853372A3d7dfe585137D78',
//   tickLensAddress: '0x209AAda09D74Ad3B8D0E92910Eaf85D2357e3044',
//   swapRouter02Address: '0x7De04c96BE5159c3b5CeffC82aa176dc81281557',
// }

// const ZORA_SEPOLIA_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x4324A677D74764f46f33ED447964252441aA8Db6',
//   multicallAddress: '0xA1E7e3A69671C4494EC59Dbd442de930a93F911A',
//   quoterAddress: '0xC195976fEF0985886E37036E2DF62bF371E12Df0',
//   v3MigratorAddress: '0x65ef259b31bf1d977c37e9434658694267674897',
//   nonfungiblePositionManagerAddress: '0xB8458EaAe43292e3c1F7994EFd016bd653d23c20',
//   tickLensAddress: '0x23C0F71877a1Fc4e20A78018f9831365c85f3064',
// }

// const ROOTSTOCK_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0xaF37EC98A00FD63689CF3060BF3B6784E00caD82',
//   multicallAddress: '0x996a9858cDfa45Ad68E47c9A30a7201E29c6a386',
//   quoterAddress: '0xb51727c996C68E60F598A923a5006853cd2fEB31',
//   v3MigratorAddress: '0x16678977CA4ec3DAD5efc7b15780295FE5f56162',
//   nonfungiblePositionManagerAddress: '0x9d9386c042F194B460Ec424a1e57ACDE25f5C4b1',
//   tickLensAddress: '0x55B9dF5bF68ADe972191a91980459f48ecA16afC',
//   swapRouter02Address: '0x0B14ff67f0014046b4b99057Aec4509640b3947A',
// }

// const BLAST_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x792edAdE80af5fC680d96a2eD80A44247D2Cf6Fd',
//   multicallAddress: '0xdC7f370de7631cE9e2c2e1DCDA6B3B5744Cf4705',
//   quoterAddress: '0x6Cdcd65e03c1CEc3730AeeCd45bc140D57A25C77',
//   v3MigratorAddress: '0x15CA7043CD84C5D21Ae76Ba0A1A967d42c40ecE0',
//   nonfungiblePositionManagerAddress: '0xB218e4f7cF0533d4696fDfC419A0023D33345F28',
//   tickLensAddress: '0x2E95185bCdD928a3e984B7e2D6560Ab1b17d7274',
//   swapRouter02Address: '0x549FEB8c9bd4c12Ad2AB27022dA12492aC452B66',
// }

// const ZKSYNC_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x8FdA5a7a8dCA67BBcDd10F02Fa0649A937215422',
//   multicallAddress: '0x0c68a7C72f074d1c45C16d41fa74eEbC6D16a65C',
//   quoterAddress: '0x8Cb537fc92E26d8EBBb760E632c95484b6Ea3e28',
//   v3MigratorAddress: '0x611841b24E43C4ACfd290B427a3D6cf1A59dac8E',
//   nonfungiblePositionManagerAddress: '0x0616e5762c1E7Dc3723c50663dF10a162D690a86',
//   tickLensAddress: '0xe10FF11b809f8EE07b056B452c3B2caa7FE24f89',
//   swapRouter02Address: '0x99c56385daBCE3E81d8499d0b8d0257aBC07E8A3',
// }

// const WORLDCHAIN_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x7a5028BDa40e7B173C278C5342087826455ea25a',
//   multicallAddress: '0x0a22c04215c97E3F532F4eF30e0aD9458792dAB9',
//   quoterAddress: '0x10158D43e6cc414deE1Bd1eB0EfC6a5cBCfF244c',
//   v3MigratorAddress: '0x9EBDdCBa71C9027E1eB45135672a30bcFEec9de3',
//   nonfungiblePositionManagerAddress: '0xec12a9F9a09f50550686363766Cc153D03c27b5e',
//   tickLensAddress: '0xE61df0CaC9d85876aCE5E3037005D80943570623',
//   swapRouter02Address: '0x091AD9e2e6e5eD44c1c66dB50e49A601F9f36cF6',
// }

// const ASTROCHAIN_SEPOLIA_ADDRESSES: ChainAddresses = {
//   v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
//   multicallAddress: '0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1',
//   quoterAddress: '0x8C41f1696360ca987803a4c24B8b7c36dFd61c4d',
//   v3MigratorAddress: '0x0e4b7B0d0125eCF02D6bBFd21Cf4559D9C9AcE42',
//   nonfungiblePositionManagerAddress: '0x05701915588BB4Dd144216d2f5Af70cdc7A8BFE4',
//   tickLensAddress: '0x5f739c790a48E97eec0efb81bab5D152c0A0ecA0',
//   swapRouter02Address: '0xa8b0be287acB850952DE4287b84B7222cc654C09',
// }

export const CHAIN_TO_ADDRESSES_MAP: Record<number, ChainAddresses> = {
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES,
  [ChainId.ARBITRUM]: ARBITRUM_ADDRESSES,
  [ChainId.MODE]: MODE_ADDRESSES,
  [ChainId.MODE_TESTNET]: MODE_TESTNET_ADDRESSES,
  [ChainId.OPTIMISM]: OPTIMISM_ADDRESSES,
  [ChainId.SONIC_TESTNET]: SONIC_TESTNET_ADDRESSES,
}
export const SUBGRAPH_URL_MAP: Record<SupportedChainsType, string> = {
  // [ChainId.BASE]: 'https://api.thegraph.com/subgraphs/name/baseswapfi/v3-base',
  [ChainId.BASE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v3-base/prod/gn',
  [ChainId.BASE_GOERLI]:
    'https://subgraph.satsuma-prod.com/testnet-gang--439662/v3-base-goerli/version/v0.0.1-new-version/api',
  [ChainId.ARBITRUM]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v3-arbitrum/prod/gn',
  [ChainId.MODE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/swapmode-v3/prod/gn',
  [ChainId.OPTIMISM]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v3-optimism/prod/gn',
}

export const V2_SUBGRAPH_URL_MAP: Record<number, string> = {
  [ChainId.BASE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v2-base/prod/gn',
  [ChainId.BASE_GOERLI]:
    'https://subgraph.satsuma-prod.com/testnet-gang--439662/v2-base-goerli/version/v0.0.1-new-version/api',
  [ChainId.ARBITRUM]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v2-arbitrum/prod/gn',
  [ChainId.MODE]: 'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/swapmode-v2/prod/gn',
  [ChainId.OPTIMISM]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/v2-optimism/prod/gn',
}

export const NFT_POOLS_SUBGRAPH_MAP: Record<number, string> = {
  [ChainId.BASE]: '',
  [ChainId.MODE]:
    'https://api.goldsky.com/api/public/project_cltceeuudv1ij01x7ekxhfl46/subgraphs/nft-pools-mode/prod/gn',
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {}),
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {}),
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {}),
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {}),
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {}),
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'),
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {}),
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].mixedRouteQuoterV1Address
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address
  }
  return ''
}
