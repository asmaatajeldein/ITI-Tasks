var obj = {
    name: "Asmaa",
    age: "22",
    city: "Port Said",
    [Symbol.iterator]: objIterator
}

function objIterator() {
    var entriesArr = Object.entries(obj);
    var index = -1;
    var iterator = {
        next: function() {
            index = index + 1;
            if(index < entriesArr.length) {
                return {
                    value: entriesArr[index],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
    return iterator;
}

// TESTING //////////////////////////////////////

for(const x of obj) {
    console.log(x);
}

console.log(...obj)