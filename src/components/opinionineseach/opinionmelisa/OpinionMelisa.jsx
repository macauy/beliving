import React from 'react'
import {Stars} from '../../../icons/Stars/Stars'
import {QuotesIllustrationClose} from '../../../icons/QuotesIllustration/QuoteIllustrationClose'
import './OpinionMelisa.css'


const OpinionMelisa = () => {

return (
<div className='frame-each'>
    <div className="quote-each">

            <QuotesIllustrationClose className="quotes-illustration-each"/>

        <div className="div-each">
            <div className="text-wrapper-each">Melisa C.</div>
            <Stars className="stars-instance-each"/>    
         </div>
              <p className="p-each">
              Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
              <br />
              Excelente atención, los living y cada detalles en perfectas condiciones. Super recomendables 🤗
            </p>
            <QuotesIllustrationClose className="quotes-illustration-close-each"/>
    </div>

    
</div>
)
}

/* 
          
          <Stars className="stars-instance" />

*/

export default OpinionMelisa