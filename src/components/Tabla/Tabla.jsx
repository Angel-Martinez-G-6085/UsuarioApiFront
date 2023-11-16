import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/UseFetch'
import { borrarUsuario } from '../../utils/DeleteUser';
import Crearform from '../crearForm/crearForm';

export const Tabla = () => {
    const [Toogle, setToogle] = useState("0");
    const { data, error } = useFetch("http://localhost:3002/");

    switch (Toogle) {
        case "0":
            return(
                <div className="container-fluid">
                <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>(
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.edad}</td>
                                <td><button className='btn btn-primary' onClick={()=>{console.log(item)}}>editar</button></td>
                                <td><button className='btn btn-danger' onClick={(e) => borrarUsuario(item.id)}>eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
                <div className="d-flex justify-content-center container-fluid">
                    <button className='btn btn-primary' onClick={(e) => setToogle("1")}>Agregar usuario</button>
                </div>
            </div>
            )
            break;
            case "1":
                return (
                    <Crearform setToogle={setToogle}/>
                )
                break;

    }
}