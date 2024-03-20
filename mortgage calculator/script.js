function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    if (!isNaN(monthlyPayment) && (monthlyPayment !== Infinity) && (monthlyPayment !== -Infinity)) {
        document.getElementById('monthlyPayment').innerHTML = `$${monthlyPayment.toFixed(2)} per month`;
    } else {
        document.getElementById('monthlyPayment').innerHTML = 'Invalid input. Please check your values.';
    }
}
