import { JsonRpcProvider } from '@wansproject/providers';
import networks from '@/helpers/networks.json';

const providers = {};

export default function getProvider(chainId: number) {
  // console.log('Get provider', chainId);
  const rpcUrl: string = networks[chainId].rpcUrl;
  // console.log('rpcUrl', rpcUrl);
  if (!providers[chainId]) providers[chainId] = new JsonRpcProvider(rpcUrl);
  return providers[chainId];
}
