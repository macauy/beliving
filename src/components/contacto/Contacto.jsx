//mport { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; //siempre se importa asi ---para mprotar todo (*) de la libreria yup y dale un nombre Yup
import './Contacto.css'
import styled from "@emotion/styled";


const Contacto = () => {

  const{handleSubmit, handleChange, errors}= useFormik({
  
    initialValues:{
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    },
    onSubmit: (data)=>{console.log(data)},
//?----esquema de validacion Yup-------
    validationSchema: Yup.object({ // se agregan todos los inputs a validar
        nombre: Yup.string().required("Campo obligatorio").min(3, "Debe tener al menos 3 caractares"),
        email: Yup.string().email("No es un email valido").required("Campo obligatorio"),
        telefono: Yup.number().typeError("No es un número valido").required("Campo obligatorio").min(9, "Debe tener al menos 10 números"),
        mensaje: Yup.string().required("Campo obligatorio").min(15, "Debe de tener al menos 15 caracteres")
    }),
   
    validateOnChange:false,
  });
//console.log({errors});

  return (
    <div className="conteiner-contacto">
        <div className='tituleConteiner'>Contacto</div>

        <div className='mensajes-texto'>
          <p>Completá el siguiente formulario y empezá a planificar tu próximo evento.</p>
        </div>

{/* ------------------------------------ FORMULARIO ----------------------------------------*/}
        
        <form className='formulario'  onSubmit={handleSubmit}>

          <label htmlFor="nombre"><b>Nombre*</b></label>
          <input type="text" name="nombre" onChange={handleChange} placeholder='Ingresá tu nombre' />
            <span className="span">{errors.nombre}</span>
          <label htmlFor="email"><b>Correo electronico*</b></label>
          <input type="text"  name="email"  onChange={handleChange} placeholder='Ingresá tu e-mail'/>
            <span className="span">{errors.email}</span>
          <label htmlFor="telefono"><b>Telefono*</b></label>
          <input type="text" name="telefono" onChange={handleChange} placeholder='Ingresá tu teléfono (o WhatsApp)'/>
            <span className="span" >{errors.telefono}</span>

{/* ------------------------------------ INSTRUCCIONES PARA MANDAR MENSAJE ----------------------------------------*/}
         
          <ul className='mensajes-texto'>
            <p><b>En el siguiente espacio nos gustaría que nos cuentes: </b></p>
              <li> - qué mobiliario te interesa.</li>
              <li> - qué tipo de evento querés realizar.</li>
              <li> - cuántas personas son. </li>
              <li> - cuándo y en qué lugar se realizará (salón de evento, casa particular, SUM, etc.)</li>
          </ul>
{/* ------------------------------------ CAJA DE TEXTO DEL MENSAJE ----------------------------------------*/}

          <label htmlFor="mensaje"><b>Mensaje*</b></label>
          <textarea className='mensaje-conteiner' name="mensaje" onChange={handleChange} placeholder='Contanos sobre tu evento'/>
              <span className="span">{errors.mensaje}</span>

{/* ------------------------------------ BOTON ENVIAR ----------------------------------------*/}
            
          <button className="contacto-button" type='submit'> 
            <div className="contacto-button-text">ENVIAR</div>
          </button>
      </form>

      <div className='mensajes-texto'>
        <p>¡Nos contactaremos con vos a la brevedad! Recordá que también podés contactarnos por <b>WhatsApp.</b></p>
      </div>
    </div>
  )
}

 /*
 import { useState } from "react";
import './Contacto.css'


const Contacto = () => {

//----- estados para trabajar los valores del formulario
  const[nombre,setNombre]= useState("");
  const[email,setEmail]= useState("");
  const[telefono,setTelefono]= useState("");
  const[mensaje,setMensaje]= useState("");

//------------Manjera los errores al no llenar correctamente el form-------------
  const [error, setError] = useState("");

 //--------------- FUNCION Y VALIDACIÓN ----------------
  const handlerForm =(e)=>{
    e.preventDefault();

//------------------ VERIFICA QUE LSO CAMPOS ESTEN COMPLETOS ------------------

    if(!nombre || !email || !telefono || !mensaje){
      //setError("Por Favor completa todos los campos );
      alert("Por Favor completa todos los campos correctamente")
    }
    

   //! PARA SETEAR 
   setNombre("");
   setEmail("");
   setTelefono("");
   setMensaje("");
   setError("");
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
          <input type="number" id="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}  placeholder='Ingresá tu teléfono (o WhatsApp)'/>
        
          <ul className='mensajes-texto'>
            <p><b>En el siguiente espacio nos gustaría que nos cuentes: </b></p>
              <li> - qué mobiliario te interesa.</li>
              <li> - qué tipo de evento querés realizar.</li>
              <li> - cuántas personas son. </li>
              <li> - cuándo y en qué lugar se realizará (salón de evento, casa particular, SUM, etc.)</li>
          </ul>

          <label htmlFor="mensaje"><b>Mensaje*</b></label>
          <textarea className='mensaje-conteiner 'value={mensaje} onChange={} placeholder='Contanos sobre tu evento'/>
        
          <button className="contacto-button" type='submit'> 
            <div className="contacto-button-text">ENVIAR</div>
          </button>

            {
              error && <p style={{color:"red"}}>{error}</p>
            }

      </form>

      <div className='mensajes-texto'>
        <p>¡Nos contactaremos con vos a la brevedad! Recordá que también podés contactarnos por <b>WhatsApp.</b></p>
      </div>
    </div>
  )
}
 
 
 

 para crrar un nuevo documento por cada usuario en firebase 
    addDoc agrega un docuemnto nuevo a la coleccion.

    addDoc(collection(db, "nombre de la coleccion"),{
      nombre: nombre;
      email: email,
      telefono: telefono,
      mensaje: mensaje;
    })

*/ 

export default Contacto