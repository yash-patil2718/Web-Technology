const Obj = {
    rollnumber: 1,
    name: "Prashant",
    marks: 90,
  };
  
  const obj_copy = { ...Obj }; 
  
 
  Obj.marks = 95;
  
  
  console.log("Original Object:", Obj);
  console.log("Copied Object:", obj_copy);