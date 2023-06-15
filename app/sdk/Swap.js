import { constructSimpleSDK } from '@paraswap/sdk';
import axios from 'axios';

// construct minimal SDK with fetcher only
const paraSwapMin = constructSimpleSDK({ chainId: 1, axios });


const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

async function swapExample(address, signer) {
    //                                     or any other signer/provider 
    const senderAddress = address;

    const priceRoute = await paraSwapMin.swap.getRate({
        srcToken: ETH,
        destToken: DAI,
        amount: srcAmount,
        userAddress: senderAddress,
        side: SwapSide.SELL,
    });

    const txParams = await paraSwapMin.swap.buildTx(
        {
            srcToken,
            destToken,
            srcAmount,
            destAmount,
            priceRoute,
            userAddress: senderAddress,
            partner: referrer,
        }
    );

    const transaction = {
        ...txParams,
        gasPrice: '0x' + new BigNumber(txParams.gasPrice).toString(16),
        gasLimit: '0x' + new BigNumber(5000000).toString(16),
        value: '0x' + new BigNumber(txParams.value).toString(16),
    };

    const txr = await signer.sendTransaction(transaction);
}