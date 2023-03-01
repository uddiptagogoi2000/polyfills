Array.prototype.mySlice = function (start = 0, end = this.length) {
    const slice = [];
    // -ve cases
    start = start < 0 ? this.length + start : start; // hash start value -> converting -ve to corresponding +ve;
    end = end < 0 ? this.length + end : end;
    if (start > end) {
        start = 0;
        end = 0;
    }
    // after hasing if start is still -ve
    start = start < 0 ? 0 : start;

    // +ve cases
    // case 1: "no arg passed"
    // case 2: "arg start passed / only one arg"
    // case 3: "both the start and end were passed"
    for (let i = start; i < end; i++) {
        slice.push(this[i]);
    }

    return slice;
};

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.mySlice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.mySlice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.mySlice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.mySlice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.mySlice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.mySlice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
