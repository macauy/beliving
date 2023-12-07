
import {Stars} from '../../../icons/Stars/Stars'
import {QuotesIllustration} from '../../../icons/QuotesIllustration/QuotesIllustration'
import {QuotesIllustrationClose} from '../../../icons/QuotesIllustration/QuoteIllustrationClose'
import './OpinionMelisa.css'


const OpinionMelisa = () => {

return (
<div className='conteiner-each'>
    <div className='frame-each'>
        <div className="quote-each">
        <QuotesIllustration className="quotes-illustration"/>
            <div className="div-each">
                <div className="text-wrapper-each"><b>Melisa C.</b>
                </div>
                    <Stars className="stars-instance"/>
            </div>
            <p className="p-each">
                Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
            <br />
                Excelente atención, los living y cada detalles en perfectas condiciones. Super recomendables 🤗
            </p>
        </div>
        <QuotesIllustrationClose className="quotes-illustration-close"/>

    </div>

</div>

);
}

/* 
        <Stars className="stars-instance" />

*/

export default OpinionMelisa