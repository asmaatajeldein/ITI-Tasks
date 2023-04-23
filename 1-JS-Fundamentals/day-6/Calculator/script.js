

function EnterEqual(){
    var Input = document.getElementById("Answer");
    var regInput = /^[0-9()+\-*.\/]*$/;

    if (!regInput.test(Input.value)){
        Input.value = 'Invalid Operation.';
    } else {
        Input.value = eval(Input.value);
    }
}

function EnterNumber(Number) {
    var Input = document.getElementById("Answer");
    Input.value += Number;
}

function EnterOperator(Operator) {
    var Input = document.getElementById("Answer");
    Input.value += Operator;
}

function EnterClear() {
    var Input = document.getElementById("Answer");
    Input.value = "";
}