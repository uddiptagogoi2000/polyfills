Array.prototype.mySlice = function (start = 0, end = this.length) {
    const slice = [];
    // -ve cases
    // case 1: "one arg passed / start is passed"
    start = start < 0 ? this.length + start : start; // hash start value -> converting -ve to corresponding +ve;
    end = end < 0 ? this.length + end : end;
    // start = !start || 0; // if start is out of bound i.e; start is less than 0
    if (start > end) {
        start = 0;
        end = 0;
    }
    if (start < 0) {
        // after hasing if start is still -ve
        start = !start || 0; // if start is out of bound i.e; start is less than 0
    }

    // +ve cases
    // case 1: "no arg passed"
    // case 2: "arg start passed / only one arg"
    // case 3: "both the start and end were passed"
    for (let i = start; i < end; i++) {
        slice.push(this[i]);
    }

    return slice;
};
