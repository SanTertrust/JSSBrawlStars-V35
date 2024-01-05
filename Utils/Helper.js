class Helpers {
    randomStringDigits() {
        const lettersAndDigits = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        const length = 40;
        for (let i = 0; i < length; i++) {
            result += lettersAndDigits.charAt(Math.floor(Math.random() * lettersAndDigits.length));
        }
        return result;
    }

    randomID() { // do not ask why
        const length = 5;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return parseInt(result);
    }
}

module.exports = Helpers;