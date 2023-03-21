///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// literal types
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// they are types that represent specific, fixed values and can be created using string, number, or boolean literals.

// these are the possible literal types:
let b: true;
let n: 512;
let s: 'blah';

n = 512;
n = 234; // error!

// they are mostly useful for expressing
let x: 1 | 2 | 3;
x = 3;
x = 2;
x = 4; // error!

let y: 1 & 2; // not possible, so it results in never
y = 1; // error!

// the boolean type is
type bool = true | false;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// union types
// see: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

type NumOrStr = number | string;

let ns: NumOrStr = 12;
ns = 'str';
ns = []; // error!

//--------

type T1 = { name: string; colour: string };
type T2 = { age: number };

type TUnion = T1 | T2;

// union type rule is satisfied by one of the types fully present
let tu: TUnion = {
  name: 'a name',
  age: 23
};

// neither type is fully present
tu = { name: 'b name' }; // error!

tu = {}; // error!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

type TIntersection = T1 & T2;

// intersection type must satisfy both T1 and T2 - effectively same as extending an interface
let ti: TIntersection = {
  name: 'a name',
  colour: 'red',
  age: 23
};

// only one type is satisfied (colour is missing from T1)
ti = {
  name: 'b name',
  age: 23
};

//NOTE: this is valid, but it'll will result in 'never' as there is no intersection between them
type NumAndString = number & string; // = never

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// keyof operator
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

// It takes an object type and produces a string literal union of its keys.
type Point = { x: number; y: number };
type P = keyof Point; // P is 'x' | 'y'

// use cases:

// 1. pick out a property from an array of objects
const pluck = <T, Key extends keyof T>(items: T[], key: Key): T[Key][] => items.map((item) => item[key]);
const namesOnly = pluck(
  [
    { name: 'a', age: 2 },
    { name: 'b', age: 3 },
    { name: 'c', age: 4 }
  ],
  'name'
);
// ['a', 'b', 'c'];

// 2. DeepPartial
type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// typeof operator
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

// This is the same as the javascript typeof operator
let greeting = 'hello';
let str: typeof greeting; // str type is string
str = 23; // error! (number is not assignable to string)

// use cases:

// 1. ReturType
const getPerson = (name: string, age: number) => ({ name, age });
type Person = ReturnType<typeof getPerson>;

// 2. dynamic module import
type ActionModule = typeof import('./constants');
type DefaultKeys = keyof ActionModule;
type DefaultValues = ActionModule[keyof ActionModule];

// 3. objects
const someData = {
  name: 'Bradley',
  age: 23
};

type OKeysWrong = keyof someData; // error! 'someData' refers to a value, but is being used as a type here.
type OKeys = keyof typeof someData; // name | age; (keyof needs a type not a value)
type OType = typeof someData; // { name: string; age: number; }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Utility types
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// 1. Partial<T>
// All properties are optional

interface Todo {
  title: string;
  description: string;
}

type TodoMaybe = Partial<Todo>;

// 2. Required<T>
// All properties are required
  
type TodoMust = Required<TodoMaybe>;

// 3. Readonly<T>
// All properties are read-only

type TodoReadonly = Readonly<Todo>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export {};
