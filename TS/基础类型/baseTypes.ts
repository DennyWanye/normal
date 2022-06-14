let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let name1: string = "bob";
name1 = "smith";

let age: number = 37;
let sentence: string = `Hello, my name is ${ name1 }.

I'll be ${ age + 1 } years old next month.`;

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

//枚举： 转换成的对象为 {1: 'Red', 2: 'Green', 4: 'Blue', Red: 1, Green: 2, Blue: 4}
//即 Color[Color.Blue] === Blue
// Color.Blue 储存了 'Blue' 数据 对应的 key值，利用他可以找到 'Blue' 数据
enum Color {Red = 1 , Green = 2, Blue = 4}
let c: Color = Color.Green;

let notSure: any = 4;

function warnUser(): void {
    alert("This is my warning message");
}

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//类型断言

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

//let strLength: number = (someValue as string).length;

document.body.innerHTML = c + '';

