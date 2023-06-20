const axios = require('axios');

export const fetchTokensForOptimism = async (chainId) => {
    // Replace with the specific chain ID for Optimism
    try {
        const response = await axios.get(`https://apiv5.paraswap.io/tokens/${chainId}`);
        const tokens = response.data;

        // Process the tokens data here
        return tokens

    } catch (error) {
        console.error(error);
    }
};
