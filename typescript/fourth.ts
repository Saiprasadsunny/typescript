//optional parameters function

interface User {
    name: string;
    age: number;
    address?: string //Optional
}

let userInfo = function(user: User) {
   let info = "Hello, " + user.name + " Your Age is - " + user.age + " and Address is -" + user.address;
   return info;
}

let info = {
    name: "Jhonny",
    age: 28
};

console.log(userInfo(info));
