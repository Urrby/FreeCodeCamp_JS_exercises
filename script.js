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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Falsy bouncer
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Seek and destroy
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function destroyer(arr) {
	let argArr = Array.prototype.slice.call(arguments);
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < argArr.length; j++) {
			if (arr[i] === argArr[j]) {
				delete arr[i];
				
			}
		}
	}
	return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Where do I belong?
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Caesars Cipher
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function rot13(str) {
	let strArr = str.split("");
	let alphabet = [];
	let tempArr = [];
	for (i = 65; i <= 90; i++){
		alphabet.push(String.fromCharCode(i)) // Dobimo abecedo velikih črk
	}
	for (i = 0; i < strArr.length; i++) { // Za vsako črko v stringu naredimo: 
		if (strArr[i] === " ") { // Če je presledek, ga samo prekopiramo v nov array
			tempArr.push(" ");
		}
		for (j = 0; j < alphabet.length; j++) { // poiščemo iste elemente v obeh array in jih damo v nov arr.
			if (strArr[i] === alphabet[j]) {
				tempArr.push(alphabet[(j+13)%26]); // Ce je J 20, potem je j + 13 = 33 kar je več kot je črk v abecedi (26), zato delimo 33 z 26 da dobimo ostanek 7. In tako ponavljamo abecedo
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sum all numbers in range
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Diff Two Arrays
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Roman Numeral Converter
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search and replace
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Missing letter
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

/*
function fearNotLetter (str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let start = alphabet.indexOf(str[0]);
    let len = str.length;
    for(i = start; i < start + len; i++){
       if (!str.includes(alphabet[i])) {
           return alphabet[i];
       } 
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bce")); 
console.log(fearNotLetter("bcd")); 
console.log(fearNotLetter("yz"));
*/
/*
function fearNotLetter (str) {
    for(i = 0; i < str.length; i++) { // Za vsako črko v str
        let code = str.charCodeAt(i); // Dobimo številko elementa na položaju i (i = 0,1,2)
        
        if(code !== str.charCodeAt(0) + i) { // Če je številka pozicije enaka zaporedju številk (od prve pozicije naprej)
            return String.fromCharCode(code -1) // Vrni prejšnjo številko
        }
    }
    return undefined;
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bce")); 
console.log(fearNotLetter("bcd")); 
console.log(fearNotLetter("yz"));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Boo who
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/
/*
function booWho (bool) {
 if (typeof(bool) === "boolean") {
	 return true;
 } else {
	 return false;
 }
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho("true"));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sorted Union
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
/*
function uniteUnique(arr) {
	let args = Array.prototype.slice.call(arguments); // Dobimo array argumentov
	let result = [];
	let joinedArr = args.reduce( //  Združimo vse argumente (vse arrayje) v en array
		function(a, b) {
			return a.concat(b);
		}
	);
	for (i = 0; i < joinedArr.length; i++) { 
		if (result.indexOf(joinedArr[i]) === -1) { //preverimo če je n element joinedArraya = -1 (-1 pomeni da ga ni v result arrayu), če je ga dodamo v rezultat. Če je že v arrayu ne naredimo nič in gremo naprej
			result.push(joinedArr[i]);
		} 
	}
	return result;
}
*/
/*
function uniteUnique(arr1, arr2, arr3) {
 var newArr;
  var args = Array.prototype.slice.call(arguments);
  newArr = args.reduce(function(arrA,arrB){
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Convert HTML Entities
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
/*
function convertHTML (str) {
	str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
	return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("<>"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Spinal Tap Case
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
/*
function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/ /g, "-").replace(/_/g, "-").toLowerCase();
	return str;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Finders Keepers
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/
// my
/*
function findElement(arr, func) {
	return arr.filter(func)[0];
}
*/
/*
function findElement(arr, func) {
	for (i = 0; i < arr.length; i++) {
		if(func(arr[i])){
			return arr[i]
		}
	}
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Drop it
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.
*/
/*
function dropElements(arr, func) {
	for(i = 0; i < arr.length; i++) {
		if (!func(arr[0])) {
			arr.shift()
		}
	}
	return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pig Latin
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

// Dela samo če pregledamo prvo črko
/*
function translatePigLatin(str) {
	let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","z","w","y"];
	let vowels = ["a", "e", "i", "o", "u"];
	let strArr = str.split("");
	let result;
	for(i = 0; i < consonant.length; i++) {
		if (strArr[0] === vowels[i]) {
			result =  str + "way";
		} else {
			if (strArr[0] === consonant[i]) {
				let first = strArr.shift();
				result= str.slice(1) + first + "ay";
			}
		}
	}
	return result;
	
}
*/
/*
function translatePigLatin(str) {
	let consonant = /[bcdfghjklmnpqrstvxzwy]/;
	let vowels = /[aeiou]/;
	let strArr = str.split("");;
	if(str.charAt(0).match(vowels)){ // Preverimo če je 1 črka stringa ena izmed aeiou in če je vrnemo besedo z končnico
		return str + "way";
	} else {
		for (i = 0; i < strArr.length; i++) { // Če prva črka besede ni bila aeiou, preverimo ali je prva črka katera izmed bcdfghjklmnpqrstvxzwy
			if (strArr[0].match(consonant)) { // For je zato ker moramo preveriti vse črke da pridemo do prve aeiou
				strArr.push(strArr.shift()); // Če prva črka NI aeiou jo odstranimo iz arraya in damo na konec. To delamo vse dokler ne pridemo do prve aeiou
		}
	}
	return strArr.join("") + "ay"; // združimo in dodamo končnico

}


console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("eight")); // eightway

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove")); // oveglay
/*

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DNA paring
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
/*
// with for
function pairElement(str) {
	let strArr = str.split("");
	let result = [];
	for (i = 0; i < strArr.length; i++) {
		if (strArr[i] === "A") {
			result.push(["A", "T"]);
		} else if (strArr[i] === "T") {
			result.push(["T", "A"]);
		} else if (strArr[i] === "C") {
			result.push(["C", "G"]);
		} else if (strArr[i] === "G") {
			result.push(["G", "C"]);
		}
	}
	
	return result;
}
*/
/*
//with map
function pairElement(str) {
	let strArr = str.split("");
	strArr = strArr.map(function(a) {
		if (a === "A") {
			return ["A", "T"];
		} else if (a === "T") {
			return ["T", "A"];
		} else if (a === "C") {
			return ["C", "G"];
		} else if (a === "G") {
			return ["G", "C"];
		}
	});
	return strArr;
	
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
*/





