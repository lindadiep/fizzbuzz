// Step 1: create a fizzBuzzNums array
// Step 2: populate the array with elements--integers 1-100 (doing 1-20 to begin)
// Step 3: put conditions into a loop--should contain flag variable (boolean)
// Step 4: create conditions 

var fizzBuzzNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var i;
for (i = 0; i < fizzBuzzNums.length; i++) {
		if ((fizzBuzzNums[i] % 3) == 0) {
			document.write(" " + "fizz" + " ");
		} else if ((fizzBuzzNums[i] % 5) == 0) {
			document.write(" " + "buzz" + " ");
		} else {
			document.write(" " + "Number" + " ");
		}
} 

