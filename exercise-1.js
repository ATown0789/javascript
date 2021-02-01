// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {
            for(let i = 1; i <= 100; i++){
                if(i%3 == 0 && i%5 ==0)
                    console.log("TEKcamp");
                else if(i%3 == 0)
                    console.log("TEK");
                else if(i%5 == 0)
                    console.log("camp");
                else
                    console.log(i);
            }
        }



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function farenheitCelsius(far) {
            return (far-32)*(5/9);
        }


        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(cel) {
            return (cel *(9/5))+32;
        }



        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if(age < 18)
            return false;
            else if (age >= 18)
            return true;
            else
            return false;
        }

        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr(str) {
            return str.split('');
        }







        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            let reverse = []
            let numArray = number.toString().split('');
            numArray.forEach(e => reverse.unshift(e));

           return parseInt(reverse.join(''));
        }



        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...

        const makeCar = (make, model, year, color) => ({make: make, model: model, year: year, color: color});
        




        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...

            function oddEven(numArr) {
                const oddEvenObj = {};
                numArr.map(num => {
                    if(num%2 == 0)
                    oddEvenObj[num] = 'even';
                    else
                    oddEvenObj[num] = 'odd';
                });
                return oddEvenObj;
            }





        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.
            for(let i = 0; i < numbers.length; i+=3) {
                console.log(numbers[i]);
            }



        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

        const school = foodArray[foodArray.length-1].program;
        
        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".

        let art = '';
        for(let i = 0; i < foodArray.length; i++) {
                if(typeof(foodArray[i]) === 'object')
                    console.log(`${school} is ${adjectiveArray[i]}`)
                else{
                    foodWordArr = foodArray[i].split('');
                    if(foodWordArr[foodWordArr.length-1] != 's')
                        art = 'is';
                    else
                        art = 'are';
                    console.log(`${foodArray[i]} ${art} ${adjectiveArray[i]}`);
                }
            }
       
        /************************************************************* */
        // Refactor the for() loop to be a while loop.
        let i = 0;
        while(i < foodArray.length) {
            if(typeof(foodArray[i]) === 'object')
                    console.log(`${school} is ${adjectiveArray[i]}`)
                else{
                    foodWordArr = foodArray[i].split('');
                    if(foodWordArr[foodWordArr.length-1] != 's')
                        art = 'is';
                    else
                        art = 'are';
                    console.log(`${foodArray[i]} ${art} ${adjectiveArray[i]}`);
                }
            i++
        }

        for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
            console.log(" the value of i in the loop is : " + i)
        }


        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...

        const sum = (a,b) => a + b;
        const mul = (a,b) => a * b;
        const div = (a,b) => a / b;
        const pow = (a,b) =>  Math.pow(a,b);

        console.log(div(mul(sum(30,2),20),pow(10,2)));

        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        console.log(`20 is ${!!20 ? 'truthy' : 'falsey'} because it's a number and non-zero numbers are type coerced as ${!!20 ? 'true' : 'false'} when performing logical operations in JS`);  
        // 0
        console.log(`0 is ${!!0 ? 'truthy' : 'falsey'} because it's a zero and zeros are type coerced as ${!!0 ? 'true' : 'false'} when performing logical operations in JS`); 
        // "zero";
        console.log(`'zero' is ${!!'zero' ? 'truthy' : 'falsey'} because it's a string and strings are type coerced as ${!!'zero' ? 'true' : 'false'} when performing logical operations in JS`); 
        const zero = 20;
        console.log(`The variable zero is ${!!zero ? 'truthy' : 'falsey'} because it's a number and non-zero numbers are type coerced as ${!!zero ? 'true' : 'false'} when performing logical operations in JS`);
        // null
        console.log(`'null' is ${!!null ? 'truthy' : 'falsey'} because it's nothing and nothing is type coerced as ${!!null ? 'true' : 'false'} when performing logical operations in JS`);
        // "0"
        console.log(`'0' is ${!!'0' ? 'truthy' : 'falsey'} because it's a string and strings are type coerced as ${!!'0' ? 'true' : 'false'} when performing logical operations in JS`);
        // !""
        console.log(`!"" is ${!!!"" ? 'truthy' : 'falsey'} because an empty string is type coerced as false so the opposite is type coerced as ${!!!"" ? 'true' : 'false'} when performing logical operations in JS`);
        // {}
        console.log(`{} is ${!!{} ? 'truthy' : 'falsey'} because it's an empty object and is type coerced as ${!!{} ? 'true' : 'false'} when performing logical operations in JS`);
        // () => {console.log("hello TEKcamp!");
        console.log(`The function is truthy because everything other than the 6 falsy values are always truthy`)
        // 125
        console.log(`125 is ${!!125 ? 'truthy' : 'falsey'} because it's an empty object and is type coerced as ${!!125 ? 'true' : 'false'} when performing logical operations in JS`);
        // undefined
        console.log(`undefined is ${!!undefined ? 'truthy' : 'falsey'} because it's undefined and is type coerced as ${!!undefined ? 'true' : 'false'} when performing logical operations in JS`);

        // ""
        console.log(`"" is ${!!"" ? 'truthy' : 'falsey'} because it's an empty string and is type coerced as ${!!"" ? 'true' : 'false'} when performing logical operations in JS`);
       
       //Almost got this to work... but it has too many exceptions to make it any easier. 
       
        let testArr = [20, 0, "zero", zero, null, '0', !"", {}, 125, undefined, ""]

        testArr.forEach(e => console.log(`'${e}' is ${!!e ? 'truthy' : 'falsey'} because it's a(n) ${typeof(e)} ${e === 0 ? 'and the number 0': 'and' } is type coerced as ${!!e ? 'true' : 'false'} when performing logical operations in JS`));




        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "monday";

        switch (day) {
            case 'monday' :
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "friday":
                console.log("TGIF.  Friday truly is the best day of the week!")
                break;
            default:
                console.log("It's a weekend!");
        }


        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        age > 21 ? console.log("adult") : console.log("minor");

        age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");

        age > 65 ? console.log("retired"): console.log("still working...");

        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...

        const myObject = {
            name: 'Anthony',
            age: '31',
            gender: 'Male',
            healthy: 'Yes',
            hobbies: ['eating','music','games','family'],
            profession: 'Freelance Developer',
            education: 'BA Music Education',
            learn: function() {
                console.log(`${this.name} is learning javascript`)
            },
            gotSick: function() {
                this.healthy = `No :'(`;
                console.log(`Is ${this.name} healthy? ${this.healthy}`);
            },
        }


        /************************************************************* */

        
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sumNum = 0;
            let doubled = [];

            //Refactor the following statements into expressions


            // 1.
            
            year > 2000 && year < 2100 ? 
                console.log("welcome to the 21st century") : year;
            
            // 2.
            nums.forEach(num => sumNum += num);
            console.log(sumNum);
            
            
            // 3.
            doubled = nums.map(num => num*2);

            
            console.log(doubled);
        


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums1 = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        let square = nums1.map(num => num*num);


        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        higherThanFive = fivePlus.filter(num => num > 5);

        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        const randArr = [];
        sumNum1 = 0;
        let randNum = 0;
        for(let i = 0; i < 20; i++) {
            randNum = Math.floor(Math.random() * Math.floor(100));
            randArr.push(randNum);
            sumNum1 += randNum;
        }


        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.

        showNums.forEach(e => console.log(e/2));

        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
        function chessCalc(pieces) {
            let sumNum2 = 0;
            const piecesLower = pieces.map(e => e.toString().toLowerCase());
            const piecePoints = piecesLower.map(p => piecesCheck(p));
            piecePoints.forEach(p => sumNum2 += p);
            return sumNum2 == 0 ? null : sumNum2;
        }

        function piecesCheck(p) {

            switch(p) {
                case 'king':
                    return null;
                    break;
                case 'queen':
                    return 9;
                    break;
                case 'rook':
                    return 5;
                    break;
                case 'bishop':
                    return 3;
                    break;
                case 'knight':
                    return 3;
                    break;
                case 'pawn':
                    return 1;
                    break;
                default:
                    return null;
            }
        }


        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.

        const newOnes = [];
        ones.forEach(e => newOnes.unshift(e));

        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.
        
        function performer(cb) {
           return cb();
        }


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24
        const oldDevs = devs.filter(e => e.age > 24);

        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        const onlyDevs = devs.filter(e => e['tech_stack'] !== null);

        /************************** */  
        // Calculate the total age of all the devs

        let sumNum3 = 0;

        devs.forEach(e => sumNum3 += e.age);


        /************************** */  
        // Find all female devs


        const femDev = devs.filter(e => e.gender === 'f' || e.gender === 'F');


        /************************** */  
        // lowercase the genders of every dev

        devs.forEach(e => e.gender = e.gender.toLowerCase());
 
        /************************** */  
        // Sort the developers by name

            devs.sort((a,b) => {
                
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });

        /************************** */  
        // Sort the devs by age in descending order

        devs.sort((a,b) => b.age - a.age);


        /************************** */  
        // Sort the male coders by age

        const malDev = devs.filter(e => e.gender === 'm');

        malDev.sort((a,b) => a.age - b.age);


        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

            devs.forEach(e => {
                
                if(e.tech_stack === null)
                    console.log(`${e.name} is not a developer`);
                else{
                    let stackArr = e.tech_stack;
                    let addAnd = "and " + stackArr.slice(-1);
                    stackArr.splice(-1,1,addAnd);
                    let stackList = stackArr.join(', ');
                    console.log(`${e.name} specializes in ${stackList}`)
                }
            })


        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function onlyNumbers(arr) {
            const stringToNumbers = arr.map(e => {
                if(typeof(e) === 'number')
                    return e;
                else if(e === 'one')
                    return 1;
                else if(e === 'two')
                    return 2;
                else if (e === 'three' || '3')
                    return 3;
                else
                    return "not a number"
            });

            const onlyNums = stringToNumbers.filter(e => typeof(e) === 'number')

            return onlyNums;
        }
        
        
        function maxNumber(numbers) {
           const numsArr = onlyNumbers(numbers);
           return Math.max(...numsArr);

        }

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc = false) {
            const onlyNums = onlyNumbers(numbers);
            if(desc)
                return onlyNums.sort((a,b) => b - a);
            else
                return onlyNums.sort((a,b) => a - b);
        };

        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

        //the spread operator allows for a lot of cool things
        /* 
        Copying an array
        Concatenating or combining arrays
        Using Math functions
        Using an array as arguments
        Adding an item to a list
        Adding to state in React
        Combining objects
        Converting NodeList to an array  
        */ 
        //A simple example is what I did above for Math.max()
        /*
        
        Normally Math.max would see an array as a single argument, but because of the spread operator, it now sees the array as individual arguments. 
        
        It's very useful, but don't get it confused with destructuring which uses the same "..." but in a different context.
        
        */
        



        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.
        const myObj = {company: "TEKsystems"};
        const mapObj = new Map();
        mapObj.set(myObj,"object")
                .set(7, 'number')
                .set('string', 'string')
                .set(true, 'boolean')
                .set([1,2,3,4], 'array');

        console.log(mapObj.has(myObj));

        console.log("It was false because you can't directly access the objects reference without declaring it as a variable")
        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
        const mapArr = [];

        mapObj.forEach(value => mapArr.push(`${value}`));

        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        const addi = (a,b) => a + b;
        const subt = (a,b) => a - b;
        const mult = (a,b) => a * b;
        const divi = (a,b) => a / b;
        const getText = (iNum) => {
            switch(iNum){
                case 0:
                    return "Adding: "
                    break;
                case 1:
                    return "Subtracting: "
                    break;
                case 2:
                    return "Multiplying: "
                    break;
                case 3:
                    return "Dividing: "
                    break;          
            }
        }

        const operations = [addi, subt, mult, divi];
        function doMath(x,y) {
            const randInt = Math.floor(Math.random() * Math.floor(4));
            const operText = getText(randInt);
            console.log(operText, operations[randInt](x, y))
        };

        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        function multiple(x) {
            return function(y){
               return x*y;
            };
        }

       function getTripple(num) {
           
            return multiple(num)(3);
       }
        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        function stockGain(basis){
            const message = " is how much the stock has increased"
                return function(yrs){
                    const r = .05;
                    return (basis*yrs*r) + message;
                }
        }


        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        const futureValue = stockGain(10000)(30);


// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    farenheitCelsius,
    celsiusFarenheit,
    strToArr,
    canVote,
    reversePhone,
    makeCar,
    oddEven,
    chessCalc
}


//*************************************** */



