let f = (array, ...args) => {
    return array.filter((item) => {
        if(args.indexOf(item) === -1 ) {
            return item
        }
    })
}


console.log(f([1,2,3,4], 1,2))

// iterar sobre arreglo
//     revisar para cada posicion del arreglo  
//         si para una posicion del arreglo  === args
//             quitarlo del arreglo
//regresar el arreglo         
