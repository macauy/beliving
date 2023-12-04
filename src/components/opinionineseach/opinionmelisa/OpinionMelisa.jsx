import React from 'react'
import {Stars} from '../../../icons/Stars/Stars'
import {QuotesIllustration} from '../../../icons/QuotesIllustration/QuotesIllustration'
import {QuotesIllustrationClose} from '../../../icons/QuotesIllustration/QuoteIllustrationClose'
import './OpinionMelisa.css'


const OpinionMelisa = () => {

return (
<div className='frame'>
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
</div>
)
}

/* 
          
          <Stars className="stars-instance" />

*/

export default OpinionMelisa