findCombo = (userNum) => {
    const numbers = [1, 2, 3, 4, 5];
    let found = false;

    for (let i = 0; i < numbers.length; i++) {
        const comp = userNum - numbers[i];
        if (numbers.includes(comp) && comp !== numbers[i]) {
            console.log(`Combination: ${numbers[i]} + ${comp}`);
            found = true;
        }
    }

    if (!found) {
        console.log("No combinations found that sum to the provided number.");
    }
}

findCombo(6)