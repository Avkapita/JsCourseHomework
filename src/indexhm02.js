/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
	for (var i = 0; i < array.length; i++) {
		var result = fn(array[i], i, array);
	}

	return result; 
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
//var array=[1,2,3,4,5]; 
/*
function fn(a) {
	var sum = a*2;
	return sum;
};
*/
var resultArray = [];
function map(array, fn) {
	for (var i = 0; i < array.length; i++) {
		
		resultArray[i] = fn(array[i]);
	}

	return resultArray;
}

map(array, fn);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */

function fnr(prevValue) {

			for (var i = 0; i < array.length; i++) {
              console.log(curItem,prevValue);
				curItem = array[i + 1];
               console.log(curItem,prevValue);
            	prevValue = prevValue + curItem;
               console.log(curItem,prevValue);
     		}
			return prevValue;
		}

function reducing(initialValue, array, fnr) {
   console.log(array);
	if (initialValue) {
		prevValue = initialValue;
		
		fnr();
	} else {
		prevValue = array[0];

		fnr();
	} 
}

var arr = [1, 2, 3, 4, 5];
reducing(0, (...arr), fnr);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
/*    var a = { 
    	name: 'Сергей', 
    	lastName: 'Петров'};
    */
var resultArr = [];

function upperProps(obj) {
		for (var key in obj) {
			var result = key.toUpperCase();
          	resultArr.push(result);
      	}

	return resultArr;
} 
/* upperProps(a);*/

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
 var array = [1,2,3,4,5];	
 var newArray = [];
function slice(array, from, to) {
	newArray.length = to;
	for (i = 0; i < newArray.length; i++) {
		newArray[i] = array[from + i];
		return newArray;
	}
	return newArray;
}
slice(newArray, 2, 2);


/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
