function destroyer(arr) {
    let array = [...arr];
    let args = [];
    let result = [];
    for (let checkArgs = 0; checkArgs < arguments.length; checkArgs++) {
        if (arguments[checkArgs] instanceof Array == false) {
            args.push(arguments[checkArgs]);
        }
    }
    array.forEach(function(item) {
        if (args.includes(item) == false) {
            result.push(item);
        }
    });
    args.forEach(function(item) {
        if (array.includes(item) == false) {
            result.push(item);
        }
    });
    console.log(result);
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
