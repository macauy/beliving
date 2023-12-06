
import {QuotesIllustrationClose} from '../../../icons/QuotesIllustration/QuoteIllustrationClose'
import {Stars} from '../../../icons/Stars/Stars'
import './OpinionEmilse.css'

const OpinionEmilse = () => {
  return (
  <div className='frame-each'>
       <QuotesIllustrationClose className="quotes-illustration-close"/>
        <div className="quote-each">
            <div className="div-each">
                <div className="text-wrapper-each">Emilse G.</div>
                <Stars className="stars-instance-each" />
            </div>
             
            <p className="p-each">
              Una experiencia maravillosa. Precios accesibles, puntualidad y la mejor atención. Sin lugar a duda un
              cumpleaños feliz. Sigan asi chicos!
            </p>
            <QuotesIllustrationClose className="quotes-illustration-close"/>
        </div>
            
            
  </div>
  );
}

export default OpinionEmilse