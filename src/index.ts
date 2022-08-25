

// let user: [number, string] = [1, "Mosh"];
// console.log(user)

const enum Size { Small = 1, Medium, Large };
let MySize: Size = Size.Medium;

console.log(MySize);

///////////

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10_000)

//* Objects

// let employee: {
//     readonly id: number,
//     name: string, 
//     retire: (date: Date) => void 
// } = { 
//     id: 1, 
//     name: "Mosh",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

//* ADVANCED TYPES

//* Better way ~ using type alias
//? Using a type alias we can create a new name (alias) for a type. We often use type aliases to create custom types.

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date)
    }
}

//* Union Types
//? With union types, we can allow a variable to take one of many types (eg number | string).

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10);
kgToLbs("10kg");

//* Intersection Types
//? With intersection types, we can combine multiple types into one (eg Draggable & Resizable).

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


//* Literal types
// Literal (exact, specific)
type Metric = "cm" | "inch";
type Quantity = 50 | 100;

let quantity: Quantity = 100;

//* Nullable Types

function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hola!");
    }

}

greet(undefined);

//* Optional chaining
//? Using optional chaining (?.) we can simplify our code and remove the need for null checks.

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date() }
}

let customer = getCustomer(3)

//! Bad practice
// if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday)
// 

//? Best practice -> Optional property access operator
console.log(customer?.birthday?.getFullYear());

//? Optional element access operator for arrays
//customers?.[0]

//? Optional call

let log: any = null;
log?.("a");

//* The Nullish Coalescing operator
//? Using the Nullish Coalescing Operator we can fallback to a default value when dealing with null/undefined objects.

let speed: number | null = 0;

let ride = {
    // falsy (undefined, null, "", false, 0)
    // speed: speed || 30 -> if speed is 0 then it considers speed falsy so it takes as default the 30 value.
    // ! bad practice
    // speed: speed !== null ? speed : 30

    // ? best practice -> the nullish coalescing operator
    // if speed is NOT null or undefined use that value otherwise use 30 as a default value.
    speed: speed ?? 30

}
console.log(speed)
console.log(ride)

//* Type Assertions
// ? Sometimes we know more about the type of a variable than the TypeScript compiler. In those situations, we can use the as keyword to specify a different type than the one inferred by the compiler. This is called type assertion.

//! one way
//  let phone = document.getElementById("phone") as HTMLInputElement;

//? best way
// let phone = <HTMLInputElement> document.getElementById("phone");

//* The Unknown Type
//? The unknown type is the type-safe version of any. Similar to any, it can represent any value but we cannot perform any operations on an unknown type without first narrowing to a more specific type.

// It is preferred to use the type unknown instead of any.
//? The "unkown" type forces us to do some type checking to make sure that the methods we are calling exists on the target object.
// function render (document: unknown) {
//  narrowing
//     if (typeof document === "string") {
//         document.toUpperCase();
//     }

//     if (document instanceof WordDocument) {}
//     document.move()
//     document.fly()
// }


//* The Never Type
//? The never type represents values that never occur. We often use them to annotate functions that never return or always throw an error.

// function reject(message: string): never {
//     throw new Error(message)
// }

// function processEvents() : never {
//     while (true) {
//         // Read a message from a queue
//     }
// }

// // processEvents();
// reject("...");
// console.log("Hello World");