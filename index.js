const Calculate = {
    factorial(input) {
        let output = 1;

        for (let i = input; i > 0; i--) {
            output *= i;
        }

        return output;
    }
}

module.exports = Calculate;


