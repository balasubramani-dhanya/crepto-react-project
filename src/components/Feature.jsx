import daoimg from '../assets/dao.png'
import launchpadimg from '../assets/rocket.png'
import learnimg from '../assets/learn.png'
import seedImg from '../assets/seed.png'

function Feature({ title, text, image, reverse }) {
  return (
    <div className={`feature ${reverse ? 'reverse' : ''}`}>

      <div className="feature-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn-secondary">Learn More →</button>
      </div>

      <div className="feature-image">
        <img src={image} alt={title} />
      </div>

    </div>
  )
}

function Features() {
  return (
    <section className="features-section bg-color">
      <Feature
        title="DAO"
        text="Join our decentralized community and shape the future of our project."
        image={daoimg}
      />

      <Feature
        title="Launchpad"
        text="Discover the next big thing in blockchain with our innovative launchpad platform."
        image={launchpadimg}
        reverse
      />

      <Feature
        title="Learn to Earn"
        text="Unlock your potential in the crypto space with our Learn to Earn program."
        image={learnimg}
      />

      <Feature
        title="Seed Funding"
        text="Are you a promising blockchain project in need of seed funding?"
        image={seedImg}
        reverse
      />
    </section>
  )
}

export default Features