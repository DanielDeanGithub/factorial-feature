const Calculate = {
    factorial(input) {
        for (let i = input - 1; i > 0; i--) {
            input *= i;
        }

        return input;
    }
}

module.exports = Calculate;


