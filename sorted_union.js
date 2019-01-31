function uniteUnique(arr) {
    let arrayArgs = [];
    let arrayFlat = [];
    let noDuplicate = [];
    for (let x = 0; x < arguments.length; x++) {
        arrayArgs.push(arguments[x]);
    }

    for (let firstLoop = 0; firstLoop < arrayArgs.length; firstLoop++) {
        for (let indexNumber = 0; indexNumber < arrayArgs[firstLoop].length; indexNumber++) {
            arrayFlat.push(arrayArgs[firstLoop][indexNumber]);
        }
    }

    for (let duplicate = 0; duplicate < arrayFlat.length; duplicate++) {
        if (noDuplicate.indexOf(arrayFlat[duplicate]) === -1) {
            noDuplicate.push(arrayFlat[duplicate]);
        }
    }
    return noDuplicate;
}
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
