import { QuotesIllustrationClose } from "../../../icons/QuotesIllustration/QuoteIllustrationClose";
import { QuotesIllustration } from "../../../icons/QuotesIllustration/QuotesIllustration";
import { Stars } from "../../../icons/Stars/Stars";
import "./OpinionMaria.css";

const OpinionMaria = () => {
  return (
    <div className="conteiner-each">
      <div className="frame-each">
        <div className="quote-each">
          <QuotesIllustration className="quotes-illustration" />
          <div className="div-each">
            <div className="text-wrapper-each">
              <b>Maria D.</b>
            </div>
            <Stars className="stars-instance-each" />
          </div>
          <p className="p-each">
            El diseño y comodidad de los muebles es muy buena! La atención,
            predisposición y flexibilidad en los horarios x parte de los dueños
            es excelente! Los precios muuuy acomodados! Lo recomiendo
            ampliamente. Lo volvería a elegir sin dudar
          </p>
          <QuotesIllustrationClose className="quotes-illustration-close-each" />
        </div>
       
      </div>
    </div>
  );
};

export default OpinionMaria;