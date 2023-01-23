const fs = require('fs');

const crearArchivo = async( base = 5 ) =>{

    console.log('=====================');
    console.log('    Tabla del:',  base);
    console.log('=====================');

    let salida = '';

    for( let i = 1; i <=10; i++ ){
        console.log(`${ base } x ${ i } = ${ base * i }\n`);
    }
    
    console.log(salida);
    
    fs.writeFileSync( `tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`;
}

module.exports = {
    crearArchivo
}