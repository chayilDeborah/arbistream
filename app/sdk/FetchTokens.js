const axios = require('axios');

export const fetchTokensForOptimism = async (chainId) => {
    // Replace with the specific chain ID for Optimism

    if (chainId === 56) {
        try {
            const response = await axios.get(`https://tokens.coingecko.com/binance-smart-chain/all.json`);
            const tokens = response.data;

            // Process the tokens data here
            return tokens

        } catch (error) {
            console.error(error);
        }

    }
    else {
        try {
            const response = await axios.get(`https://tokens.coingecko.com/optimistic-ethereum/all.json`);
            const tokens = response.data;

            // Process the tokens data here
            return tokens

        } catch (error) {
            console.error(error);
        }

    }
};
