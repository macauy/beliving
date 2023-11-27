import { useState } from "react";
import './Contacto.css'


const Contacto = () => {

//----- estados para trabajar los valores del formulario
  const[nombre,setNombre]= useState("")
  const[email,setEmail]= useState("")
  const[telefono,setTelefono]= useState("")
  const[mensaje,setMensaje]= useState("")
 //---- funcion manejadora del form y evitar la recarga del formulario---
const handlerForm =(e)=>{
  e.preventDefault();

 
  
    /*para crrar un nuevo documento por cada usuario en firebase 
    addDoc agrega un docuemnto nuevo a la coleccion.

    addDoc(collection(db, "nombre de la coleccion"),{
      nombre: nombre;
      email: email,
      telefono: telefono,
      mensaje: mensaje;
    })
    */ 
   //! PARA SETEAR 
   setNombre("");
   setEmail("");
   setTelefono("");
   setMensaje("");
}



  return (

    <div className="conteiner-contacto">
      <div className='tituleConteiner'>Contacto</div>

      <div className='mensajes-texto'>
        <p>Completá el siguiente formulario y empezá a planificar tu próximo evento.</p>
      </div>

      <form className='formulario'  onSubmit={handlerForm}>

        <label htmlFor="nombre"><b>Nombre*</b></label>
        <input type="text" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder='Ingresá tun nombre' />

        <label htmlFor="email"><b>Correo electronico*</b></label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Ingresá tu e-mail'/>

        <label htmlFor="telefono"><b>Telefono*</b></label>
        <input type="text" id="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}  placeholder='Ingresá tu teléfono (o WhatsApp)'/>

        <ul className='mensajes-texto'>
            <p><b>En el siguiente espacio nos gustaría que nos cuentes: </b></p>
              <li> - qué mobiliario te interesa.</li>
              <li> - qué tipo de evento querés realizar.</li>
              <li> - cuántas personas son. </li>
              <li> - cuándo y en qué lugar se realizará (salón de evento, casa particular, SUM, etc.)</li>
        </ul>

        <label htmlFor="mensaje"><b>Mensaje*</b></label>
        <input type="text" id="mensaje-conteiner"  className='mensaje-conteiner 'value={mensaje} onChange={(e)=>setMensaje(e.target.value)} placeholder='Contanos sobre tu evento'/>

        <button className="enviar"  type='submit'>Enviar</button>

      </form>
      <div className='mensajes-texto'>
        <p>¡Nos contactaremos con vos a la brevedad! Recordá que también podés contactarnos por <b>WhatsApp.</b></p>
      </div>
    </div>
  )
}


/*
const Contacto = () => {

  const {register, handleSubmit} =useForm();
  const enviar = (data)=>{
    console.log(data)
  }
  return (

    <div className="conteiner-contacto">
      <div className='tituleConteiner'>Contacto</div>

      <div className='mensajes-texto'>
        <p>Completá el siguiente formulario y empezá a planificar tu próximo evento.</p>
      </div>

      <form className='formulario'onSubmit={handleSubmit(enviar)}  >
        <label htmlFor="">Nombre</label>
        <input type="text" placeholder='Ingresá tun nombre' {...register('nombre')}/>

        <label htmlFor="">Correo electronico</label>
        <input type="email" placeholder='Correo electronico'{...register('email')}/>

        <label htmlFor="">Telefono</label>
        <input type="text" placeholder='Numero telefonico'{...register('telefono')}/>

        <ul className='mensajes-texto'>
            <p>En el siguiente espacio nos gustaría que nos cuentes: </p>
              <li>- qué mobiliario te interesa.</li>
              <li>- qué tipo de evento querés realizar.</li>
              <li>- cuántas personas son. </li>
              <li>- cuándo y en qué lugar se realizará (salón de evento, casa particular, SUM, etc.)</li>
        </ul>

        <label htmlFor=""></label>
        <input type="text" placeholder='Texto'{...register('mensaje')}/>

        <button className="enviar"  type='submit'>Enviar</button>
          
      </form>
      <div className='mensajes-texto'>
        <p>¡Nos contactaremos con vos a la brevedad! Recordá que también podés contactarnos por <b>WhatsApp.</b></p>
      </div>
    </div>

*/
export default Contacto