const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id, callback) => {
  //find ejecuta la función callback una vez por cada índice del array hasta que encuentre uno en el que el callback devuelva un valor verdadero.
  //e representa un empleado
  //e.id este es el id del empleado   que queremos
  const empleado = empleados.find((e) => e.id === id)?.nombre; //asi se extrae la innformacion

  const salario = empleados.find((e) => e.id === id  )?.salario;


  if (empleado) {
    callback(null, empleado); //Sino hay un error se manda null
  } else {
    callback(`Empleado con id ${id} no existe`); //Se colocan barcktips " ``  " cuando queremos implementar este modo  "${ id }"
  }
};



const id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR!");
    return console.log(err); // Se pone return para que no siga ejecutandose
  }

 

  console.log("El empleado:", empleado, "El Salario:",salario );
});
