var testOne = "What kind of variable am I?"
//string

var testTwo = 256;
//number

var testThree = false;
//boolean

var testFour = 'true';
//string

var testFive = '128'
//string

var testSix = "";
//string


var testOne = "hello" + "there";
//string hellothree

var testTwo = '100' + 28;
//number 128

var testThree = true + 3;
//number 4

var testFour = 'false' + 5;
//string false5

var testFive = '128' - 3;
//number 125

var testSix = '' * 9;
//number 0

var testSeven = 'zero' - 1;
//number NaN (Not a Number) because the value is a negative number & not a real number

var testEight = 'five'.length;
//number 4

var testNine = 'five'[0] + 'ever';
//string fever

var testTen = 'a' > 'b';
//boolean false

var testEleven = 'number'.length < 7;
//boolean true

var testTwelve = '12' == 12;
//boolean true

var testThirteen = 'twelve' == 12;
//boolean false

var testFourteen = '14' === 14;
//boolean false because it's not both an equal value and an equal type

var testFifteen = 'Hi there' [0] + 'open sesame' [2] + 'alohamora' [1] + 'eulalia' [4] + 'harkonnen' [4] + 'BATMAN!' [6];
//string Hello!


var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);
//Hello, my name is Kingsley Pappagiorgio.


var num1 = 8;

var num2 = 52;

var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers)


var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation);



