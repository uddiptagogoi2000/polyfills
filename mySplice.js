Array.prototype.mySplice = function (
    start = this.length,
    deleteCount,
    ...args
) {
    if (this.length === 0) return this; // IF THE ARRAY IS EMPTY
    if (deleteCount === undefined) {
        // IF DELETECOUNT WAS NOT PROVIDED
        deleteCount = this.length - start;
    }

    // IF -VE START WAS PROVIDED, CONVERT -ve START to +ve
    start = start < 0 ? this.length + start : start;
    if (start < 0) start = 0;

    // TEMP ARRAY TO STORE REMAINING ELEMENTS
    const temp = [];

    // IF START IS VALID
    if (start < this.length) {
        for (let i = start + deleteCount; i < this.length; i++) {
            temp.push(this[i]);
        }
        this.length = start;
    }

    // THIS IS TO PUSH ALL THE USER INPUT ELEMENTS
    if (args.length) {
        for (let val of args) {
            this.push(val);
        }
    }

    // REMAINING ELEMENTS ARE PUSHED THE RESULTANT ARRAY
    for (let val of temp) {
        this.push(val);
    }

    // CLEARING THE TEMP ARRAY
    temp.length = 0;

    return this;
};

const fruits = ["Banana", "Orange", "Apple", "Mango"];
