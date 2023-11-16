import React from 'react'
import { useForm } from "react-hook-form"
import { sendForm } from '../../utils/SendForm';

 const Crearform = ({setToogle}) => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onSubmitHandeler = (data) => {
        sendForm("http://localhost:3002/crear",data);
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmitHandeler)}>
            <div className="">
                <label htmlFor="nombre">Nombre</label>
                <input {...register("nombre",{required:true})} type="text" placeholder="Escribe tu nombre"/>
            </div>
            <div className="">
                <label htmlFor="apellido">Apellido</label>
                <input {...register("apellido",{required:true})} type="text" placeholder="Escribe tu apellido"/>
            </div>
            <div className="">
                <label htmlFor="edad">Edad</label>
                <input {...register("edad",{required:true})} type="number" placeholder="Escribe tu edad"/>
            </div>
            <div className="">
                <label htmlFor="direccion">Direccion</label>
                <input {...register("direccion",{required:true})} type="text" placeholder="Escribe tu direccion"/>
            </div>
            <div className="">
                <label htmlFor="telefono">Telefono</label>
                <input {...register("telefono",{required:true})} type="tel" placeholder="Escribe tu telefono"/>
            </div>
            <div className="">
                <button type='submit'>Enviar</button>
                <button onClick={(e) =>setToogle("0")}>Volver</button>
            </div>
        </form>
    </>
  )
}
export default Crearform;