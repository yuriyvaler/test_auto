function avg(arr = []) {
    // should return avg 0 for empty array
    if (!Array.isArray(arr)) return 0;
    // should return avg 0 for empty array
    if (arr.length === 0) return 0;
    // avg calculation
    //
    let sum = 0, el = 0; //
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue;
        el++; //
        sum += arr[i];
    }
    // should return 0 for all non numbers
    if (el === 0) return 0;
    return sum / el;
    // return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
module.exports = { avg };