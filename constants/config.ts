export type Chain = {
  name: string;
  url: string;
  chainType: string;
  chainId: string;
  rpcUrl: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  prefix?: number;
  type: string;
  threshold: number;
};

export const chains: Chain[] = [
  {
    name: "Westend",
    url: "westend",
    chainType: "Westend & Parachains",
    chainId: "",
    rpcUrl: "wss://westend-rpc.polkadot.io",
    nativeCurrency: {
      name: "WND",
      symbol: "WND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Westend AssetHub",
    url: "westend-asset-hub",
    chainId: "",
    chainType: "Westend & Parachains",
    rpcUrl: "wss://asset-hub-westend-rpc.dwellir.com",
    nativeCurrency: {
      name: "WND",
      symbol: "WND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Westend BridgeHub",
    url: "westend-bridge-hub",
    chainId: "",
    chainType: "Westend & Parachains",
    rpcUrl: "wss://bridge-hub-westend-rpc.dwellir.com",
    nativeCurrency: {
      name: "WND",
      symbol: "WND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Westend Collectives",
    url: "westend-collectives",
    chainId: "",
    chainType: "Westend & Parachains",
    rpcUrl: "wss://collectives-westend-rpc.dwellir.com",
    nativeCurrency: {
      name: "WND",
      symbol: "WND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Westend Coretime",
    url: "westend-coretime",
    chainId: "",
    chainType: "Westend & Parachains",
    rpcUrl: "wss://sys.ibp.network/coretime-westend",
    nativeCurrency: {
      name: "WND",
      symbol: "WND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Westend People",
    url: "westend-people",
    chainId: "",
    chainType: "Westend & Parachains",
    rpcUrl: "wss://sys.ibp.network/people-westend",
    nativeCurrency: {
      name: "WND",
      symbol: "WND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Rococo",
    url: "rococo",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rococo-rpc.polkadot.io",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Rococo Asset Hub",
    url: "rococo-asset-hub",
    chainType: "Rococo & Parachains",
    chainId: "",
    rpcUrl: "wss://rococo-asset-hub-rpc.polkadot.io",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Rococo BridgeHub",
    url: "rococo-bridge-hub",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://bridge-hub-rococo-rpc.dwellir.com",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Rococo Contracts",
    url: "rococo-contracts",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rococo-contracts-rpc.polkadot.io",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Rococo Coretime",
    url: "rococo-coretime",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rococo-coretime-rpc.polkadot.io",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Encointer",
    url: "encointer",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rococo.api.encointer.org",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Rococo People",
    url: "rococo-people",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rococo-people-rpc.polkadot.io",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Foucoco (Amplitude)",
    url: "rococo-amplitude",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rpc-foucoco.pendulumchain.tech",
    nativeCurrency: {
      name: "AMPE",
      symbol: "AMPE",
      decimals: 12,
    },
    prefix: 57,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Basilisk testnet",
    url: "rococo-basilisk",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://basilisk-rococo-rpc.play.hydration.cloud",
    nativeCurrency: {
      name: "BSX",
      symbol: "BSX",
      decimals: 12,
    },
    prefix: 10041,
    type: "substrate",
    threshold: 200000,
  },
  {
    name: "Curio Rococo",
    url: "rococo-curio",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://testnet.parachain.curioinvest.com/",
    nativeCurrency: {
      name: "CGT",
      symbol: "CGT",
      decimals: 18,
    },
    prefix: 777,
    type: "substrate",
    threshold: 30000,
  },
  {
    name: "Hyperbridge (Gargantua)",
    url: "rococo-hyperbridge",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://hyperbridge-gargantua-rpc.blockops.network",
    nativeCurrency: {
      name: "tNAND",
      symbol: "tNAND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Kinera Development",
    url: "rococo-kinera",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://node.kinera.network",
    nativeCurrency: {
      name: "UNIT",
      symbol: "UNIT",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 5000,
  },
  {
    name: "Litentry-rococo",
    url: "rococo-litentry",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rpc.rococo-parachain.litentry.io",
    nativeCurrency: {
      name: "LIT",
      symbol: "LIT",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 500000,
  },
  {
    name: "Magnet Rococo",
    url: "rococo-magnet",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://magnet-rpc.magport.io/ws",
    nativeCurrency: {
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 30,
  },
  {
    name: "Mangata Public Testnet",
    url: "rococo-mangata",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://collator-01-ws-rococo.mangata.online",
    nativeCurrency: {
      name: "MGAT",
      symbol: "MGAT",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 1000,
  },
  {
    name: "MD5 Testnet",
    url: "rococo-md5",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://c1md5.hashed.network",
    nativeCurrency: {
      name: "MD5",
      symbol: "MD5",
      decimals: 18,
    },
    prefix: 5000,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Muse (Mythos)",
    url: "rococo-muse",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rococo-muse-rpc.polkadot.io",
    nativeCurrency: {
      name: "MUSE",
      symbol: "MUSE",
      decimals: 18,
    },
    prefix: 29972,
    type: "substrate",
    threshold: 150000,
  },
  {
    name: "Neuro Testnet",
    url: "rococo-neuro-web",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://parachain-testnet-rpc.origin-trail.network/",
    nativeCurrency: {
      name: "NEURO",
      symbol: "NEURO",
      decimals: 12,
    },
    prefix: 101,
    type: "substrate",
    threshold: 500000,
  },
  {
    name: "RegionX Cocos",
    url: "regionx-cocos",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://cocos-node.regionx.tech/",
    nativeCurrency: {
      name: "COCOS",
      symbol: "COCOS",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 50000,
  },
  {
    name: "Energy Web X Rococo",
    url: "rococo-ewx",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://public-rpc.testnet.energywebx.com/",
    nativeCurrency: {
      name: "VT",
      symbol: "VT",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 500,
  },
  {
    name: "Rhala (Phala)",
    url: "rococo-phala",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rhala-node.phala.network/ws",
    nativeCurrency: {
      name: "PHA",
      symbol: "PHA",
      decimals: 12,
    },
    prefix: 30,
    type: "substrate",
    threshold: 1000,
  },
  {
    name: "RILT (Kilt)",
    url: "rococo-kilt",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rilt.kilt.io",
    nativeCurrency: {
      name: "RILT",
      symbol: "RILT",
      decimals: 15,
    },
    prefix: 38,
    type: "substrate",
    threshold: 150000,
  },
  {
    name: "SoonSocialX (Subsocial)",
    url: "rococo-subsocial",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rco-para.subsocial.network",
    nativeCurrency: {
      name: "SOON",
      symbol: "SOON",
      decimals: 10,
    },
    prefix: 28,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "SORA Rococo",
    url: "rococo-sora",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://ws.parachain-collator-1.c1.stg1.sora2.soramitsu.co.jp",
    nativeCurrency: {
      name: "XOR",
      symbol: "XOR",
      decimals: 18,
    },
    prefix: 420,
    type: "substrate",
    threshold: 10,
  },
  /* RPC is down
  {
    name: "",
    url: "t0rn",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rpc.t0rn.io",
    nativeCurrency: {
      name: "",
      symbol: "",
      decimals: ,
    },
    prefix: ,
    type: "substrate",
    threshold: ,
  },
  */
  {
    name: "Watr Testnet",
    url: "rococo-watr",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rpc.dev.watr.org",
    nativeCurrency: {
      name: "WATRD",
      symbol: "WATRD",
      decimals: 18,
    },
    prefix: 19,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Yerba on Rococo",
    url: "rococo-yerba",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://rpc.dev.yerba.network",
    nativeCurrency: {
      name: "ROC",
      symbol: "ROC",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Zeitgeist Battery Station",
    url: "rococo-zeitgeist",
    chainId: "",
    chainType: "Rococo & Parachains",
    rpcUrl: "wss://bsr.zeitgeist.pm",
    nativeCurrency: {
      name: "ZBS",
      symbol: "ZBS",
      decimals: 10,
    },
    prefix: 73,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Paseo",
    url: "paseo",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://paseo.rpc.amforc.com",
    nativeCurrency: {
      name: "PAS",
      symbol: "PAS",
      decimals: 10,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Paseo AssetHub",
    url: "paseo-asset-hub",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://asset-hub-paseo-rpc.dwellir.com",
    nativeCurrency: {
      name: "PAS",
      symbol: "PAS",
      decimals: 10,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Ajuna Paseo",
    url: "ajuna-paseo",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://rpc-paseo.ajuna.network",
    nativeCurrency: {
      name: "AJUN",
      symbol: "AJUN",
      decimals: 12,
    },
    prefix: 1328,
    type: "substrate",
    threshold: 115000,
  },
  {
    name: "AvN (Aventus)",
    url: "paseo-aventus",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://public-rpc.testnet.aventus.network",
    nativeCurrency: {
      name: "AVT",
      symbol: "AVT",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 1000,
  },
  {
    name: "Bajun Paseo",
    url: "bajun-paseo",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://rpc-paseo.bajun.network",
    nativeCurrency: {
      name: "BAJU",
      symbol: "BAJU",
      decimals: 12,
    },
    prefix: 1337,
    type: "substrate",
    threshold: 115000,
  },
  {
    name: "Bifrost Paseo",
    url: "bifrost-paseo",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://bifrost-rpc.paseo.liebi.com/ws",
    nativeCurrency: {
      name: "BNC",
      symbol: "BNC",
      decimals: 12,
    },
    prefix: 6,
    type: "substrate",
    threshold: 5000,
  },
  {
    name: "Darwinia Koi",
    url: "darwinia-koi",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://koi-rpc.darwinia.network",
    nativeCurrency: {
      name: "KRING",
      symbol: "KRING",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Frequency Paseo",
    url: "frequency-paseo",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://0.rpc.testnet.amplica.io",
    nativeCurrency: {
      name: "XRQCY",
      symbol: "XRQCY",
      decimals: 8,
    },
    prefix: 42,
    type: "substrate",
    threshold: 5000000,
  },
  {
    name: "Hyperbridge",
    url: "hyperbridge",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://hyperbridge-paseo-rpc.blockops.network",
    nativeCurrency: {
      name: "tNAND",
      symbol: "tNAND",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Integritee Testnet",
    url: "integritee",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://paseo.api.integritee.network",
    nativeCurrency: {
      name: "TEER",
      symbol: "TEER",
      decimals: 12,
    },
    prefix: 13,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "KILT Peregrine",
    url: "kilt",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://peregrine.kilt.io/parachain-public-ws/",
    nativeCurrency: {
      name: "PILT",
      symbol: "PILT",
      decimals: 15,
    },
    prefix: 38,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Laos Sigma Testnet",
    url: "laos-sigma",
    chainId: "62850",
    chainType: "Paseo & Parachains",
    rpcUrl: "https://rpc.laossigma.laosfoundation.io",
    nativeCurrency: {
      name: "SIGMA",
      symbol: "SIGMA",
      decimals: 18,
    },
    type: "evm",
    threshold: 1000,
  },
  {
    name: "Muse (Mythos)",
    url: "muse",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://paseo-muse-rpc.polkadot.io",
    nativeCurrency: {
      name: "MUSE",
      symbol: "MUSE",
      decimals: 18,
    },
    prefix: 29972,
    type: "substrate",
    threshold: 150000,
  },
  {
    name: "Niskala (Mandalachain)",
    url: "niskala",
    chainId: "6025",
    chainType: "Paseo & Parachains",
    rpcUrl: "https://mlg2.mandalachain.io",
    nativeCurrency: {
      name: "KPGT",
      symbol: "KPGT",
      decimals: 18,
    },
    type: "evm",
    threshold: 1000000,
  },
  {
    name: "Parachain Hades (Nodle)",
    url: "nodle-paradis",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://node-6957502816543653888.lh.onfinality.io/ws?apikey=09b04494-3139-4b57-a5d1-e1c4c18748ce",
    nativeCurrency: {
      name: "notNODL",
      symbol: "notNODL",
      decimals: 11,
    },
    prefix: 37,
    type: "substrate",
    threshold: 1000,
  },
  {
    name: "Pop Network",
    url: "pop-network",
    chainId: "",
    chainType: "Paseo & Parachains",
    rpcUrl: "wss://rpc1.paseo.popnetwork.xyz",
    nativeCurrency: {
      name: "PAS",
      symbol: "PAS",
      decimals: 10,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Aleph Zero Testnet",
    url: "aleph-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://ws.test.azero.dev",
    nativeCurrency: {
      name: "TZERO",
      symbol: "TZERO",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Analog Testnet",
    url: "analog-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://rpc.testnet.analog.one",
    nativeCurrency: {
      name: "TANLOG",
      symbol: "TANLOG",
      decimals: 12,
    },
    prefix: 12850,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Beresheet (Edgeware)",
    url: "beresheet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://beresheet.jelliedowl.net",
    nativeCurrency: {
      name: "tEDG",
      symbol: "tEDG",
      decimals: 18,
    },
    prefix: 7,
    type: "substrate",
    threshold: 200000,
  },
  {
    name: "BIFROST Testnet",
    url: "thebifrost-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://public-01.testnet.bifrostnetwork.com/wss",
    nativeCurrency: {
      name: "BFC",
      symbol: "BFC",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 500000,
  },
  {
    name: "Chainflip-Perseverance",
    url: "chainflip",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://archive.perseverance.chainflip.io",
    nativeCurrency: {
      name: "FLIP",
      symbol: "FLIP",
      decimals: 18,
    },
    prefix: 2112,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Creditcoin Classic Testnet",
    url: "creditcoin-classic-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://rpc.testnet.creditcoin.network/ws",
    nativeCurrency: {
      name: "CTC",
      symbol: "CTC",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 50000,
  },
  {
    name: "Creditcoin Testnet",
    url: "creditcoin-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://rpc.cc3-testnet.creditcoin.network/ws",
    nativeCurrency: {
      name: "CTC",
      symbol: "CTC",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 50000,
  },
  {
    name: "Dancebox (Tanssi)",
    url: "dancebox",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://dancebox.tanssi-api.network",
    nativeCurrency: {
      name: "DANCE",
      symbol: "DANCE",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 50000,
  },
  {
    name: "Encointer Testnet Gesell",
    url: "encointer",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://gesell.encointer.org",
    nativeCurrency: {
      name: "ERT",
      symbol: "ERT",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 1000,
  },
  {
    name: "Harmonie Testnet",
    url: "allfeat-testnet",
    chainId: "441",
    chainType: "Solochains",
    rpcUrl: "https://harmonie-endpoint-02.allfeat.io",
    nativeCurrency: {
      name: "HMY",
      symbol: "HMY",
      decimals: 18,
    },
    type: "evm",
    threshold: 100000,
  },
  {
    name: "Interlay Testnet",
    url: "interlay-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://api-testnet.interlay.io/parachain/",
    nativeCurrency: {
      name: "INTR",
      symbol: "INTR",
      decimals: 10,
    },
    prefix: 2032,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Jur Testnet",
    url: "jur",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://testnet.jur.io",
    nativeCurrency: {
      name: "JUR",
      symbol: "JUR",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Kintsugi (Interlay) Testnet",
    url: "kintsugi-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://api-dev-kintsugi.interlay.io/parachain",
    nativeCurrency: {
      name: "KINT",
      symbol: "KINT",
      decimals: 12,
    },
    prefix: 2092,
    type: "substrate",
    threshold: 10000,
  },
  {
    name: "Bastiat (Liberland)",
    url: "liberland",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://testchain.liberland.org",
    nativeCurrency: {
      name: "LDN",
      symbol: "LDN",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "Logion Testnet",
    url: "logion",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://test-para-rpc01.logion.network",
    nativeCurrency: {
      name: "LGNTT",
      symbol: "LGNTT",
      decimals: 18,
    },
    prefix: 2021,
    type: "substrate",
    threshold: 100000,
  },
  {
    name: "OPAL by UNIQUE",
    url: "opal",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://ws-opal.unique.network",
    nativeCurrency: {
      name: "OPL",
      symbol: "OPL",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 300000,
  },
  {
    name: "Phala PoC-6",
    url: "phala",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://poc6.phala.network/ws",
    nativeCurrency: {
      name: "PHA",
      symbol: "PHA",
      decimals: 12,
    },
    prefix: 30,
    type: "substrate",
    threshold: 1000000,
  },
  {
    name: "Polymesh Testnet",
    url: "polymesh",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://testnet-rpc.polymesh.live",
    nativeCurrency: {
      name: "POLYX",
      symbol: "POLYX",
      decimals: 6,
    },
    prefix: 42,
    type: "substrate",
    threshold: 500000,
  },
  {
    name: "Shibuya Testnet",
    url: "shibuya",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://rpc.shibuya.astar.network",
    nativeCurrency: {
      name: "SBY",
      symbol: "SBY",
      decimals: 18,
    },
    prefix: 5,
    type: "substrate",
    threshold: 120000,
  },
  {
    name: "SORA-staging Testnet",
    url: "sora-substrate",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://ws.framenode-1.s1.stg1.sora2.soramitsu.co.jp",
    nativeCurrency: {
      name: "XOR",
      symbol: "XOR",
      decimals: 18,
    },
    prefix: 69,
    type: "substrate",
    threshold: 1000000,
  },
  {
    name: "Subspace Gemini 3h",
    url: "subspace-gemini-3h",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://rpc-0.gemini-3h.subspace.network/ws",
    nativeCurrency: {
      name: "tSSC",
      symbol: "tSSC",
      decimals: 18,
    },
    prefix: 2254,
    type: "substrate",
    threshold: 220,
  },
  {
    name: "Subspace Gemini 3h Nova",
    url: "subspace-gemini-3h-nova",
    chainId: "490000",
    chainType: "Solochains",
    rpcUrl: "https://nova-0.gemini-3h.subspace.network/ws",
    nativeCurrency: {
      name: "tSSC",
      symbol: "tSSC",
      decimals: 18,
    },
    type: "evm",
    threshold: 220,
  },
  {
    name: "Ternoa Alphanet",
    url: "ternoa-alphanet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://alphanet.ternoa.com",
    nativeCurrency: {
      name: "CAPS",
      symbol: "CAPS",
      decimals: 18,
    },
    prefix: 42,
    type: "substrate",
    threshold: 1500000,
  },
  {
    name: "Vara Testnet",
    url: "vara-testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://testnet.vara.network",
    nativeCurrency: {
      name: "TVARA",
      symbol: "TVARA",
      decimals: 12,
    },
    prefix: 137,
    type: "substrate",
    threshold: 1000000,
  },
  {
    name: "ZERO Alphaville (Subzero)",
    url: "zero-alphaville",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://rpc.dev.gamedao.net",
    nativeCurrency: {
      name: "ZERO",
      symbol: "ZERO",
      decimals: 18,
    },
    prefix: 25,
    type: "substrate",
    threshold: 1000000,
  },
  {
    name: "Beresheet BereEVM (Edgeware)",
    url: "beresheet-bereevm",
    chainId: "2022",
    chainType: "Solochains",
    rpcUrl: "https://beresheet-evm.jelliedowl.net",
    nativeCurrency: {
      name: "tEDG",
      symbol: "tEDG",
      decimals: 18,
    },
    type: "evm",
    threshold: 200000,
  },
  {
    name: "Bifrost Solo testnet EVM",
    url: "thebifrost-testnet-evm",
    chainType: "Solochains",
    chainId: "49088",
    rpcUrl: "https://public-01.testnet.bifrostnetwork.com/rpc",
    nativeCurrency: {
      name: "BFC",
      symbol: "BFC",
      decimals: 18,
    },
    type: "evm",
    threshold: 5000,
  },
  {
    name: "Moonbase Alpha",
    url: "moonbase-alpha",
    chainId: "1287",
    chainType: "Solochains",
    rpcUrl: "https://rpc.testnet.moonbeam.network",
    nativeCurrency: {
      name: "DEV",
      symbol: "DEV",
      decimals: 18,
    },
    type: "evm",
    threshold: 100000,
  },
  {
    name: "Tangle EVM",
    url: "tangle-testnet-evm",
    chainId: "3799",
    chainType: "Solochains",
    rpcUrl: "https://testnet-rpc.tangle.tools",
    nativeCurrency: {
      name: "tTNT",
      symbol: "tTNT",
      decimals: 18,
    },
    type: "evm",
    threshold: 100000,
  },
];
