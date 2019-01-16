
function pow(value, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result = result * value;
    }
    return result;
}