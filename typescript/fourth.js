//optional parameters function
var userInfo = function (user) {
    var info = "Hello, " + user.name + " Your Age is - " + user.age + " and Address is -" + user.address;
    return info;
};
var info = {
    name: "Jhonny",
    age: 28,
    address: "Jhonnny"
};
console.log(userInfo(info));
