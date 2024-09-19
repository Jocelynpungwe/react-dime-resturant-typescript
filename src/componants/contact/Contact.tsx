import { useState } from 'react'
import styled from 'styled-components'
import imgSrc from '../../assets/images/homepage/enjoyable-place-mobile@2x.jpg'
import { Link } from 'react-router-dom'
import { eventLinks } from '../../utils/links'

const Contact = () => {
  const [chooseEvent, setChooseEvent] = useState<number>(0)

  return (
    <Wrapper className="main-container">
      <article className="contact-article">
        <div className="img-container">
          <img src={imgSrc} alt="table food" />
        </div>
        <button
          onClick={() => setChooseEvent(0)}
          className={`${chooseEvent !== 0 && 'not-active'}`}
        >
          FAMILY GATHERING
          <div className={`${chooseEvent === 0 && 'active'}`}></div>
        </button>
        <button
          className={`${chooseEvent !== 1 && 'not-active'}`}
          onClick={() => setChooseEvent(1)}
        >
          SPECIAL EVENTS
          <div className={`${chooseEvent === 1 && 'active'}`}></div>
        </button>
        <button
          className={`${chooseEvent !== 2 && 'not-active'}`}
          onClick={() => setChooseEvent(2)}
        >
          SOCIAL EVENTS
          <div className={`${chooseEvent === 2 && 'active'}`}></div>
        </button>

        <h2>{eventLinks[chooseEvent].heading}</h2>
        <p>{eventLinks[chooseEvent].desc}</p>
        <Link to="/booking" className="secondary-button">
          BOOK A TABLE
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  .contact-article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .img-container {
    box-shadow: var(--shadow-1);
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: var(--color-gray);
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem; /* 164.706% */
    letter-spacing: 0.15625rem;
    border: none;
    background: none;
  }

  .active {
    width: 3rem;
    border-bottom: 3px solid var(--color-beaver);
  }

  .not-active {
    opacity: 0.5;
  }
`

export default Contact
