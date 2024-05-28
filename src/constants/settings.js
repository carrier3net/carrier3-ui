import { ChainMap } from './chainsMap'

export const validChains = {
  local: [ChainMap.ROPSTEN, ChainMap.RINKEBY, ChainMap.BSC_TESTNET],
  dev: [ChainMap.BSC_TESTNET, ChainMap.SEPOLIA],
  production: [ChainMap.ETH, ChainMap.BSC],
}

let tokens = [
  {
    chainId: 97,
    address: '0xdc78303bb491dDcE39791c905524F9B4EaB836a8',
    name: 'ExampleToken',
    symbol: 'C3ET',
    decimals: 18,
    logo: '/media/tokens/bt.svg',
    balance: 0,
  },
  {
    chainId: 11155111,
    address: '0xB50a91EaFacc7867dA8B1b27FF542695b0938D83',
    name: 'ExampleToken',
    symbol: 'C3ET',
    decimals: 18,
    logo: '/media/tokens/bt.svg',
    balance: 0,
  },
]

export default tokens

export const ChainGraphMap = {
  [ChainMap.BSC_TESTNET]: process.env.NEXT_PUBLIC_BSC_TESTNET_GRAPH_URL,
  [ChainMap.SEPOLIA]: process.env.NEXT_PUBLIC_SEPOLIA_GRAPH_URL,
}
