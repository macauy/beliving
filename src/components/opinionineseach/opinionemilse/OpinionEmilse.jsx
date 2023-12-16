import { QuotesIllustration } from "../../../icons/QuotesIllustration/QuotesIllustration";
import { QuotesIllustrationClose } from "../../../icons/QuotesIllustrationClose/QuoteIllustrationClose";
import { Stars } from "../../../icons/Stars/Stars";
import "./OpinionEmilse.css";

const OpinionEmilse = () => {
  return (
    <div className="conteiner-each">
      <div className="frame-each">
      <QuotesIllustration className="quotes-illustration" />
        <div className="quote-each">
          <div className="div-each">
            <div className="text-wrapper-each">
              <b>Emilse G.</b>
            </div>
            <Stars className="stars-instance-each" />
          </div>
          <p className="p-each">
            Una experiencia maravillosa. Precios accesibles, puntualidad y la
            mejor atención. Sin lugar a duda un cumpleaños feliz. Sigan asi
            chicos!
          </p>
        </div>
        <QuotesIllustrationClose className="quotes-illustration-close-each" />
      </div>
    </div>
  );
};

export default OpinionEmilse;
