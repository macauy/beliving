import React from 'react'
import {QuotesIllustration} from '../../../icons/QuotesIllustration/QuotesIllustration'
import {QuotesIllustrationClose} from '../../../icons/QuotesIllustration/QuoteIllustrationClose'
import {Stars} from '../../../icons/Stars/Stars'
import './OpinionMaria.css'

const OpinionMaria = () => {
  return (
    <div className='frame'>

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


    </div>
  )
}

export default OpinionMaria