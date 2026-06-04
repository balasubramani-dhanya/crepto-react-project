import Frame from '../assets/Frame.png'
import Bitcoin from '../assets/Bitcoin-1.png'
import Shield from '../assets/shield.png'
import Etherium from '../assets/Etherium-2.png'
import Monero from '../assets/Monero-2.png'
import Suitcase from '../assets/suitcase.png'
import logo from '../assets/Group 2.png'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
          <img
            src={Bitcoin}
            alt="bitcoin"
            className="floating-icon bitcoin-icon"
          />

          <img
            src={Etherium}
            alt="ethereum"
            className="floating-icon ethereum-icon"
          />

          <img
            src={Shield}
            alt="shield"
            className="floating-icon shield-icon"
          />

          <img
            src={Suitcase}
            alt="suitcase"
            className="floating-icon suitcase-icon"
          />

          <img
            src={Monero}
            alt="Monero"
            className="floating-icon crypto-icon"
          />

          <div className='container'>
            <div className='content'>
              <h2>
                Join our vibrant community of crypto enthusiasts, investors, and
                innovators.
              </h2>

              <button className='btn-primary'>Join Now</button>

            </div>

          </div>
      </div>

      <div className="footer-bottom "
        style={{
                backgroundImage: `url(${Frame})`
            }}>
        <div className="footer-about">
          <h3><img src={logo} alt="Company logo" /></h3>
          <p>Business token and blockchain ecosystem.</p>
          <div className="email">
            <h3>Email</h3>
            <p>hello@sreechain.com</p>
            <p>contact@sreechain.com</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Docs</h4>
          <ul>
            <li>FAQ</li>
            <li>Whitepaper</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Blockchain, the world’s leading bitcoin operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card, or bank transfer. </p>
          
          <p>Sign up to get the latest in Bee chain  news, discounts, and more.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer