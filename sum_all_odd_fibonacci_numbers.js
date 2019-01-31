function sumFibs(num) {
    if (num == 1) {
        return 1;
    } else {
        let array = [1, 1];
        for (let x = 0; x < num; x++) {
            array.push(array[x + 1] + array[x]);
        }
        let lessThanNum = [];
        array.forEach(function(number) {
            if (number <= num) {
                lessThanNum.push(number);
            }
        })
        let odds = lessThanNum.filter(number => number % 2 != 0);
        let result = odds.reduce(getSum);

        function getSum(total, num) {
            return total + num;
        }
        return result;
    }
}
sumFibs(75025);
