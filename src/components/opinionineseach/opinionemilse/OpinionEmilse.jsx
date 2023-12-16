//import { QuotesIllustration } from "../../../icons/QuotesIllustration/QuotesIllustration";
//import { QuotesIllustrationClose } from "../../../icons/QuotesIllustrationClose/QuoteIllustrationClose";
import QuotesIllustrationMobile from '../../../icons/QuotesIllustrationMobile/QuotesIllustrationMobile'
import QuotesIllustrationMobileClose from '../../../icons/QuotesIllustrationMobileClose/QuotesIllustrationMobileClose';
import { Stars } from "../../../icons/Stars/Stars";
import "./OpinionEmilse.css";

const OpinionEmilse = () => {
  return (
    <div className="conteiner-each">
      <div className="frame-each">
          <QuotesIllustrationMobile className='quotes-illustrationMobile' />
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
        <QuotesIllustrationMobileClose className="quotes-illustrationMobileClose"  />
      </div>
    </div>
  );
};

export default OpinionEmilse;
