

//type Allias

type Person= { id: number, name:string};

let p: Person = {id: 1, name:"John"};  // craeting an instance

console.log(p);

//Type Union

let y: number | string;
y=10;
console.log(y);// 10

//Literal Type

let z: "Red" | "Green" | "Blue";
z="Red";
console.log(z); //Red

