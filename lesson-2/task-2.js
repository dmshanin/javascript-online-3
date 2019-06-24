/**
 # Задача 2

 Перепишите `if..else` с использованием нескольких операторов `?`.

 Для читаемости — оформляйте код в несколько строк.

 ```js
 var message;

 if (login == 'Pitter') {
  message = 'Hi';
} else if (login == 'Owner') {
  message = 'Hello';
} else if (login == '') {
  message = 'unknown';
} else {
  message = '';
}
 ```
 */

// Если код требуется поправить именно так, как описано в задании (только переписать с использованием операторв ?), то выглядеть это будет так:

var message = (login == 'Pitter') ? 'Hi' :
    (login == 'Owner') ? 'Hello' :
    (login == '') ? 'unknown' :
    '';

console.log(message);

// Если же требуется чтобы он запускался без ReferenceError, то нужно объявить login заранее, либо я бы проверял typeof login на 'undefined'.
// И еще я бы использовал проверку на безусловное равенство '===', для более предсказуемого поведения.