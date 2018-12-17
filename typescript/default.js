//default parameters
var discount = function (price, rate) {
    if (rate === void 0) { rate = 0.40; }
    return price * rate;
};
//CALCULATE DISCOUNT
console.log(discount(500)); // Result - 200
//CALCULATE DISCOUNT
console.log(discount(500, 0.45)); // Result - 225
