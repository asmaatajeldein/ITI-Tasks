var obj = {
    name: "abcdefj",
    address: "foo",
    age: 25
}

var proxyHandler = {
    get:function(target, prop, proxy) {
        if(!(prop in target)) {
            throw(`Property "${prop} does not exist"`);
        }
        return target[prop];
    },

    set:function(target, prop, value, proxy) {
        if(!(prop in target)) {
            throw(`Property "${prop} does not exist"`);
        }

        if(prop === "name" && ((typeof value !== "string") || value.length !== 7)) {
            throw("name property must be a string of 7 characters.");
        } else if (prop === "address" && (typeof value !== "string")) {
            throw("address property must be a string.");
        } else if (prop === "age" && (isNaN(value) || !(value > 25) || !(value < 65))) {
            throw("age property must be a number between 25 and 60.");
        }
        return target[prop] = value;
    }
}

var objProxy = new Proxy(obj, proxyHandler);

