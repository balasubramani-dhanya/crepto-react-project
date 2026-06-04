import logo from '../assets/Group 2.png'

function LotteryCard({ nft = '6/10' }) {
  return (
    <div className="lottery-card">

      {/* TOP */}
      <div className="lottery-top">

        <img
          src={logo}
          alt="logo"
          className="lottery-logo"
        />

        <div className="nft-wrapper">

          <div className="nft-circle">
            <span>{nft}</span>
          </div>

          <p>NFTs remaining</p>

        </div>

      </div>

      {/* CENTER CONTENT */}
      <div className="card-content">

        <h4>Every Month</h4>

        <h2>103,000,000BTC</h2>

        {/* TIMER LABELS */}
        <div className="timer-labels">
          <span>Hour</span>
          <span>Min</span>
          <span>Sec</span>
        </div>

        {/* TIMER */}
        <div className="timer">

          <div className="time-box">24</div>

          <div className="dots">:</div>

          <div className="time-box">35</div>

          <div className="dots">:</div>

          <div className="time-box">10</div>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="card-buttons">

        <button className="light-btn">
          Prizes
        </button>

        <button className="danger-btn">
          Buy Now
        </button>

      </div>

    </div>
  )
}

function Lottery() {
  return (
    <section className="lottery-section bg-color">

      {/* HEADING */}
      <div className="section-heading">

        <h2>Lottery</h2>

        <p>
          Experience the thrill of winning crypto prizes with our
          cutting-edge lottery platform. Participate in our transparent
          and provably fair crypto lotteries.
        </p>

      </div>

      {/* CARDS */}
      <div className="lottery-grid">

        <LotteryCard nft="6/10" />

        <LotteryCard nft="3/10" />

        <LotteryCard nft="8/10" />

      </div>

    </section>
  )
}

export default Lottery