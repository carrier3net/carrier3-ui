export const ChainMap = {
  ETH: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  SEPOLIA: 11155111,
  BSC: 56,
  BSC_TESTNET: 97,
  MATIC: 137,
  MATIC_TESTNET: 80001,
  XDAI: 100,
  SOKOL: 77,
  FANTOM: 250,
  FANTOM_TESTNET: 4002,
  HECO: 128,
  HECO_TESTNET: 256,
  AVAX: 43114,
}

export const NameChainMap = {
  1: 'ETH',
  3: 'Ropsten',
  4: 'Rinkeby',
  11155111: 'Sepolia',
  56: 'BSC',
  97: 'BSC TEST',
  137: 'MATIC',
  80001: 'Mumbai',
  100: 'xDAI',
  77: 'Sokol',
  250: 'FTM',
  4002: 'FTM TEST',
  128: 'HECO',
  256: 'HECOT',
  43114: 'AVAX',
}

export const MUON_CHAINS_MAP = {
  97: 'bsctest',
  11155111: 'sepolia'
}

export const rpcConfig = {
  [ChainMap.ETH]: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`],
    blockExplorerUrls: ['https://etherscan.io/'],
  },
  [ChainMap.RINKEBY]: {
    chainId: '0x4',
    chainName: 'Rinkeby Testnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [`https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`],
    blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
  },
  [ChainMap.ROPSTEN]: {
    chainId: '0x3',
    chainName: 'Ropsten Testnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [`https://ropsten.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`],
    blockExplorerUrls: ['https://ropsten.etherscan.io/'],
  },
  [ChainMap.SEPOLIA]: {
    chainId: '11155111',
    chainName: 'Sepolia Testnet',
    symbol: 'ETH',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [`https://rpc.ankr.com/eth_sepolia`],
    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
  },
  [ChainMap.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    symbol: 'BSC',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  [ChainMap.BSC_TESTNET]: {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    symbol: 'BSC',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-testnet.publicnode.com'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
  },
  [ChainMap.MATIC]: {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    symbol: 'MATIC',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    iconUrls: [],
  },
  [ChainMap.MATIC_TESTNET]: {
    chainId: '0x13881',
    chainName: 'Mumbai',
    symbol: 'MATIC',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ankr.com/polygon_mumbai/'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    iconUrls: [],
  },
  [ChainMap.XDAI]: {
    chainId: '0x64',
    chainName: 'xDAI Chain',
    symbol: 'xDAI',
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.xdaichain.com/'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai/'],
  },
  [ChainMap.SOKOL]: {
    chainId: '77',
    chainName: 'Sokol',
    symbol: 'xDAI',
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
    },
    rpcUrls: ['https://sokol.poa.network/'],
    blockExplorerUrls: ['https://blockscout.com/poa/sokol'],
  },
  [ChainMap.FANTOM]: {
    chainId: '0xFA',
    chainName: 'Fantom Opera',
    symbol: 'FTM',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.ftm.tools/'],
    blockExplorerUrls: ['https://ftmscan.com/'],
  },
  [ChainMap.FANTOM_TESTNET]: {
    chainId: '0xfa2',
    chainName: 'Fantom testnet Opera',
    symbol: 'FTM',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.testnet.fantom.network/'],
    blockExplorerUrls: ['https://testnet.ftmscan.com/'],
  },

  [ChainMap.HECO]: {
    chainId: '0x80',
    chainName: 'Huobi ECO Chain Mainnet',
    symbol: 'HT',
    nativeCurrency: {
      name: 'HT',
      symbol: 'HT',
      decimals: 18,
    },
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://hecoinfo.com'],
  },
  [ChainMap.HECO_TESTNET]: {
    chainId: '0x100',
    chainName: 'Huobi ECO Chain Testnet',
    symbol: 'HT',
    nativeCurrency: {
      name: 'htt',
      symbol: 'htt',
      decimals: 18,
    },
    rpcUrls: ['https://http-testnet.hecochain.com'],
    blockExplorerUrls: ['https://testnet.hecoinfo.com'],
  },
  [ChainMap.AVALANCHE]: {
    chainId: '0xa86a',
    chainName: 'Avalanche Network',
    symbol: 'AVAX',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
  },
}