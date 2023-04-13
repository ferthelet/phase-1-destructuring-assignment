// assigning data from an object 

const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFoods: {
        meats: {
            ham: 'smoked',
            hotDog: 'Oscar Meyer',
        },
        cheeses: {
            american: 'kraft'
        }
    }
};

let name = doggie.name;
let breed = doggie.breed;
console.log(name, breed);

// destructuring
let { name: dogName, breed: dogBreed } = doggie;
console.log(dogName, dogBreed);

const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName);

