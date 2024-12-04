
const loanInterestRates = {
    'Home Loan': 0.08,      
    'Car Loan': 0.10,       
    'Education Loan': 0.07  
};


function calculateEMI(loanAmount, interestRate, loanDurationMonths) {
    let r = interestRate / 12 / 100; 
    let n = loanDurationMonths; 
    let emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(2); 
}


function getLoanDuration(salary, loanAmount) {
    if (salary > 100000) {
        return 240; 
    } else if (salary > 50000) {
        return 180; 
    } else if (salary > 30000) {
        return 120; 
    } else {
        return 60; 
    }
}


document.querySelectorAll('.loan-card').forEach(function (element) {
    element.addEventListener('click', function () {
        
        document.querySelectorAll('.loan-card').forEach(function (e) {
            e.style.border = 'none';
        });
        
        const selectedLoan = element.querySelector('p').textContent;
        document.getElementById('emiForm').dataset.loanType = selectedLoan;
        element.style.border = '2px solid #f44336'; 
    });
});


document.getElementById('emiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const salary = parseFloat(document.getElementById('salary').value);
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanType = document.getElementById('emiForm').dataset.loanType;

    
    if (!loanType) {
        alert('Please select a loan type!');
        return;
    }

    
    const interestRate = loanInterestRates[loanType];

    
    const loanDuration = getLoanDuration(salary, loanAmount);

    
    const emi = calculateEMI(loanAmount, interestRate, loanDuration);

    document.getElementById('emiResult').innerText = `Your EMI: ₹${emi}`;
    document.getElementById('loanDurationResult').innerText = `Loan Duration: ${loanDuration} months`;

    
    document.getElementById('result').style.display = 'block';
});
