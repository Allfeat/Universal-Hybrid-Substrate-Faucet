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
    name: "Melodie | Allfeat Testnet",
    url: "testnet",
    chainId: "",
    chainType: "Solochains",
    rpcUrl: "wss://melodie-rpc.allfeat.io",
    nativeCurrency: {
      name: "MEL",
      symbol: "MEL",
      decimals: 12,
    },
    prefix: 42,
    type: "substrate",
    threshold: 10000,
  },
];
