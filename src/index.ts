 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 // union types
 // see: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

type NumOrStr = number | string;

let ns: NumOrStr = 12;
ns = 'str';
ns = []; // error!

//--------

type T1 = { name: string, colour: string };
type T2 = { age: number };

type T3 = T1 | T2;

// union type rule is satisfied by one of the types fully present
let t3: T3 = {
    name: 'a name',
    age: 23
};

// neither type is fully present
t3 = {
    name: 'b name'
};

t3 = {}; // error!

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // intersection types
 // see: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types











///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

export {};
