import { useState } from 'react'
import styled from 'styled-components'
import imgSrc from '../../assets/images/homepage/enjoyable-place-mobile@2x.jpg'
import imgTablet from '../../assets/images/homepage/enjoyable-place-tablet@2x.jpg'
import { Link } from 'react-router-dom'
import { eventLinks } from '../../utils/links'

const Contact = () => {
  const [chooseEvent, setChooseEvent] = useState<number>(0)

  return (
    <Wrapper className="main-container">
      <article className="contact-article">
        <div className="img-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="76"
            viewBox="0 0 160 76"
            fill="none"
            className="deco"
          >
            <rect y="70" width="160" height="6" fill="#9E7F66" />
            <rect y="56" width="160" height="6" fill="#9E7F66" />
            <rect y="42" width="160" height="6" fill="#9E7F66" />
            <rect y="28" width="160" height="6" fill="#9E7F66" />
            <rect y="14" width="160" height="6" fill="#9E7F66" />
            <rect width="160" height="6" fill="#9E7F66" />
          </svg>
          <img
            src={imgSrc}
            alt="table food"
            srcSet={`${imgSrc} 600w,
          ${imgTablet} 1000w`}
          />
        </div>
        <div className="btn-container">
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
        </div>
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

  .btn-container {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .deco {
    display: none;
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

  @media screen and (min-width: 600px) {
    .btn-container {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .img-container {
      position: relative;
    }

    .deco {
      display: block;
      position: absolute;
      top: -40px;
    }
    .secondary-button {
      align-self: center;
    }
  }

  @media screen and (min-width: 700px) {
    .deco {
      top: -40px;
      left: -50px;
    }
  }
`

export default Contact
