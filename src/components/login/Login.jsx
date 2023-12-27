// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; //siempre se importa asi (*)---para mprotar todo de la libreria yup y dale un nombre Yup
import "../contacto/Contacto.css";
import Button from "../../icons/Button/Button";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const { handleSubmit, handleChange, handleReset, errors, values } = useFormik(
		{
			initialValues: {
				email: "",
				password: "",
			},

			onSubmit: (e, data) => {
				console.log(data);
				console.log(values.email, "email");
				console.log(values.password, "pass");

				signInWithEmailAndPassword(auth, values.email, values.password)
					.then((userCredential) => {
						// Signed in
						const user = userCredential.user;
						navigate("/panel");
						console.log(user);
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						console.log(errorCode, errorMessage);
						console.log("errror en login");
					});
			},

			validationSchema: Yup.object({
				email: Yup.string()
					.email("Esta dirección de e-mail no es válida.")
					.required("Este campo es obligatorio."),
			}),
			validateOnChange: false,
		}
	);

	return (
		<div className="container-contacto">
			<h1 className="title">Login</h1>
			<form
				className="formulario"
				onSubmit={handleSubmit}
				onReset={handleReset}
			>
				<label htmlFor="email">
					<b>Correo electrónico</b>
				</label>
				<input
					type="text"
					value={values.email}
					name="email"
					onChange={handleChange}
					placeholder="Ingresá tu e-mail"
				/>
				<span className="span">{errors.email}</span>
				<label htmlFor="password">
					<b>Contraseña</b>
				</label>
				<input
					type="password"
					value={values.password}
					name="password"
					onChange={handleChange}
					placeholder="Ingresá tu contraseña"
				/>
				<span className="span">{errors.telefono}</span>

				{/* ------------------------------------ BOTON ENVIAR ----------------------------------------*/}
				<div className="contacto-button">
					<Button style="default" text="INGRESAR" type="submit"></Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
