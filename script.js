// 1. Написать ф-ю, реализующую возведение числа в произвольную степень, используя циклы
    const pow = function(a, b) {
    const inicialNumber = a;
    if (b === 0) return 1;
    for (let i = 1; i < b; i++) {
        a *= inicialNumber;
    }
    return a;
}

console.log(pow(2,6));

    //2. Разбить задачу с угадыванием числа на ф-и. Первая функция - циклический запуск запроса и проверка на завершенность. Вторая функция - запрос и проверка на соответствие со сгенерированным числом

const run = function(userNumber, random) {

    do {   
        userNumber = prompt("Угaдайте число от 1 до 10");
        if (!userNumber) break;   
        if (userNumber > 10) {
            alert("Введите число меньше 10!!!"); 
        }
        else if (+userNumber === random) {
            console.log(userNumber);
            alert("Вы угадали!!!"); 
            break;
        } else {
            alert("Вы не угадали!!!"); 
        } 
    } while (!(+userNumber === random))
}

const request = function() {
    let userNumber;
    let random = Math.floor(Math.random() * (10-1)) + 1; 
    console.log(random);
    run(userNumber, random);
}
request();


