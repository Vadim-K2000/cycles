'use strict'

//while
// 1. Вывести # столько раз, сколько указал пользователь.

function enterLattice(n) {
    let i = 0;
    while ( i++ < n ) {
        console.log( '#' );
    }
}

//2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
function func1(n) {
    let i = 0;
    let result = n;
    while ( i <= result ) {
        console.log( result-- );
    }
}
//3. Запросить число и степень. Возвести число в указанную степень и вывести результат.

function power(num1, num2) {
    let i = 0;
    let res = 1;
    while (num2 > i++ ) {
        res *= num1;
    }
    return res;
}

//4. Запросить 2 числа и найти все общие делители.






