const Calculate = {
    factorial(input) {
        if (typeof(input) !== "number") throw new TypeError("Error: input type isn't a number.");

        if (input === 0) return 1;

        for (let i = input - 1; i > 0; i--) {
            input *= i;
        }

        return input;
    }
}

module.exports = Calculate;


