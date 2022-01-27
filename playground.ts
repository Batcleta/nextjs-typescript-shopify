
// Cria-se um objeto parecido com o inline abaixo e utiliza ele 
// como a referencia dos tipo

interface Person {
    name: string
    age: number
}

export function play(Name: string, Age:number){
    const name = Name
    const age = Age

    const person: Person = {
        name: 'philiph Banks',
        age: 50
    }

    function logPersonInfo(personName:string, personAge: number){
        const info = "Name: " + personName + "Age: " + personAge
        console.log(info)
        return info
    }

// Pode-se usar os tipos do objeto inline porém perde-se
// a possibilidade de reuso. Pos isso existe o type ( acima )

    function logPersonInfo2(person:{name: string, age: number})
    function logPersonInfo2(person:Person){
        const info = "Name: " + person.name + "Age: " + person.age
        console.log(info)
        return info
    }

    logPersonInfo(name, age)
    logPersonInfo2(person)

    let data: string = 'philip'
    console.log(typeof data)
    // data = 30
    // console.log(typeof data)
}

// Classes


interface CarsCollecton{
    (brand: string, model: string, price: number):string
   }
   
   const MyCar: CarsCollecton = (brand, model, price) => {
       return `My car is a ${brand} ${model} and i payed R$${price} for it `
   }
   
   console.log(MyCar('Nissan', 'Versa', 52000))


   interface IVeículo{
     brand: string
     model: string
     price: number
     mostrarVeículo():string
   }

   class myCars implements IVeículo{
    constructor( public brand:string, public model:string, public price: number){}

    public mostrarVeículo():string{
        return `My car is a ${this.brand} ${this.model} and i payed R$${this.price} for it `
    }
   }


   console.log(new myCars('Nissan', 'versa', 52000).mostrarVeículo())

// Narrowing

export const PlayFunc = (): void => {
    let 
        // names: string[] = ["Filip", "John"],
        // numbers:Array<number> = [1,2,3,4,5,6],
        random = Math.random() > 0.5? 'Hello': [1,2],
        upper:string

        if(typeof random === 'string'){
            upper = random.toUpperCase()
            console.log(upper)
        }else{
            console.log(upper)
        }
}

// Extending Interfaces

interface Persona {
    kind: 'Business' | 'Academics' /* Narrowing */ | 'other type' /*Never */
    name: string
    age: number
}

interface BusinessPerson extends Persona{
    kind: 'Business' //Narrowing
    salary: number
}

interface AcademicPerson extends Persona{
    kind: 'Academics' //Narrowing
    publications: string[]
}

export const Personas = () => {

    const BusinessMan:BusinessPerson = {
        name: 'Briocossauro',
        age: 40,
        salary: 3800,
        kind: 'Business'
    }

    const AcademicsMan:AcademicPerson = {
        name: 'washington',
        age: 31,
        publications: ['The Little Prince', 'Fifth shades of black'],
        kind: 'Academics'
    }

    function logPerson(person:Person){}

    logPerson(AcademicsMan) //extending person
    logPerson(BusinessMan) // Extending person

}

type Human = BusinessPerson | AcademicPerson


// Extending type and interface  in type

type ICar = {
    name: string
}
// {
//     speed: number
// }

type IRaceCar = {
    speed: number
} & ICar & {mileage: number} & AcademicPerson

export const InCars = () => {
    const car: IRaceCar = {
        name: 'my car',
        speed:100,
        mileage:200,
        age: 31,
        publications:['Harry Potter'],
        kind: 'Academics'
    }
}

// Unions


type TRaceCar ={
    name: string,
    maxSpeed: 200,
    team: string
}

type TCityCar = {
    name: string
    space: string
    maxSpeed: 100
}

type TCar = TRaceCar | TCityCar

export const InCars2 = () => {

    const car: TRaceCar = {
        name: 'Race car',
        maxSpeed: 200,
        team: 'ferrari'
    }

    // Narrowing Interfaces
    function logPersonInfo(human: Human){
       
        if(human.kind === 'Academics'){
            console.log(human)
        }else{
            console.log(human)
        }

    }

    function loCarInfo(car: TCar){
        // console.log((car as TRaceCar).team) //will behave as TRaceCar
        // console.log((car as TCityCar).name) //will behave as TCityCar

        switch(car.maxSpeed){
            case 200:
                console.log(car.team)
                break;

            case 100:
                console.log(car)
                break;

            default:
                console.log(car)
        }
    }
}

// Declaration Merge

{

    interface Person{
        name: string
        age: number
    }

    const obj1: Person = {
        name: 'washington',
        age: 31,
        dickSize: 14
    }

    interface Person{
        dickSize: number
    }
}