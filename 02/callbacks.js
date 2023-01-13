
//Un callbacks es una funcion que se ejecuta en un cierto tiempo
//Es una funcion que se manda como argumento a otra funncion

// setTimeout( () => {
//     console.log('Hola Mundo');
// } , 1000 );  Asi se representa 1 segundo


const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(user)
    }, 1500 )

}


getUsuarioByID( 10, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});