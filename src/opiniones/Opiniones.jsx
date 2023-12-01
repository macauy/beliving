import React from 'react'
import './Opiniones.css'

const Opiniones = () => {
  return (
    <div className="seccin-reseas">
      <div className="frame">
        <div className="text-wrapper">Qué piensan nuestros clientes</div>
      </div>
      <div className="div">
        <div className="quote">
          
          <div className="frame-2">
            <div className="text-wrapper-2">Melisa C.</div>
            <Stars className="stars-instance" />
          </div>
          <p className="p">
            Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
            <br />
            Excelente atención, los living y cada detalles en perfectas condiciones. Super recomendables 🤗
          </p>
        </div>
        <div className="quote">
          
          <div className="frame-2">
            <div className="text-wrapper-2">Maria D.</div>
            <Stars className="stars-instance" />
          </div>
          <p className="p">
            El diseño y comodidad de los muebles es muy buena! La atención, predisposición y flexibilidad en los
            horarios x parte de los dueños es excelente! Los precios muuuy acomodados! Lo recomiendo ampliamente. Lo
            volvería a elegir sin dudar
          </p>
        </div>
        <div className="quote">
         
          <div className="frame-2">
            <div className="text-wrapper-2">Emilse G.</div>
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
}/**<QuotesIllustration className="quotes-illustration" />
          <QuotesCloseDeviceDesktop className="quotes-close-device-desktop" /> */

export default Opiniones