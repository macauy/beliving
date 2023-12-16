import { Stars } from "../../../icons/Stars/Stars";
import QuotesIllustrationMobile from '../../../icons/QuotesIllustrationMobile/QuotesIllustrationMobile'
import QuotesIllustrationMobileClose from '../../../icons/QuotesIllustrationMobileClose/QuotesIllustrationMobileClose'
//import { QuotesIllustration } from "../../../icons/QuotesIllustration/QuotesIllustration";
//import { QuotesIllustrationClose } from "../../../icons/QuotesIllustrationClose/QuoteIllustrationClose";
import "./OpinionMelisa.css";

const OpinionMelisa = () => {
  return (
    <div className="conteiner-each">
      <div className="frame-each">
        <div className="quote-each">
        <QuotesIllustrationMobile className="quotes-illustrationMobile" />
          <div className="div-each">
            <div className="text-wrapper-each">
              <b>Melisa C.</b>
            </div>
            <Stars className="stars-instance" />
          </div>
          <p className="p-each">
            Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
            <br />
            Excelente atención, los living y cada detalles en perfectas
            condiciones. Super recomendables 🤗
          </p>
        </div>
        <QuotesIllustrationMobileClose className="quotes-illustrationMobileClose" />
      </div>

    </div>
  );
};

/* 
        <Stars className="stars-instance" />

*/

export default OpinionMelisa;
