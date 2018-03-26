// ex. 1
//task 1
const sayHello = (hello = 'Hello' , world = 'World!') => console.log(`${hello} ${world}`);
sayHello();
//task2
const hello = `Hello `;
const world = `World`;
console.log(...hello, ...world);

// ex. 2
const multiply = (a = 1, b = 1) => console.log(a * b);
multiply(2, 8); 
multiply(4);

// ex. 3
const average = (...args) => {
	const tot = args.reduce((total, argument) => {
		return total + argument;
	});
	console.log(`Average from all arguments is ${tot / args.length}`);
	};
average(3, 8, 4);

// ex 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// ex 5
const personalData = [1, 4, 'Iwona', false, 'Nowak'];
const[, , firstname, , lastname] = personalData;
console.log(`First name: ${firstname}`);
console.log(`Last name: ${lastname}`);
