function calculateFuelEfficiency() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuel = parseFloat(document.getElementById('fuel').value);

    if (!isNaN(distance) && !isNaN(fuel) && fuel > 0) {
        const efficiency = distance / fuel;
        document.getElementById('fuelEfficiency').innerHTML = `Fuel Efficiency: ${efficiency.toFixed(2)} miles/gallon`;
    } else {
        document.getElementById('fuelEfficiency').innerHTML = 'Invalid input. Please check your values.';
    }
}
