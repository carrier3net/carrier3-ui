import { useWeb3React } from '@web3-react/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MRC20 from '../src/components/MRC20'
import { NameChainMap, rpcConfig } from '../src/constants/chainsMap'
import { validChains } from '../src/constants/settings'
import { useAddOriginChain, useAddToken } from '../src/state/bridge/hooks'
import { findAndAddToken } from '../src/utils/Token'

export default function Home() {
  const router = useRouter()

  const addOriginChain = useAddOriginChain()
  const addToken = useAddToken()

  const { account } = useWeb3React()

  useEffect(async () => {
    const query = router.query
    if (Object.keys(query).length) {
      try {
        if (
          query['chain'] !== undefined &&
          validChains[process.env.NEXT_PUBLIC_MODE].includes(parseInt(query['chain'])) &&
          query['token'] !== undefined
        ) {
          const chainId = parseInt(query['chain'])
          const originChain = {
            id: chainId,
            name: NameChainMap[chainId],
            symbol: rpcConfig[chainId].symbol,
          }
          let token = await findAndAddToken(query['token'], account, chainId)
          if (token) {
            addOriginChain(originChain)
            addToken(token)
          }
        }
      } catch (error) {
        console.log('Error happend in adding default token', error)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Carrier3 protocol</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/media/common/carrier3.png" />
      </Head>
      <MRC20 />
    </>
  )
}