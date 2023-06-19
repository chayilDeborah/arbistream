import { constructSimpleSDK } from '@paraswap/sdk';
import { OptimalRate, SwapSide } from "paraswap-core";
import axios from 'axios';

// construct minimal SDK with fetcher only



export const Getrate = async (token1, token2, token1Amount, userAddress, chain, srcDecimal, destdeciaml) => {
    const options = { method: 'GET' };

    return fetch(`https://apiv5.paraswap.io/prices/?srcToken=${token1}&destToken=${token2}&amount=${token1Amount}&srcDecimals=${srcDecimal}&destDecimals=${destdeciaml}&side=SELL&network=${chain}`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => err);
    // console.log({ priceRoute })

}

