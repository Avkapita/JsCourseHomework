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
 //const array = [1, 2, 3, 4];//создан массив

var result, curValue, initialValue, prevValue;//объявлены переменные


function reducer(array, fn, initialValue) {//функция reducer объявляется с параметрами
	if (initialValue) {// если передан как аргумент initialValue
		prevValue = initialValue;//предыдущее значение равно initialValue.тогда curvalue будет следующее по массиву
			for (var i = 0; i < array.length; i++) {
				curValue = array[i];
				console.log(result);
				fn(prevValue, array, i);
		return result;
		}
	} else {// если не передан initialValue
		prevValue = array[0];//prevValue равен элементу с индексом 0 в массиве, а значит 1.
      
		for (var i = 1; i < array.length; i++) {
			curValue = array[i];
			console.log(result, curValue,prevValue, i);
			fn(prevValue, array, i);
			 //вызываем функцию сложения элементов - для каждого элемента массива с предыдущим значением.
			//на первой итерации prevValue=1, array[1] = 2. складываем, получаем 3. 3 записываем в prevValue.
			//на второй итерации prevValue=3, array[2] = 3. складываем, получаем 6, записываем в prevValue
			// на третей - prevValue = 6, array[3]=4. складываем, получаем 10.записываем в prevValue
			//условие дальше не срабатывает
		}
		return result;
	} 
};

function fn(prevValue, curValue, array, i) {
	console.log(result, curValue,prevValue, i);
			result = curValue + prevValue;
			prevValue = result;
			console.log(result, curValue,prevValue, i);
			return result;
}

reducer(array, fn);//вызываем функцию reducer и записываем результат вызова в result

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
