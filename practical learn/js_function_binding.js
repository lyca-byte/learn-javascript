// const person = {
//     name: 'GFG',
//     greet: function() {
//         console.log('Hello, ' + this.name);
//     }
// };
// const greet = person.greet;
// greet();

// bind() Method
// const person={
//     name: "Lappy",
//     greet: function(){
//         console.log("Hello, " + this.name)
//     }
// }

// const greet=person.greet
// const boundGreet=greet.bind(person)
// boundGreet()

// call() Method
// const person= {
//     name:"Lappy",
//     greet: function(city){
//         console.log("Hello," + this.name + " from " + city)
//     }
// }
// person.greet("Jakarta")
// const greet=person.greet
// greet.call(person, "Noida")

// apply() Method
// const person={
//     name: "Lappy",
//     greet: function(city, country){
//         console.log("Hello," + this.name + " from " + city + ", " + country)
//     }
// }

// person.greet("Bandung", "Indonesia")
// const greet=person.greet
// greet.apply(person, ["Noida", "Jakarta"])

// Arrow Function and this Binding
const person={
    name: "Lappy",
    greet: function(){
        const arrowGreet=()=> {
            console.log("Hello," + this.name)
        }
        arrowGreet()
    }
}
person.greet()