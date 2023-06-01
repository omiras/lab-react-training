import './CreditCard.css';
import visaLogo from '../assets/images/visa.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="card" style={{ backgroundColor: '#eeeeee' }}>
      <div className="logo--container">
        <img className="card--logo" src={visaLogo} />
      </div>
      <div className='card--numbers'>0123456789016984</div>
      <div>
        <div className="card--expiration">
          <span>Expires 03/21</span>
          <span style={{ marginLeft: '1rem' }}>N26</span>
        </div>
        <div>Mercedes Bouret</div>
      </div>
    </div>
  );
}

export default CreditCard;
