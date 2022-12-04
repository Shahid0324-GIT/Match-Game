import './index.css'

const Navbar = props => {
  const {score, seconds} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <ul className="logo-and-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </ul>

        <ul className="scores-container">
          <p className="score">Score: {score}</p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt=" timer"
              className="image"
            />
            <p className="timer">{seconds} Sec</p>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
