var flagOp = false,
    d = document.getElementById("d");

function c(val) {
    d.value = val;
}

function v(val) {
    if (flagOp) {
        if (val !== "+" && val !== "-" && val !== "*" && val !== "/") {
            d.value += val;
        }
    } else {
        if (val == "+" || val == "-" || val == "*" || val == "/") {
            flagOp = true;
        }
        d.value += val;
    }
}

function e() {
    try {
        c(eval(d.value))
    } catch (e) {
        c('Error')
    }
}