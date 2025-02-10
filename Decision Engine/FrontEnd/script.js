// Update loan value display
function updateLoanValue(value) {
    document.getElementById('loanValue').textContent = `£${value}`;
}

// Example for auto-completion (placeholder)
document.getElementById('address').addEventListener('input', function () {
    console.log('Address input: ', this.value); // Placeholder for auto-complete functionality
});
