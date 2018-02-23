/*

let years = [1990, 1996, 1994, 1987, 2000, 2015];

function arrCalc (arr, fn) {
	let newArr = [];
	for (i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

function calculateAge (birthYear) {
	return 2018 - birthYear;
}

function isFullAge (a) {
	if (a >= 18) {
		return true;
	} else {
		return false;
	}
}


let ages = arrCalc(years, calculateAge);
console.log(ages);
console.log(arrCalc(ages, isFullAge));

/*
function interviewQuestions (job) {
	if (job === "designer") {
		return function (name) {
			console.log(" You are a " + name + "?" + " Good for you!");
		}
	}
	if (job === "student") {
		return function () {
			console.log(" You are a " + job + "?" + " Get a job and a life!");
		}
	}
}
*/

/*
function interviewQuestions (job) {
	return function (name) {
		if (job === "designer") {
			console.log(" You are a " + job + ", " + name + "?" + " Good for you!");
		} else if (job === "student") {
			console.log(" You are a " + job + ", " + name + "?" + " Get a job and a life!");
		}
	}
}

let designer = interviewQuestions("designer");
designer("Josh");

*/



// 0. Write a function that retuns "Hello World!" 
// i.e., Q0() returns "Hello World"

/*
var Q0 = function () {
	return "Hello World!";
};
*/

// 1. Write a function that returns number 7.

/*
let returnFunction = function () {
	return 7;
}

console.log(returnFunction());
*/

// 2. Write a function that returns the same number that takes as a parameter
// i.e., Q2(7) returns 7.

/*
let returnFunction = function (number) {
	return number;
}

console.log(returnFunction(5));
*/

// 3. Write a function that returns the a function that returns 7.
// i.e., Q3()() returns 7

/*
function neki () {
	return function () {
		return 7;
	}
}

console.log(neki()());
*/

// 4. Write a function that returns the a function that returns the number that
// was passed to the first function. i.e., Q3(7)() === 7.

/*
function a (num) {
	return function () {
		return num;
	}
}

let one = a(1);
console.log(one());
console.log(a(5)());
*/

// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, i.e., Q5(7)() === 8.

/*
function a (num) {
	return function () {
		return num + 1;
	}
}

console.log(a(21)());
*/

// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, but increases by one each 
// time it is called, i.e.,
// var fn = Q5(7);
// fn() //returns 8.
// fn() //returns 9.

/*

function a (num) {
	let counter = 0;
	return function () {
		counter++;
		return num + counter;
		
		
	}
}

let b = a(3);

console.log(b());
console.log(b());
console.log(b());

*/


// 6. Write a function that returns a function that returns one more than the
// number it returned last time, starting with 1. i.e., 

// var fn = Q5();
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.

/*
function a (num) {
	let counter = 0;
	return function () {
		counter++;
		return num + counter;


	}
}


let start = a(0);
console.log(start());
console.log(start());
console.log(start());
console.log(start());
console.log(start());
*/

// 6. Write a function that returns a new number each time it is called, i.e., 
// var fn = Q6; 
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.
// HINT: IIFE



// 7. Write a function that returns the next element in the fabonicci sequence 
// each time it is called, i.e., 
// var fn = Q7;
// fn(); //returns 1
// fn(); //returns 2
// fn(); //returns 3
// fn(); //returns 5

// 8. Write a constructor function that returns an object  with two methods, 
// getName() and setName() that allow you to change the name, i.e., 
// var person = new Q8('foo');
// person.getName() === 'foo' //true
// person.setName() = 'bar'
// person.getName() === 'bar' //true

/* TODO */

// 9. Write a function that prints the current time to the console once every
// second after it is called. HINT: setInterval

/* TODO */

// A. Write a function that prints the current time to the console once every
// second after it is called, but stops after printing output 4 times, i.e,
// QA() //starts timer
// prints 22:40:00 GMT-0500 (Central Daylight Time)
// prints 22:40:01 GMT-0500 (Central Daylight Time)
// prints 22:40:03 GMT-0500 (Central Daylight Time)
// prints 22:40:05 GMT-0500 (Central Daylight Time)
// timer automatically stops.
// HINT: clearInterval

/* TODO */

// B. Write a constructor function that returns an object that represents 
// a stopwatch, i.e., 
// var stopwatch = new QB();
// stopwatch.start() => starts timer
// stopwatch.getElapsedTime() => displays number of seconds since timer started
// stopwatch.stop() => stops timer
// stopwatch.ElapsedTime => displays number of seconds since timer started
// stopwatch.start() => resumes timer

/* TODO */

// C. Write a constructor function that takes a name and  returns an object 
// that represents a Person with that name. Person has only 1 property Name. 
// The object must have a method called getNumberOfPeopleCreatedThusFar() that 
// returns the number of people ever created with this constructor function. 
// i.e, 
// var a = new QC();
// a.getNumberOfPeopleCreatedThusFar() //1
// var b = new QC();
// a.getNumberOfPeopleCreatedThusFar() //2
// b.getNumberOfPeopleCreatedThusFar() //2
// CONSTRAINT: don't use prototype inheritance. 

/* HINT: 
// This is the equivalent of the following C# class:

class QC 
{
  private static int numberOfInstances;

  public QC()
  {
    numberOfInstances++;
  }

  public int GetNumberOfPeopleCreatedThusFar() 
  {
    return numberOfInstances;
  }
}

*/

/* TODO */




// FREE CODE CAMP

// Reverse a string
/*
function reverseString (str) {
	return str.split("").reverse().join("");
	
}

console.log(reverseString("car"));
console.log(reverseString("bananna"));

let a = "String-Is-This,On,Me";

let b = a.split(",");

console.log(b[0]);
*/

// Factorilize a number

/*
function factorialize (n) {
	let arr = [];
	for (i = 1; i <= n; i++) {
		arr.push(i)
	}
	let sum = 1;
	for (i = 0; i < arr.length; i++) {
		sum = sum * arr[i];
	}
	
	return sum;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
*/

/*
function factorialize (n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorialize(n-1);
	}
}
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
*/

/*
function factorialize(n) {
	for (i = 1;n >= 1; n--) {
		i = n * i;
	}
	return i;
}

console.log(factorialize(5));
console.log(factorialize(10));
*/

// Check for palindrome
/*
function palindrome (word) {
	let reverseWord = word.split("").reverse().join("");
	if(word === reverseWord) {
		return true;
	} else {
		return false;
	}
}

console.log(palindrome("eye"));
console.log(palindrome("nose"));
console.log(palindrome("racecar"));
console.log(palindrome("computer"));
*/

/*
function palindrome (word) {
	word = word.replace(/[\W_]/g, '').toLocaleLowerCase();
	let reverseWord = word.split("").reverse().join("");
	if(word === reverseWord) {
		return true;
	} else {
		return false;
	}
}

console.log(palindrome("Eye"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
*/


// Longest string 
/*
function longestString (sentance) {
	let sentanceArr = sentance.split(" ");
	let longestWord = 0;
	for(i = 0; i < sentanceArr.length; i++) {
		if( sentanceArr[i].length > longestWord) {
			longestWord = sentanceArr[i].length;

		}
	}	
	return longestWord;
};

console.log(longestString("The quick brown fox jumped over the lazy dog"));
console.log(longestString("May the force be with you"));
console.log(longestString("Google do a barrel roll"));
console.log(longestString("What is the average airspeed velocity of an unladen swallow"));
console.log(longestString("What if we try a super-long word such as otorhinolaryngology"));

*/

// Capitalize first word

/*
function capitalizeFirstWord (sentance) {
	let sentanceArr = sentance.split(" ");
	for (i = 0; i < sentanceArr.length; i++) {
		sentanceArr[i] = sentanceArr[i].charAt(0).toUpperCase() + sentanceArr[i].slice(1).toLocaleLowerCase();
	}
	return sentanceArr.join(" ");
}
	

console.log(capitalizeFirstWord("I'm a little tea pot"));
console.log(capitalizeFirstWord("sHoRt AnD sToUt"));
console.log(capitalizeFirstWord("HERE IS MY HANDLE HERE IS MY SPOUT"));
*/

// Largest number in array
/*
function biggestNumber (arr) {
	let largrstNum = [];
	for (i = 0; i < arr.length; i++) {
		let currentBiggest = arr[i][0];
		for (j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > currentBiggest) {
				currentBiggest = arr[i][j];
			}
		}
		largrstNum.push(currentBiggest);
	}
	return largrstNum;
}

console.log(biggestNumber([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(biggestNumber([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
*/

// Confirm the end

/*
function confirmEnd (str, target) {
	let originalEnd = str.substring((str.length - target.length), str.length);
	if(target === originalEnd){
		return true;
	} else {
		return false;
	}
}

console.log(confirmEnd("Bastian", "n"));
console.log(confirmEnd("Connor", "n"));
console.log(confirmEnd("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnd("He has to give me a new name", "name"));
console.log(confirmEnd("Open sesame", "same"));
console.log(confirmEnd("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));

*/

// Repeat a string
/*
function repeatStringNumTimes (str, num) {
	let arr = [];
	for (i = num; i > 0; i--) {
		arr.push(str);
	}
	
	return arr.join("");
}


console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("abc", -2));
*/

// Truncate a string
/*
function truncateString(str, num) {
	let newWord;
	if (num <= 3) {
		newWord = str.slice(0, num) + "...";
		return newWord;
	} else {
		if (str.length > num) {
			newWord = str.slice(0, (num - 3)) + "...";
			return newWord;
		} else {
			return str;
		}
	}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
*/

// Chunky Monkey

/*
function chunkArrayInGroups(arr, size) {

	var temp = [];
	var result = [];

	for (var a = 0; a < arr.length; a++) {
		if (a % size !== size - 1)
			temp.push(arr[a]);
		else {
			temp.push(arr[a]);
			result.push(temp);
			temp = [];
		}
	}

	if (temp.length !== 0)
		result.push(temp);
	return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
*/

//Slasher flick
/*
function slasher(arr, howMany) {
	arr.splice(0, howMany);
	
	return arr;
}

console.log(slasher([1, 2, 3], 2));
*/

// Mutations
/*
function mutation(arr) {
	let firstWord = arr[0].toLowerCase().split("");
	let secondWord = arr[1].toLowerCase().split("");
	for (i = 0; i < secondWord.length; i++) {
		if (firstWord.indexOf(secondWord[i]) === -1) {
			return false;
		} 
	}
	return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["alien", "line"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["voodoo", "no"]));
*/

// Falsy bouncer
/*
function bouncer(arr) {
	return arr.filter(Boolean);
}
*/
/*
function bouncer(arr) {
let newArr = [];
	for (i = 0; i < arr.length; i++) {
		if(arr[i]) {
			newArr.push(arr[i])
		}
	}
	return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
*/

// Seek and destroy
/*
function destroyer(arr) {
	let argArr = Array.prototype.slice.call(arguments);
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < argArr.length; j++) {
			if (arr[i] === argArr[j]) {
				delete arr[i];
				arr.splice(i, i+1);
			}
		}
	}
	return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
*/

// Where do I belong?
/*
function getIndexToIns(arr, num) {
	arr.sort(function(a,b){
		return a - b;
	})
	for (i = 0; i < arr.length; i++) {
		if (arr[i] >= num) {
			return i;
		}
	}
	return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([5, 3, 20, 3], 5));
*/

// Caesars Cipher
/*
function rot13(str) {
	let strArr = str.split("");
	let alphabet = [];
	let tempArr = [];
	for (i = 65; i <= 90; i++){
		alphabet.push(String.fromCharCode(i))
	}
	for (i = 0; i < strArr.length; i++) {
		if (strArr[i] === " ") {
			tempArr.push(" ");
		}
		for (j = 0; j < alphabet.length; j++) {
			if (strArr[i] === alphabet[j]) {
				tempArr.push(alphabet[(j+13)%26]);
			} 
			
		}
		
	}
	
	tempArr = tempArr.join("");
	return tempArr;
}

console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
*/

///////////////////////////////
// Advanced algorithm exercises
///////////////////////////////

// Sum all numbers in range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

/*
function sumAll(arr) {
	let newArr = [];
	function sum (accumulator,value) { // Accumulator je začetna vrednost, value pa trenutna
		return accumulator + value;
	}
	
	let max = arr.reduce(function(a,b){ // V spremenljivko max shranimo max vrednost arraya 
		return Math.max(a,b)
	});
	
	let min = arr.reduce(function(a,b){
		return Math.min(a,b);
	});
	
	for (i = min; i <= max; i++) { // Dopolnimo array z ostalimi vrednostmi med min in max
		newArr.push(i);
	}
	return newArr.reduce(sum); // Kličemo callback funkcijo sum, ki nam vrne seštevek (npr [1,2,3,4]. 0+1=1, 1+2=3, 3+3= 6, 6+4=10) --> 0 je default acumulator
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
*/
/*
function sumAll(arr) {
	function sum (accumulator, value) {
		return accumulator + value;
	}

	return arr.reduce(sum);
}

console.log(sumAll([1, 4, 5, 5]));
console.log(sumAll([3, 6]))
*/

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.
/*
function diffArray(arr1, arr2) {
	let newArr = [];
	function unique (a,b) {
		for (i = 0; i < a.length; i++) {
			if (b.indexOf(a[i]) === -1) {
				newArr.push(a[i])
			}
		}
		
	}
	unique(arr1,arr2);
	unique(arr2,arr1);
	return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

// My solution 
/*
function diffArray(arr1, arr2) {
	let joinedArr = arr1.concat(arr2);
	let uniqArr = [];
	for (i = 0; i < joinedArr.length; i++) {
		if(arr1.indexOf(joinedArr[i]) === -1 || arr2.indexOf(joinedArr[i]) === -1) {
				uniqArr.push(joinedArr[i]);
		}
	}
	return uniqArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
*/

// Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
/*

var convertToRoman = function(num) {

	var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

	var romanized = '';

	for (var index = 0; index < decimalValue.length; index++) {
		while (decimalValue[index] <= num) {
			romanized += romanNumeral[index];
			num -= decimalValue[index];
		}
	}

	return romanized;
}

// test here
convertToRoman(36);
*/

// Wherefore art thou
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/


// Search and replace
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

/*
function myReplace(str, before, after) {
	let beforeWord = str.indexOf(before); //Najdemo položaj začetne črke v "before" besedi
	if(str[beforeWord] === str[beforeWord].toUpperCase()) {
		after = after.charAt(0).toUpperCase() + after.slice(1);
		str = str.replace(before, after);
		
	} else {
		str = str.replace(before, after);
		
	}
	return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
*/

