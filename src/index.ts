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
 

export {};
