function myReplace(str, before, after) {
    str = str.split(" ");
    let indexBefore = str.indexOf(before);
    let regex = /^[A-Z]/;
    if (regex.test(str[indexBefore])) {
        let caps = after.charAt(0).toUpperCase() + after.slice(1)
        str.splice(indexBefore, 1, caps)
        return str.join(" ");
    } else {
        str.splice(indexBefore, 1, after);
        return str.join(" ");
    }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
