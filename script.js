// Задание 1
// let userAge = prompt('Введите свой возраст', '')
// if (userAge >= 0 && userAge < 12) {
//     alert('Вы ребенок')
// }
// if (userAge >= 12 && userAge < 18) {
//     alert('Вы подросток')
// }
// if (userAge >= 18 && userAge < 60) {
//     alert('Вы взрослый')
// }
// if (userAge >= 60) {
//     alert('Вы пенсионер')
// }
// if (userAge < 0) {
//     alert('Неправильно ввели данные')
// }


// Задание 2
// let key = +prompt('Введите число от 0 до 9', '')
// switch (key) {
//     case 1:
//         alert('!')     
//         break;
//     case 2:
//         alert('@')     
//         break;
//     case 3:
//         alert('#')     
//         break;
//     case 4:
//         alert('$')     
//         break;
//     case 5:
//         alert('%')     
//         break;
//     case 6:
//         alert('^')     
//         break;
//     case 7:
//         alert('&')     
//         break;
//     case 8:
//         alert('*')     
//         break;
//     case 9:
//         alert('(')     
//         break;
//     case 0:
//         alert(')')     
//         break;
//     default:
//         alert('Неправильно ввели данные')
//         break;
// }


// Задание 3
// let value = prompt('Введите трехзначное число', '')
// let razr1 = value % 10
// let razr2 = (value - razr1) / 10 % 10
// let razr3 = (value - (value % 100)) / 100
// if (razr1 == razr2 || razr2 == razr3 || razr1 == razr3) {
//     alert('В этом числе есть одинаковые цифры')
// } else {
//     alert('В этом числе нет одинаковых цифр')
// }


// Задание 4
// let year = prompt('Введите год', '')
// if ((year % 400) == 0 || (year % 4) == 0 && (year % 100) != 0){
//     alert('Год високосный')
// } else {
//     alert('Год невисокосный')
// }


// Задание 5
// let value = prompt('Введите пятизначное число', '')
// let razr1 = value % 10
// let razr2 = (value - razr1) / 10 % 10
// let razr3 = (value - razr1 - razr2*10) / 100 % 10
// let razr4 = (value - razr1 - razr2*10 - razr3*100) / 1000 % 10
// let razr5 = (value - razr1 - razr2*10 - razr3*100 - razr4*1000) / 10000 % 10
// if (razr1 == razr5 && razr2 == razr4) {
//     alert('Число является палиндромом')
// } else {
//     alert('Число не является палиндромом')
// }


// Задание 6
// const usdeur = 0.93
// const usduah = 36.93
// const usdazn = 1.70
// let usd = +prompt('Введите количество USD', '')
// let currency = prompt('В какую валюту хотите перевести? EUR, UAH, AZN.', '')
// switch (currency) {
//     case "EUR":
//         alert('Это будет ' + (usd * usdeur) + ' EUR')     
//         break;
//     case "UAH":
//         alert('Это будет ' + (usd * usduah) + ' UAH')    
//         break;
//     case "AZN":
//         alert('Это будет ' + (usd * usdazn) + ' AZN')     
//         break;
//     default:
//         alert('Неправильно ввели данные')
//         break;
// }

// Задание 7
// let total = prompt('Введите сумму покупки, руб.', '')
// if (total >= 200 && total < 300) {
//     alert('Сумма к оплате ' + total * .97 + ' руб.')
// }
// if (total >= 300 && total < 500) {
//     alert('Сумма к оплате ' + total * .95 + ' руб.')
// }
// if (total >= 500) {
//     alert('Сумма к оплате ' + total * .93 + ' руб.')
// }
// if (total < 200 && total > 0) {
//     alert('Сумма к оплате ' + total + ' руб.')
// }
// if (total <= 0) {
//     alert('Неправильно ввели данные')
// }


// Задание 8
// const pi = 3.1415926
// let circleLenght = prompt('Введите длину окружности', '')
// let squarePerimeter = prompt('Введите периметр квадрата', '')
// let squareSide = squarePerimeter / 4
// let circleDiameter = circleLenght / pi * 2
// if (squareSide > circleDiameter) {
//     alert('Окружность впишется в квадрат')
// } else {
//     alert('Окружность не впишется в квадрат')
// }


// Задание 9
// let sum = 0
// let value1 = prompt('Какой оператор не является логическим: 1. &&   2. ||  3.++  ?')
// if (value1 == 3) {
//     sum = sum + 2
// }
// let value2 = prompt('Какой оператор не является логическим: 1. &&   2. ||  3.++  ?')
// if (value2 == 3) {
//     sum = sum + 2
// }
// let value3 = prompt('Какой оператор не является логическим: 1. &&   2. ||  3.++  ?')
// if (value3 == 3) {
//     sum = sum + 2
// }
// alert('Вы набрали ' + sum + ' баллов')


// Задание 10

let day = +prompt('Введите день')
let month = +prompt('Введите месяц от 1 до 12')
let year = +prompt('Введите год')
day = day++
if (day == 32) {
    day = 1
    month = month++
    if (month == 13) {
        month = 1
        year = year++
    }
}
if ((day == 31) && (month == 4 || month == 6 || month == 9 || month == 11)) {
    day = 1
    month = month++
}
if ((day == 30) && (month == 2)) {
    day = 1
    month = month + 1
}
if ((day == 29) && (month == 2) && ((year % 400) == 0 || (year % 4) == 0 && (year % 100) != 0)) {
    day = day++
} else {
    day = 1
    month = month++
}
alert('Следующая дата ' + day + "." + month + "." + year)