import { constructSimpleSDK } from '@paraswap/sdk';
import { OptimalRate, SwapSide } from "paraswap-core";
import axios from 'axios';

// construct minimal SDK with fetcher only



export const Getrate = async (token1, token2, token1Amount, userAddress, chain) => {
    const paraSwapMin = constructSimpleSDK({ chainId: chain, axios });
    const priceRoute = await paraSwapMin.swap.getRateByRoute({
        srcToken: token1,
        destToken: token2,
        amount: token1Amount,
        userAddress: userAddress,
        side: "SELL",
    });
    // console.log({ priceRoute })
    return priceRoute
}

