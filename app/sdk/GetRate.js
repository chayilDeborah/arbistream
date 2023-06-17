import { constructSimpleSDK } from '@paraswap/sdk';
import { OptimalRate, SwapSide } from "paraswap-core";
import axios from 'axios';

// construct minimal SDK with fetcher only
const paraSwapMin = constructSimpleSDK({ chainId: 56, axios });


export const Getrate = async (token1, token2, token1Amount, userAddress) => {
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

