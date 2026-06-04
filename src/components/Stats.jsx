import stake from '../assets/Staking.svg'
function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-image">
        <img src={stake} alt="Rocket" />
      </div>

      <div className="stats-content">
        <h2>Staking</h2>

        <p>
          Maximize the potential of your cryptocurrency by staking tokens on
          our secure and reliable platform.
        </p>

        <button className="btn-primary">Learn More</button>
      </div>
    </section>
  )
}

export default Stats