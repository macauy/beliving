import { Stars } from "../../../icons/Stars/Stars";
import { QuotesIllustration } from "../../../icons/QuotesIllustration/QuotesIllustration";
import { QuotesIllustrationClose } from "../../../icons/QuotesIllustration/QuoteIllustrationClose";
import "./OpinionMelisa.css";

const OpinionMelisa = () => {
  return (
    <div className="conteiner-each">
      <div className="frame-each">
      <QuotesIllustration className="quotes-illustration" />
        <div className="quote-each">
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
          <QuotesIllustrationClose className="quotes-illustration-close-each" />
        </div>
      </div>
    </div>
  );
};

/* 
        <Stars className="stars-instance" />

*/

export default OpinionMelisa;
