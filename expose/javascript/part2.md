Question 1: 
3 will be printed to the console. This is because i is a var so it is accesible inside the function. Therefore, when we want to log it, we log the i value after iterating through the for loop, which i is incremented by 3 times. Therefore 3 is printed.
Question 2:
150 will be printed to the console. We can access the value of discounted Price since it's a var so it is in scope. The value in discountedPrice is last updated on the last iteration of the for loop, which is 300*(1-0.5) = 150.
Question 3:
150 will be printed to the console. This is because final price is a var we can access since it is within scope and it is the rounded value of 150*100/100 which is 150.
Question 4:
The function will return an array of final price. which is [50,100,150]. Inside our for loop, we push the final price of 100,200 and 300 into the array, which is 50,100 and 150. When returnning discounted, we return the array with 3 newly pushed final values.
Question 5:
It will report an error, since i is not defined at this scope. A variable that is defined by let is only accessible in the block it is declared. Since the for loop already terminated, we no longer have access to i that's defined inside using let.
Question 6:
This will also report an error. Since discountedPrice is defined insdie the for loop using let, we can only access it inside our for loop. Since we have already exited the for loop by the time we log it, we no longer have access and a variable not defined error will occur.
Question 7:
150 will be printed to the console. This is because we're within scope of the let, so we have access to it. And the value of finalPrice is last updated by the last iteration in the for loop, which final value is assigned by round(150*100/100), resulting in 150.
Question 8: 
[ 50, 100, 150 ] is returned. This is because a copy of the value of final price is pushed inside discounted, and when we returned discounted, we still have access to the values calculated by final price, which are 50,100 and 150.
Question 9:
An error occured. This is because we declared i using let inside our for loop. After we exit out of our for loop, we no longer have access to i. So we're not able to print it to the console.
Question 10:
3 is printed out to the console. Our length is not modified at all and is set to the length of price array. Since our price array has length 3, length is 3. 
Question 11:
The function will return an array, namely [50,100,150]. We have pushed all disconted prices inside our discounted array in iteration. It doesn't create any error, as each iteration of for loop will create a new discountedPrice. 
Question 12:
A: student.name
B: student['Grad Year']
C: student.greeting()
D: student['Favorite Teacher'].name
E: student.courseLoad[0]
Question 13:
A: '3' + 2 = 32. We concatenate the char 3 with 2 to get 32, since 2 maps to its exact string representation.
B: '3' - 2 = 1. char is converted to integer to perform the operation.
C: 3. null is casted to integer 0.
D: 3null. null is converted to string and concatenate with 3.
E: 4. true is converted to integer 1 and added to 3.
F: 0. Both null and false are typecasted to integer 0.
G: 3undefined. undefined is casted to string and concatenate with '3'.
H: NaN. Since we cannot cast undefined to a number, we got NaN.
Question 14:
A: true. This is because '2' is type casted to 2, which is greater than 1.
B: false. This is because '12' is alphabetically less than '2'.
C: true. This is because '2' is typecasted to 2.
D: false. Since === require type to be equal.
E: false. true is casted to 1, which doesn't equal to 2.
F: true. Boolean of 2 is true, and true === true.
Question 15:
== will compare values after type conversions, while === will not.
Question 17:
The result array is [2,4,6];
The array is passed into modify Array function. We have a newArr created, and for each item in the array, we use the callback function to multiply current element by 2 and push it into new array. Repeating it for 1,2, and 3 we got 2,4,6 in the resulting array.
Question 19:
1432 is printed.
1 and 4 are printed first as there are no timeout. Although the 3 has 0 delay, it is still executed after 4. After 1000 ms, 2 is printed to the console.






