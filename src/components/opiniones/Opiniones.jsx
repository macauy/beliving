import React from 'react'
import { QuotesIllustration } from "../../icons/QuotesIllustration/QuotesIllustration";
import {QuotesIllustrationClose} from "../../icons/QuotesIllustration/QuoteIllustrationClose"
//import { QuotesCloseDeviceDesktop } from "./QuotesCloseDeviceDesktop";
import {Stars} from '../../icons/Stars/Stars'
import './Opiniones.css'


  export const Opiniones =()=> {
    return (
      <div>
        <div className='opiniones-titular-conteiner'><h2 className='opiniones-titular'>Qué piensan nuestros clientes</h2></div>

        <div className="frame">
          <div className="quote">
          <QuotesIllustration className="quotes-illustration" />
          <QuotesIllustrationClose className="quotes-illustration-close"/>

            <div className="div">
              <div className="text-wrapper">Melisa C.</div>
              <Stars className="stars-instance" />
            </div>
            <p className="p">
              Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
              <br />
              Excelente atención, los living y cada detalles en perfectas condiciones. Super recomendables 🤗
            </p>
          </div>

          <div className="quote">
          <QuotesIllustration className="quotes-illustration" />
          <QuotesIllustrationClose className="quotes-illustration-close"/>

            <div className="div">
              <div className="text-wrapper">Maria D.</div>
              <Stars className="stars-instance" />

            </div>
            <p className="p">
              El diseño y comodidad de los muebles es muy buena! La atención, predisposición y flexibilidad en los horarios
              x parte de los dueños es excelente! Los precios muuuy acomodados! Lo recomiendo ampliamente. Lo volvería a
              elegir sin dudar
            </p>
          </div>
          <div className="quote">
          <QuotesIllustration className="quotes-illustration" />
          <QuotesIllustrationClose className="quotes-illustration-close"/>


            <div className="div">
              <div className="text-wrapper">Emilse G.</div>
              <Stars className="stars-instance" />
            </div>
            <p className="p">
              Una experiencia maravillosa. Precios accesibles, puntualidad y la mejor atención. Sin lugar a duda un
              cumpleaños feliz. Sigan asi chicos!
            </p>
          </div>
        </div>
      </div>
    )
  }

export default Opiniones

/**
 * 
 * <QuotesIllustration className="quotes-illustration" />
  <Stars className="stars-instance" />
<QuotesCloseDeviceDesktop className="quotes-close-device-desktop-instance" />
 */




/*


import React from "react";
import { QuotesCloseDeviceDesktop } from "./QuotesCloseDeviceDesktop";
import { QuotesIllustration } from "./QuotesIllustration";
import { Stars } from "./Stars";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="quote">
        <QuotesIllustration className="quotes-illustration" />
        <QuotesCloseDeviceDesktop className="quotes-close-device-desktop" />
        <div className="div">
          <div className="text-wrapper">Melisa C.</div>
          <Stars className="stars-instance" />
        </div>
        <p className="p">
          Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
          <br />
          Excelente atención, los living y cada detalles en perfectas condiciones. Super recomendables 🤗
        </p>
      </div>
      <div className="quote">
        <QuotesIllustration className="quotes-illustration" />
        <QuotesCloseDeviceDesktop className="quotes-close-device-desktop-instance" />
        <div className="div">
          <div className="text-wrapper">Maria D.</div>
          <Stars className="stars-instance" />
        </div>
        <p className="p">
          El diseño y comodidad de los muebles es muy buena! La atención, predisposición y flexibilidad en los horarios
          x parte de los dueños es excelente! Los precios muuuy acomodados! Lo recomiendo ampliamente. Lo volvería a
          elegir sin dudar
        </p>
      </div>
      <div className="quote">
        <QuotesIllustration className="quotes-illustration" />
        <QuotesCloseDeviceDesktop className="quotes-close-device-desktop" />
        <div className="div">
          <div className="text-wrapper">Emilse G.</div>
          <Stars className="stars-instance" />
        </div>
        <p className="p">
          Una experiencia maravillosa. Precios accesibles, puntualidad y la mejor atención. Sin lugar a duda un
          cumpleaños feliz. Sigan asi chicos!
        </p>
      </div>
    </div>
  );
};



*/
 