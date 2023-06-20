import { constructSimpleSDK } from '@paraswap/sdk';
import { OptimalRate, SwapSide } from "paraswap-core";
import axios from 'axios';

// construct minimal SDK with fetcher only



export const Getrate = async (token1, token2, token1Amount, userAddress, chain, srcDecimal, destdeciaml) => {

    if (chain === 10) {
        const options = { method: 'GET', headers: { '0x-api-key': '4afc15d4-20ab-476b-9c2a-b038824e61aa' } };
        // console.log(token1Amount * 10 ** srcDecimal)
        return fetch(`https://optimism.api.0x.org/swap/v1/price?buyToken=${token1}&sellToken=${token2}&buyAmount=${token1Amount * 10 ** srcDecimal}`, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);

    } else {
        const options = { method: 'GET', headers: { '0x-api-key': '4afc15d4-20ab-476b-9c2a-b038824e61aa' } };
        //  console.log(token1Amount * 10 ** srcDecimal)
        return fetch(`https://bsc.api.0x.org/swap/v1/price?buyToken=${token1}&sellToken=${token2}&buyAmount=${token1Amount * 10 ** srcDecimal}`, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    // console.log({ priceRoute })

}

