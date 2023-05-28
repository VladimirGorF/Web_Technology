// // alert("Привет, сосиски!");    // show in website
// let message = "string";      // Присваиваем значение переменной 
// message = 123;    // no matter what type of variable

// n = 12;


// var n = 25;

// n = 5 / 0;  // gives "infinity""
// n = "str" / 5;  // gives "NaN" -  not a number
// a = 300;
// b = 200;
// n = `Hello , ${a}!`;   //  revers quotes gives opportunity to include a variable
// n = `Результат равен: ${a + b}`;
// compare = 5 > 2;
// n = compare;

// let b = undefined;     //  у меня это не работает
// alert(b);

// alert(n);
// alert(typeof n);

// let test = prompt("Test ivanovich");

// result = prompt("Заголовок", "Начальное значение ввода");
// alert(result);

// rightness = confirm("Are you right always?");
// alert(rightness);

// // number = parseInt(prompt("Вводите данные", "Числишко какое-нибудь"));

// // alert(number * 100);

// let u = 2;
// alert(u);
// console.log(u);




// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// const num1 = Number.parseFloat(prompt("Ведите число", "От 0 до 100"));
// const num2 = Number.parseFloat(prompt("Ведите второе число", "От 0 до 100"));
// // alert(`Результат сложения чисел ${num1} + ${num2} равен ${num1 + num2}`);

// const mySum = sum(num1, num2);

// alert(mySum);

// function sum(num1, num2) {
//     return arg1 + arg2;
// }

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const rightness = confirm("How do you live?");
// if (rightness == true) {
//     alert("So, we are going to your place!");
// } else {
//     alert("Well, hold there!");
// };



const product = prompt("Введите фрукт").toLowerCase;

switch (product) {
    case "мандарины":
        alert('Мандарины стоят 100 руб/кг.');
        break;
    case "бананы":
    case "груши":
        alert('Бананы и груши стоят 70 руб/кг.');
        break;
    default:
        alert('Нет такого продукта.');
    // break;

};


