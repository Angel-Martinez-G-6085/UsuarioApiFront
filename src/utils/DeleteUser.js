export const borrarUsuario = async (IDusuarioborrar) => {
    try {
        let response = await fetch(`http://localhost:3002/borrar/${IDusuarioborrar}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response) {
            console.log(response)
        }
    } catch(eroor) {
        console.log(eroor);
    }
}