export function calculateTotal(quantity, term) {
    // Calcular la cantidad del préstamo:
    /*
        - Cantidades:
            1. 0 - 1000 = 25%
            2. 1001 - 5000 = 20%
            3. 5001 - 10000 = 15%
            4. +10000 = 10%
    */
    let totalQuantity,
        totalTerm = 0;

    if (quantity <= 1000) {
        totalQuantity = quantity * .25;
    } else if (quantity>1000 && quantity<=5000) {
        totalQuantity = quantity * .20;
    } else if (quantity>5000 && quantity<=10000) {
        totalQuantity = quantity * .15;
    } else {
        totalQuantity = quantity * .10;
    }

    // Calcular el plazo del pago del préstamo:
    /*
        - Plazo:
            1. 3 meses = 5%
            2. 6 meses = 10%
            3. 12 meses = 15%
            4. 24 meses = 20%
    */
    switch(term) {
        case 3:
            totalTerm = quantity * .05;
            break;
        case 6:
            totalTerm = quantity * .10;
            break;
        case 12:
            totalTerm = quantity * .15;
            break;
        case 24:
            totalTerm = quantity * .20;
            break;
        default:
            break;
    }

    return totalTerm + totalQuantity + quantity;
}