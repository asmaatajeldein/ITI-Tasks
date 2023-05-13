
function CustomObject1() {
    this.description = "Hello";
    this.name = "World";

    // getSetGen as function,
    // generates setters and getters for the properties of the caller object
    this.getSetGen = function () {

        var self = this; // this-pattern, to avoid the problem of the caller (window) of the self-invoked function

        // loop through the object properties
        for(var key in self) {
            // check if the property is not a function/method
            if(typeof self[key] === "function") {
                continue;
            }

            // create a new variable that captures the value of key
            (function () {
                var propValue = self[key];

                Object.defineProperty(self, key, {
                    get: function() {
                        return propValue;
                    },
                    set: function(value){
                        propValue = value;
                    }
                })
            })();
        }
    }
}

// var obj = new CustomObject1();
// obj.getSetGen();
// var user = {name: "Ali", age: 10};
// console.log(user);
// obj.getSetGen.call(user);
// console.log(user);


////////////////////////////////////////////////////////////////////
// CREATING GETTERS AND SETTERS MANUALLY ///////////////////////////
////////////////////////////////////////////////////////////////////

function CustomObject2() {
    this.description = "Hello";
    this.name = "Asmaa";

    // getSetGen as function,
    // generates setters and getters for the properties of the caller object
    this.getSetGen = function () {

        // get keys and values stored in the object
        var entries = Object.entries(this);

        // loop through them
        for(var i = 0; i < entries.length; i++) {

            // check if the property is not a function/method
            if(typeof entries[i][1] == "function") {
                continue;
            }

            // create function name based on the property name
            var funcName = entries[i][0].charAt(0).toUpperCase() + entries[i][0].slice(1);

            // create a setter
            this[`set${funcName}`] = function (value) {
                this[`${entries[i][0]}`] = value;
            }

            // create a getter
            this[`get${funcName}`] = function (value) {
                return this[`${entries[i][0]}`];
            }
        }
    }
}

// var obj = new CustomObject2;
// obj.getSetGen()
// var user = {name: "Ali", age: 10};
// console.log(user);
// obj.getSetGen.call(user);
// console.log(user);