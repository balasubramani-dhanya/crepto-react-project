import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'

function Card({ title, text , image }) {
  return (
    <div className="info-card">
      <div className="cardimg">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#">View More</a>
    </div>
  )
}

function Cards() {
  return (
    <section className="cards-section bg-color">
      <Card
        image={c1}
        title="Buy partially token NFT"
        text="Explore unique blockchain based NFT assets."
      />

      <Card
      image={c2}
        title="Earning rewards"
        text="Earn rewards by staking and supporting projects."
      />

      <Card
        image={c3}
        title="Win prizes"
        text="Join crypto competitions and win amazing prizes."
      />
    </section>
  )
}

export default Cards