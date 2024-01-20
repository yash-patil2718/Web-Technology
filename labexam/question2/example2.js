const obj={
    circle : {
    shapeName :"circle",
    shapeColor:"black",
    shapeArea:"24"
    },
    rectangle : {
        shapeName : "rectangle",
        shapeColor: "red",
        shapeArea : "12",
    },

    shapes : [...obj],

    shapes : {
        circle:{
            shapeColor:"purple",
        },
        rectangle:{
            shapeColor:"indigo",
        },
    },
}

console.log(obj);
console.log(shapes);

