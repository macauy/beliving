import React from 'react'
import {QuotesIllustration} from '../../../icons/QuotesIllustration/QuotesIllustration'
import {QuotesIllustrationClose} from '../../../icons/QuotesIllustration/QuoteIllustrationClose'
import {Stars} from '../../../icons/Stars/Stars'
import './OpinionEmilse.css'

const OpinionEmilse = () => {
  return (
    <div>

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
  );
}

export default OpinionEmilse