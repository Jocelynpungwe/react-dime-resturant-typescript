import styled from 'styled-components'
import Logo from './Logo'
import { Link } from 'react-router-dom'
const HeroBooking = () => {
  return (
    <Wrapper className="booking-hero">
      <div className="main-container nav">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="main-container hero-container">
        <article className="hero">
          <h1>Reservations</h1>
          <p>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
          <Link to="#booking" className="primary-button">
            BOOK A TABLE
          </Link>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
  color: var(--color-white);
  height: 100vh;
  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
  }

  .hero-container {
    margin-top: 9rem;
  }
  .logo,
  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 3.31rem;
  }
  .nav {
    display: flex;
    justify-content: space-between;
  }

  .home {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 1000px) {
    text-align: left;
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    h1 {
      font-size: 4rem;
    }
  }
`

export default HeroBooking
