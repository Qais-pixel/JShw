let firstName = prompt("Введіть ваше ім'я:", "Анастасія");
let middleName = prompt("Введіть ваше по-батькові:", "Сергіївна");
let age = prompt("Введіть ваш вік:", "24");

console.log("Ім'я:", firstName);
console.log("По-батькові:", middleName);
console.log("Вік:", age + " роки");


let person = firstName + " " + middleName + ", " + age + " роки";
console.log(person);
