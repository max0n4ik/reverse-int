module.exports = function reverse(n) {
    let arr = n.toString().split("");
    const arr2 = n.toString().split("");
    let i = 0;
    let j = 1;
    if (arr2[0] == "-") {
        arr.splice(0, 1);
        arr2.splice(0, 1);
        while (arr.length > i) {
            arr[i] = arr2[arr2.length - j];
            i++;
            j++;
        }
        return arr.join("");
    } else {
        while (arr.length > i) {
            arr[i] = arr2[arr2.length - j];
            i++;
            j++;
        }
        return arr.join("");
    }
};
