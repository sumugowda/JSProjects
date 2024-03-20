function convert() {
    const input = document.getElementById('input').value;

    // Convert to Hexadecimal
    const hexResult = `Hexadecimal: 0x${parseInt(input, 10).toString(16)}`;
    document.getElementById('hexResult').innerHTML = hexResult;

    // Convert to Decimal
    const decResult = `Decimal: ${parseInt(input, 16)}`;
    document.getElementById('decResult').innerHTML = decResult;

    // Convert to Binary
    const binResult = `Binary: 0b${parseInt(input, 16).toString(2)}`;
    document.getElementById('binResult').innerHTML = binResult;
}
