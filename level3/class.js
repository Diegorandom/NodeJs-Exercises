class Example {
    constructor() {
        this.arr = [0,1,2,3]
        this.string = 'Hello World!'
        this.number = 10
        this.bool = true;
    }
}

module.exports = Example;

class Animal {
    constructor() {
        this.name;
        this.numberOfPaws;
        this.gender;
    }

    say() {
        return ''
    }

    info() {
        return {
            name:this.name, 
            numberOfPaws: this.numberOfPaws, 
            gender: this.gender
        }
    }

}

class Dog extends Animal {
    constructor(name) {
    super()
    this.name = name;
    this.numberOfPaws = 4;
    this.gender = 'female'
    }

    say() {
        return 'woof! woof!'
    }

    info() {
        return {
            name: this.name, 
            numberOfPaws: this.numberOfPaws,
            gender: this.gender
        }
    }
}

let dog = new Dog('Doge2')

console.log(dog.say())

console.log(dog.info())

