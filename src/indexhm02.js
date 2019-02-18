/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
	for (var i = 0; i < array.length; i++) // перебираем элементы массива
		var result = fn(array[i], i, array);
		return result; // для каждой итерации вызываем функцию fn и присваиваем значение переменной result;
	}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
/*var array=[1,2,3,4,5]; 
function fn(a) {
	var sum = a*2;
	return sum;
};
var resultArray = [];
map(array, fn);*/

function map(array, fn) {
	for (var i = 0; i < array.length; i++) {
		
		resultArray[i] = fn(array[i]);
	}
	return resultArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
 /*var arr=[1,2,3,4,5]; 
function fn(prevValue, array[i], i, array) {
	var res = array[i]+prevValue;
	console.log(res);
	return res;
};
reduce(arr, fn, 2);*/


/*
function reduce(array, fn, initial) {
	if (!initial) {
		prevValue = array[0];
		for (var i=1; i<array.length; i++) {
			fn(prevValue, array[i], i, array) {};
			console.log(res);
		}
	} else {
		prevValue = initial;
		for (var i = 0; i<array.length; i++) {
			fn(prevValue, array[i], i, array) {};
			console.log(res);
		}
	}
*/

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
function upperProps(obj) {
	var resultArray = [];
		for (var key in obj) {
			var result = key.toUpperCase();
          	resultArray.push(result);
      	}
	return resultArray;
	} 
/*upperProps(a);*/


/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

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
