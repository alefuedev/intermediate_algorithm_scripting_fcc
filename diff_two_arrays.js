function diffArray(arr1, arr2) {
    var newArr = [];
    for (let first = 0; first < arr1.length; first++) {
        if (arr2.includes(arr1[first]) == false) {
            newArr.push(arr1[first]);
        }
    }
    for (let second = 0; second < arr2.length; second++) {
        if (arr1.includes(arr2[second]) == false) {
            newArr.push(arr2[second]);
        }
    }
    console.log(newArr);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
