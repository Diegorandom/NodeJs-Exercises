let f = (n) => {
    return (m) => {
        return n*m
    }
}

console.log(f(2)(8));
console.log(f(10)(5));
console.log(f(5)(7));