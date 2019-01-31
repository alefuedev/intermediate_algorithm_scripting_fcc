function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    for (let bg = arr[0]; bg < arr[1] + 1; bg++) {
        result.push(bg);
    }
    result = result.reduce((acc, cval) => acc + cval, 0);

    console.log(result);
}
sumAll([5, 10]);
