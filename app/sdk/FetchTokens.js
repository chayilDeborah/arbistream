const axios = require('axios');

const fetchTokensForOptimism = async () => {
    const chainId = 10; // Replace with the specific chain ID for Optimism

    try {
        const response = await axios.get(`https://apiv5.paraswap.io/tokens/${chainId}`);
        const tokens = response.data;

        // Process the tokens data here
        console.log(tokens);
    } catch (error) {
        console.error(error);
    }
};

fetchTokensForOptimism();