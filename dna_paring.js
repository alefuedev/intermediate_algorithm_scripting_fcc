function pairElement(str) {
    str = str.split("");
    let dna = [];
    let size = str.length;
    for (let single = 0; single < size; single++) {
        if (str[single] == "G") {
            dna.push(["G", "C"]);
        } else if (str[single] == "C") {
            dna.push(["C", "G"]);
        } else if (str[single] == "A") {
            dna.push(["A", "T"]);
        } else if (str[single] == "T") {
            dna.push(["T", "A"]);
        }
    }
    return dna;
}
pairElement("ATCGA");

