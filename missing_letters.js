function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (str == alphabet) {
        return undefined;
    } else {
        let listChar = str.split("");
        let nums = [];
        let last = [];
        let num;
        for (let j = 0; j < listChar.length; j++) {
            nums.push(listChar[j].charCodeAt(0));
        }
        for (let x = 0; x < nums.length; x++) {
            if (nums[x] < nums[x + 1] && nums[x + 1] - nums[x] == 1) {

            } else {
                last.push(nums[x]);
            }
        }
        num = last[0] + 1;
        let result = String.fromCharCode(num);
        return result;
    }
}
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
