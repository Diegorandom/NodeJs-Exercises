const fs = require('fs');
const Example = require('./class');
const Animal = require('./class');

//Ex. 1
const example = new Example();

let names = Object.getOwnPropertyNames(example);

for (propName of names){
    console.log(`${propName}: ${example[propName]} `)
}

//Ex. 2
fs.readFile("text.txt", "utf-8", (err, content) => {
    if(err){
        return console.log(err)
    }

    console.log(content)
})
console.log('reading file')
