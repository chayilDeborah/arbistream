function convertEvmUnit(value, fromDecimals, toDecimals) {
    const valueBigInt = BigInt(value);
    const scaleFactor = BigInt(10 ** (toDecimals - fromDecimals));
    const convertedValue = valueBigInt * scaleFactor;
    return convertedValue.toString();
}