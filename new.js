function singleDigit(num) {
    while (num > 9) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        num = sum;
    }

    return num;
}

function calculate() {

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    // Validation
    if (
        isNaN(day) ||
        isNaN(month) ||
        isNaN(year)
    ) {
        alert("Please enter all values.");
        return;
    }

    if (day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }

    if (year < 1900) {
        alert("Please enter a valid year.");
        return;
    }

    // Compatibility numbers
    const compatibility = {
        1: [1, 4, 5, 7, 9],
        2: [1, 2, 5, 6, 8],
        3: [3, 6, 7, 9],
        4: [1, 2, 4, 7, 8],
        5: [2, 3, 5, 7, 9],
        6: [1, 2, 3, 5, 6, 9],
        7: [1, 2, 4, 8],
        8: [1, 2, 4, 6, 8],
        9: [1, 2, 3, 6, 7]
    };

    // Calculate Mulank
    const mulank = singleDigit(day);

    // Mulank + Birth Month
    const step2 = singleDigit(mulank + month);

    // Calculate target year's single digit
    const yearNumber = singleDigit(year);

    // Marriage Year Number
    const marriageNumber = singleDigit(yearNumber + step2);

    // Get compatible numbers
    const compatibleNumbers = compatibility[mulank];

    // Check compatibility
    const isCompatible =
        compatibleNumbers.includes(marriageNumber);

    let message = `
        <strong>Birth Mulank:</strong> ${mulank}<br>
        <strong>Mulank + Month:</strong> ${step2}<br>
        <strong>Target Year:</strong> ${year}<br>
        <strong>Year Number:</strong> ${yearNumber}<br>
        <strong>Marriage Year Number:</strong> ${marriageNumber}<br>
        <strong>Compatible Numbers:</strong> 
        ${compatibleNumbers.join(", ")}
        <br><br>
    `;

    if (isCompatible) {
        message += `
            <span style="color: green; font-size: 20px;">
                ✅ This year is a compatible wedding year.
            </span>
        `;
    } else {
        message += `
            <span style="color: red; font-size: 20px;">
                ❌ This year is not a compatible wedding year.
            </span>
        `;
    }

    document.getElementById("result").innerHTML = message;
}
