document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.pathname;

    // Exercise 1: Sum of Three Numbers
    if (currentUrl.includes('exercise1.html')) {
        const calculateButton = document.getElementById('calculate');
        const resultDiv = document.getElementById('result');
        calculateButton.addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('number1').value);
            const num2 = parseFloat(document.getElementById('number2').value);
            const num3 = parseFloat(document.getElementById('number3').value);
            if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
                resultDiv.textContent = `The sum is: ${num1 + num2 + num3}`;
            } else {
                resultDiv.textContent = 'Invalid input. Please enter numbers only.';
            }
        });
    }

    // Exercise 2: Final Grade
    if (currentUrl.includes('exercise2.html')) {
        const calculateButton = document.getElementById('calculate');
        const resultDiv = document.getElementById('result');
        calculateButton.addEventListener('click', function() {
            const grade1 = parseFloat(document.getElementById('grade1').value);
            const grade2 = parseFloat(document.getElementById('grade2').value);
            const grade3 = parseFloat(document.getElementById('grade3').value);
            if (!isNaN(grade1) && !isNaN(grade2) && !isNaN(grade3)) {
                const average = (grade1 + grade2 + grade3) / 3;
                resultDiv.textContent = `The final grade is: ${average.toFixed(2)}`;
            } else {
                resultDiv.textContent = 'Invalid input. Please enter numbers only.';
            }
        });
    }

    // Exercise 3: Weighted Final Grade
    if (currentUrl.includes('exercise3.html')) {
        const calculateButton = document.getElementById('calculate');
        const resultDiv = document.getElementById('result');
        calculateButton.addEventListener('click', function() {
            const weight1 = parseFloat(document.getElementById('weight1').value) / 100;
            const grade1 = parseFloat(document.getElementById('grade1').value);
            const weight2 = parseFloat(document.getElementById('weight2').value) / 100;
            const grade2 = parseFloat(document.getElementById('grade2').value);
            const weight3 = parseFloat(document.getElementById('weight3').value) / 100;
            const grade3 = parseFloat(document.getElementById('grade3').value);

            if (!isNaN(weight1) && !isNaN(grade1) && !isNaN(weight2) && !isNaN(grade2) && !isNaN(weight3) && !isNaN(grade3)) {
                const weightedGrade = grade1 * weight1 + grade2 * weight2 + grade3 * weight3;
                resultDiv.textContent = `The weighted final grade is: ${weightedGrade.toFixed(2)}`;
            } else {
                resultDiv.textContent = 'Invalid input. Please enter valid numbers.';
            }
        });
    }
        // Exercise 4: Time Converter
        if (currentUrl.includes('exercise4.html')) {
            const calculateButton = document.getElementById('calculate');
            const resultDiv = document.getElementById('result');
            calculateButton.addEventListener('click', function() {
                const hours = parseFloat(document.getElementById('hours').value);
                const minutes = parseFloat(document.getElementById('minutes').value);
                const seconds = parseFloat(document.getElementById('seconds').value);
    
                if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
                    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
                    resultDiv.textContent = `Total seconds: ${totalSeconds}`;
                } else {
                    resultDiv.textContent = 'Invalid input. Please enter numbers only.';
                }
            });
        }
    
        // Exercise 5: Calculate Velocity
        if (currentUrl.includes('exercise5.html')) {
            const calculateButton = document.getElementById('calculate');
            const resultDiv = document.getElementById('result');
            calculateButton.addEventListener('click', function() {
                const distance = parseFloat(document.getElementById('distance').value);
                const time = parseFloat(document.getElementById('time').value);
    
                if (!isNaN(distance) && !isNaN(time) && time !== 0) {
                    const velocity = distance / time;
                    resultDiv.textContent = `The velocity is: ${velocity.toFixed(2)} km/h`;
                } else if (time === 0) {
                    resultDiv.textContent = 'Error: Time cannot be zero.';
                } else {
                    resultDiv.textContent = 'Invalid input. Please enter numbers only.';
                }
            });
        }
    
        // Exercise 6: Invoice Calculator
        if (currentUrl.includes('exercise6.html')) {
            const calculateButton = document.getElementById('calculate');
            const resultDiv = document.getElementById('result');
            calculateButton.addEventListener('click', function() {
                const purchaseAmount = parseFloat(document.getElementById('purchaseAmount').value);
    
                if (!isNaN(purchaseAmount) && purchaseAmount >= 0) {
                    const discount = purchaseAmount * 0.10;
                    const amountWithDiscount = purchaseAmount - discount;
                    const vat = amountWithDiscount * 0.19;
                    const totalInvoice = amountWithDiscount + vat;
                    resultDiv.innerHTML = `Valor del IVA: ${vat.toFixed(2)}<br>
                    Monto del descuento: ${discount.toFixed(2)}<br>
                    Total de la Factura: ${totalInvoice.toFixed(2)}`;
    
                } else {
                    resultDiv.textContent = 'Invalid input. Please enter a valid amount.';
                }
            });
        }
         // Exercise 7: Investment Calculator
         if (currentUrl.includes('exercise7.html')) {
            const calculateButton = document.getElementById('calculate');
            const resultDiv = document.getElementById('result');
            calculateButton.addEventListener('click', function() {
                const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
                const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value) / 100; // Convert to decimal
                const investmentTermMonths = parseFloat(document.getElementById('investmentTermMonths').value);
    
                if (!isNaN(initialInvestment) && !isNaN(annualInterestRate) && !isNaN(investmentTermMonths) &&
                initialInvestment >= 0 && annualInterestRate >= 0 && investmentTermMonths >= 0) {
                  const monthlyInterestRate = annualInterestRate / 12;
                  let totalAmount = initialInvestment;
                  for (let i = 0; i < investmentTermMonths; i++) {
                      totalAmount += totalAmount * monthlyInterestRate;
                  }
                  const interestEarned = totalAmount - initialInvestment;
                    resultDiv.innerHTML = `Interés ganado: ${interestEarned.toFixed(2)}<br>
                    Cantidad total después de ${investmentTermMonths} meses: ${totalAmount.toFixed(2)}`;
    
                } else {
                    resultDiv.textContent = 'Invalid input. Please enter valid numbers.';
                }
            });
        }
        // Exercise 8: Sales Commission Calculator
        if (currentUrl.includes('exercise8.html')) {
            const calculateButton = document.getElementById('calculate');
            const resultDiv = document.getElementById('result');
            calculateButton.addEventListener('click', function() {
                const sale1 = parseFloat(document.getElementById('sale1').value);
                const sale2 = parseFloat(document.getElementById('sale2').value);
                const sale3 = parseFloat(document.getElementById('sale3').value);
                const baseSalary = parseFloat(document.getElementById('baseSalary').value);
    
                if (!isNaN(sale1) && !isNaN(sale2) && !isNaN(sale3) && !isNaN(baseSalary)) {
                  const totalSales = sale1+ sale2 + sale3;
                  const commission = totalSales*0.1
                  const totalEarnings = baseSalary + commission
                    resultDiv.innerHTML = `Comisión total ganada: ${commission.toFixed(2)}<br>
                    Cantidad total recibida en el mes: ${totalEarnings.toFixed(2)}`;
    
                } else {
                    resultDiv.textContent = 'Invalid input. Please enter valid numbers.';
                }
            });
        }
            // Exercise 9: Purchase Discount Calculator
            if (currentUrl.includes('exercise9.html')) {
                const calculateButton = document.getElementById('calculate');
                const resultDiv = document.getElementById('result');
                calculateButton.addEventListener('click', function() {
                    const totalPurchaseAmount = parseFloat(document.getElementById('totalPurchaseAmount').value);
        
                    if (!isNaN(totalPurchaseAmount) && totalPurchaseAmount >= 0) {
                        const discountPercentage = 0.15;
                        const discountAmount = totalPurchaseAmount * discountPercentage;
                        const finalAmount = totalPurchaseAmount - discountAmount;
                        resultDiv.textContent = `El monto final a pagar es: ${finalAmount.toFixed(2)}`;
                    } else {
                        resultDiv.textContent = 'Invalid input. Please enter a valid amount.';
                    }
                });
            }
                 // Exercise 10: Basic Calculator
                 if (currentUrl.includes('exercise10.html')) {
                    const calculateButton = document.getElementById('calculate');
                    const resultDiv = document.getElementById('result');
        
                    calculateButton.addEventListener('click', function() {
                        const num1 = parseFloat(document.getElementById('num1').value);
                        const num2 = parseFloat(document.getElementById('num2').value);
                        const operation = document.getElementById('operation').value;
                        let result;
        
                        if (!isNaN(num1)) {
                            switch (operation) {
                                case 'add':
                                    if (!isNaN(num2)) result = num1 + num2;
                                    break;
                                case 'subtract':
                                    if (!isNaN(num2)) result = num1 - num2;
                                    break;
                                case 'multiply':
                                    if (!isNaN(num2)) result = num1 * num2;
                                    break;
                                case 'divide':
                                    if (!isNaN(num2) && num2 !== 0) result = num1 / num2;
                                    break;
                                default:
                                    resultDiv.textContent = 'Invalid operation.';
                                    return;
                            }
                            resultDiv.textContent = isNaN(num2) ? 'The number 2 is not valid' : `Result: ${result.toFixed(2)}`;
                        } else {
                            resultDiv.textContent = 'The number 1 is not valid';
                        }
                    });
                }
});