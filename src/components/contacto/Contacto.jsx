import { useRef,useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; //siempre se importa asi (*)---para mprotar todo de la libreria yup y dale un nombre Yup
import "./Contacto.css";
import emailjs from "@emailjs/browser";
import Button from "../../icons/Button/Button";

const Contacto = () => {
// ------------- Variable con hook useref para usar la funcion onsubmit  --------
	const formRef = useRef(null); //uso para emailjs

	const [submitted, setSubmitted] = useState(false); // para mensaje de inf enviada

	const { handleSubmit, handleChange, handleReset, errors, values } = useFormik(
		{
			initialValues: {
				nombre: "",
				email: "",
				telefono: "",
				mensaje: "",
			},

			onSubmit: (data, { resetForm }) => {
				console.log(data);

				resetForm({
					values: {
						nombre: "",
						email: "",
						telefono: "",
						mensaje: "",
					},
					
				});
				setSubmitted(true)

//--------------------- EMAILJS -------- datos que pide  emailjs-------------------------
//-------------------    YOUR_SERVICE_ID     'YOUR_TEMPLATE_ID'                  'YOUR_USER_ID'
				emailjs
					.sendForm(
						"service_puwhspq",
						"template_16021ml",
						formRef.current,
						"AfmBwnG3dF4tZRZSs"
					)
					.then((result) => {
						console.log(result.text);
					})
					.catch((error) => {
						console.log(error.text);
					});
			},

			//?--------------- esquema de validacion Yup -----------------------------

			validationSchema: Yup.object({
				// se agregan todos los inputs a validar
				nombre: Yup.string().required("Este campo es obligatorio."),
				email: Yup.string()
					.email("Esta dirección de e-mail no es válida.")
					.required ( "Este campo es obligatorio."),
				telefono: Yup.number()
					.typeError("Este campo debe incluir solo números.")
					.required("Este campo es obligatorio."),
				mensaje: Yup.string().required("Este campo es obligatorio."),
			}),
			validateOnChange: false,
		}
	);
	console.log({ errors });

	return (
		<div className="container-contacto">
			<h1 className="title">Contacto</h1>
			<div className="">
				<p>
					Completá el siguiente formulario y empezá a planificar tu próximo
					evento.
				</p>
			</div>

{/* ------------------------------------ FORMULARIO ----------------------------------------*/}

			<form
				className="formulario"
				ref={formRef} // funcion Para emaljs mande los datos que el usuario ingreso
				onSubmit={handleSubmit}
				onReset={handleReset}
			>
				<label htmlFor="nombre">
					<b>Nombre*</b>
				</label>
				<input 
					type="text"
					value={values.nombre}
					name="nombre"
					onChange={handleChange}
					placeholder="Ingresá tu nombre"
				/>
				<span className="span">{errors.nombre}</span>

				<label htmlFor="email">
					<b>Correo electronico*</b>
				</label>
				<input
					type="text"
					value={values.email}
					name="email"
					onChange={handleChange}
					placeholder="Ingresá tu e-mail"
				/>
				<span className="span">{errors.email}</span>
				<label htmlFor="telefono">
					<b>Telefono*</b>
				</label>
				<input
					type="text"
					value={values.telefono}
					name="telefono"
					onChange={handleChange}
					placeholder="Ingresá tu teléfono (o WhatsApp)"
				/>
				<span className="span">{errors.telefono}</span>

{/* ------------------------------------ INSTRUCCIONES PARA MANDAR MENSAJE ----------------------------------------*/}
				<div className="mensajes-texto">
					<p>
						<b>En el siguiente espacio nos gustaría que nos cuentes: </b>
					</p>
					<ul>
						<li> qué mobiliario te interesa.</li>
						<li> qué tipo de evento querés realizar.</li>
						<li>cuántas personas son. </li>
						<li>
							cuándo y en qué lugar se realizará (salón de evento, casa
							particular, SUM, etc.)
						</li>
					</ul>
				</div>

{/* ------------------------------------ CAJA DE TEXTO DEL MENSAJE ----------------------------------------*/}
				<label htmlFor="mensaje">
					<b>Mensaje*</b>
				</label>
				<textarea
					className="mensaje-conteiner"
					value={values.mensaje}
					name="mensaje"
					onChange={handleChange}
					placeholder = "Contanos sobre tu evento"
				/>
				<span className="span">{errors.mensaje}</span>

{/* ------------------------------------ BOTON ENVIAR ----------------------------------------*/}
				<div className="contacto-button">
					<Button style="default" text="ENVIAR" type="submit"></Button>
				</div>
			</form>

{/*---------------------- renderizado de mensaje de informacón enviada ------------------*/}
			
					
					{submitted && <div className="info-enviada"><img className="logo-ok" src="../../../public/el_ok-circle.svg" alt="" /><p id="info-enviada-text">¡El mensaje fue enviado con éxito!</p></div> } 
			
			

			<div className="mensajes-texto">
				<p>
					¡Nos contactaremos con vos a la brevedad! Recordá que también podés
					contactarnos por <b>WhatsApp.</b>
				</p>
			</div>
		</div>
	);
};

export default Contacto;
