import {ChainId} from '@pancakeswap/sdk';
import {Configuration} from './bomb-finance/config';
import {BankInfo} from './bomb-finance';

const configurations: {[env: string]: Configuration} = {
  // development: {
  //   chainId: 97,
  //   networkName: 'BSC Testnet',
  //   ftmscanUrl: 'https://testnet.bscscan.com/',
  //   defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  //   deployments: require('./bomb-finance/deployments/deployments.testing.json'),
  //   externalTokens: {
  //     WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
  //     FUSDT: ['0x55d398326f99059fF775485246999027B3197955', 18], // This is actually BUSD on mainnet not fusdt
  //     BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
  //     ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
  //     SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
  //     'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
  //     'DGN-BTCB-LP': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
  //     'DSHARE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
  //   },
  //   baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
  //   bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  //   boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  //   refreshInterval: 10000,
  // },
  development: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      FTM: ['0xad29abb318791d579433d831ed122afeaf29dcfe', 18],
      ETH: ['0x2170ed0880ac9a755fd29b2688956bd959f933f8',18],
      USDC: ['0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 18],
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      DOGE: ['0xba2ae424d960c26247dd6c32edc70b295c744c43',8],
      SHIB: ['0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',18],
      BASH: ['0x29b2a2ced633841A9724aC7fEFd7aa502751E31F',18],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'DGN-BNB-LP': ['0x9796Aeb191639Df18F85A2BCcF652E1E7e3AFfe4', 18],
      'DSHARE-BNB-LP': ['0xE6Dd8BC8E00A412Fe8ed88130e8EE8E89299b552', 18],
      BASH_STAKE: ['0x7454912010be65099887ad8F2c85C33264C00827', 18],

      // 'DGN-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      FTM: ['0xad29abb318791d579433d831ed122afeaf29dcfe', 18],
      ETH: ['0x2170ed0880ac9a755fd29b2688956bd959f933f8',18],
      USDC: ['0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 18],
      DOGE: ['0xba2ae424d960c26247dd6c32edc70b295c744c43',8],
      SHIB: ['0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',18],
      BASH: ['0x29b2a2ced633841A9724aC7fEFd7aa502751E31F',18],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'DGN-BNB-LP': ['0x9796Aeb191639Df18F85A2BCcF652E1E7e3AFfe4', 18],
      'DSHARE-BNB-LP': ['0xE6Dd8BC8E00A412Fe8ed88130e8EE8E89299b552', 18],
      // 'DSHARE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      // 'DGN-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding DGN
        - 2 = LP asset staking rewarding DSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  // DgnBTCApeLPDgnRewardPool: {
  //   name: 'Earn DGN by DGN-BTCB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 1,
  //   contract: 'DgnBTCApeLPDgnRewardPool',
  //   depositTokenName: 'DGN-BTCB-APELP',
  //   earnTokenName: 'DGN',
  //   finished: true,
  //   sort: 2,
  //   closedForStaking: false,
  // },
  // DgnBTCLPDgnRewardPool: {
  //   name: 'Earn DGN by DGN-BTC LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'DgnBTCLPDgnRewardPool',
  //   depositTokenName: 'DGN-BTCB-LP',
  //   earnTokenName: 'DGN',
  //   finished: true,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // DgnShibaGenesisRewardPool: {
  //   name: 'Earn DGN by SHIB',
  //   poolId: 4,
  //   sectionInUI: 0,
  //   contract: 'DgnShibaGenesisRewardPool',
  //   depositTokenName: 'SHIB',
  //   earnTokenName: 'DGN',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: false,
  // },
  // DgnDogeGenesisRewardPool: {
  //   name: 'Earn DGN by DOGE',
  //   poolId: 5,
  //   sectionInUI: 0,
  //   contract: 'DgnDogeGenesisRewardPool',
  //   depositTokenName: 'DOGE',
  //   earnTokenName: 'DGN',
  //   finished: false,
  //   sort: 5,
  //   closedForStaking: false,
  // },
  // DgnBTCGenesisRewardPool: {
  //   name: 'Earn DGN by BTCB',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'DgnBTCGenesisRewardPool',
  //   depositTokenName: 'BTCB',
  //   earnTokenName: 'DGN',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: false,
  // },
  DgnUSDCGenesisRewardPool: {
    name: 'Earn DGN by USDC',
    poolId: 2,
    sectionInUI: 0,
    contract: 'DgnUSDCGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'DGN',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },

  DgnWBNBGenesisRewardPool: {
    name: 'Earn DGN by WBNB',
    poolId: 0,
    sectionInUI: 0,
    contract: 'DgnWBNBGenesisRewardPool',
    depositTokenName: 'WBNB',
    earnTokenName: 'DGN',
    finished: false,
    sort: 0,
    closedForStaking: false,
  },
  DgnBUSDGenesisRewardPool: {
    name: 'Earn DGN by BUSD',
    poolId: 1,
    sectionInUI: 0,
    contract: 'DgnBUSDGenesisRewardPool',
    depositTokenName: 'BUSD',
    earnTokenName: 'DGN',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },

  DgnBnbLPDgnRewardPool: {
    name: 'Earn DGN by DGN-BNB LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'DgnBnbLPDgnRewardPool',
    depositTokenName: 'DGN-BNB-LP',
    earnTokenName: 'DGN',
    finished: false,
    sort: 8,
    closedForStaking: false,
  },
  // DgnShibaRewardPool: {
  //   name: 'Earn DGN by SHIBA',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'DgnShibaGenesisRewardPool',
  //   depositTokenName: 'SHIBA',
  //   earnTokenName: 'DGN',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: false,
  // },
  // DgnZooRewardPool: {
  //   name: 'Earn DGN by ZOO',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'DgnZooGenesisRewardPool',
  //   depositTokenName: 'ZOO',
  //   earnTokenName: 'DGN',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: false,
  // },

  // DgnFtmLPDgnRewardPoolOld: {
  //   name: 'Earn DGN by DGN-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'DgnFtmLpDgnRewardPoolOld',
  //   depositTokenName: 'DGN-BNB-LP',
  //   earnTokenName: 'DGN',
  //   finished: true,
  //   sort: 9,
  //   closedForStaking: false,
  // },
  // DgnFtmLPDShareRewardPool: {
  //   name: 'Earn DSHARE by DGN-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 2,
  //   contract: 'DgnFtmLPDShareRewardPool',
  //   depositTokenName: 'DGN-BNB-LP',
  //   earnTokenName: 'DSHARE',
  //   finished: false,
  //   sort: 6,
  //   closedForStaking: false,
  // },

  // DshareBnbLPApeDShareRewardPool: {
  //   name: 'Earn DSHARE by DSHARE-BNB LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'DshareBnbLPApeDShareRewardPool',
  //   depositTokenName: 'DSHARE-BNB-LP',
  //   earnTokenName: 'DSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // DgnBtcbLPApeDShareRewardPool: {
  //   name: 'Earn DSHARE by DGN-BTCB LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'DgnBtcbLPApeDShareRewardPool',
  //   depositTokenName: 'DGN-BTCB-LP',
  //   earnTokenName: 'DSHARE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // DshareBnbApeLPDShareRewardPool: {
  //   name: 'Earn DSHARE by DSHARE-BNB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'DshareBnbApeLPDShareRewardPool',
  //   depositTokenName: 'DSHARE-BNB-APELP',
  //   earnTokenName: 'DSHARE',
  //   finished: true,
  //   sort: 5,
  //   closedForStaking: false,
  // },
  // DgnBtcbApeLPDShareRewardPool: {
  //   name: 'Earn DSHARE by DGN-BTCB Ape LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'DgnBtcbApeLPDShareRewardPool',
  //   depositTokenName: 'DGN-BTCB-APELP',
  //   earnTokenName: 'DSHARE',
  //   finished: true,
  //   sort: 4,
  //   closedForStaking: false,
  // },
  DshareBnbLPDShareRewardPool: {
    name: 'Earn DSHARE by DSHARE-BNB LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'DshareBnbLPDShareRewardPool',
    depositTokenName: 'DSHARE-BNB-LP',
    earnTokenName: 'DSHARE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  DGNBnbLPDShareRewardPool: {
    name: 'Earn DSHARE by DGN-BNB LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'DGNBnbLPDShareRewardPool',
    depositTokenName: 'DGN-BNB-LP',
    earnTokenName: 'DSHARE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  // DgnBtcbLPDShareRewardPool: {
  //   name: 'Earn DSHARE by DGN-BTCB LP',
  //   poolId: 1,
  //   sectionInUI: 2,
  //   contract: 'DgnBtcbLPDShareRewardPool',
  //   depositTokenName: 'DGN-BTCB-LP',
  //   earnTokenName: 'DSHARE',
  //   finished: false,
  //   sort: 1,
  //   closedForStaking: false,
  // },
};

export default configurations[process.env.NODE_ENV || 'development'];