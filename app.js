// Important Note - No Built-in functions to be used
// Progression 1: Names and Input


// 1.1 Create a variable `ProGrad-1` with the driver's name.
var ProGrad1 = "Vamshi"
// 1.2 Print `"The driver's name is XXXX"`.
console.log(ProGrad1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var ProGrad2 = "Nayan"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(ProGrad2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var a = ProGrad1.length;
var b = ProGrad2.length;
if (a > b) {
    console.log("The driver has the longest name, it has " + a + " characters");
} else if (b > a) {
    console.log("The navigator has the longest name, it has " + b + " characters");
} else if (a == b) {
    console.log("Wow, you both have equally long names, " + a + " characters!");
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
function VowelsChecker(str) {
    var str1 = str.split("");
    let counter = 0;
    var output = "";
    var output1 = "";
    for (let i = 0; i < str1.length; i++) {
        let str = str1[i].toLowerCase();
        if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u') {
            counter = counter + 1;
            output = output + str1[i] + " ";
            output1 = output1 + i + " ";
        }
    }

    if (counter > 0) {
        console.log(str + " " + output + output1);
    }
}
VowelsChecker(ProGrad1);
VowelsChecker(ProGrad2);


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
var numUpper = (ProGrad1.match(/[A-Z]/g) || []).length;
console.log("UpperCase Letters:" + numUpper);
// - Print the number of lower case characters
var numLower = (ProGrad1.match(/[a-z]/g) || []).length;
console.log("LowerCase Letters:" + numLower);
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad
var input = ProGrad1.split("");
var str = " ";
for (let i = 0; i < input.length; i++) {
    str = str + input[i].toUpperCase() + " ";
}
console.log(str); 

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string            
    var joinArray = reverseArray.join(" ");
    return joinArray;
}
console.log("Reverse String: " + reverseString(ProGrad2));

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var res = ProGrad2 + ' ' + ProGrad1;
console.log(res);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
var elements = [ProGrad1, ProGrad2];
a = elements.sort((a, b) => a.localeCompare(b));
console.log("Lexicographically Sorted:- " + a)
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
