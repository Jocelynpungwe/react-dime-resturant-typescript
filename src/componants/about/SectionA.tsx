import styled from 'styled-components'
import { type SectionProps } from '../../utils/links'

const SectionA = ({
  imageSrc,
  heading,
  desc,
  alt,
  tabletImg,
  desktopImg,
  id,
}: SectionProps) => {
  return (
    <Wrapper>
      <div className="img-container">
        {id === 2 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="76"
            viewBox="0 0 160 76"
            fill="none"
            className="line-deco"
          >
            <rect y="70" width="160" height="6" fill="#9E7F66" />
            <rect y="56" width="160" height="6" fill="#9E7F66" />
            <rect y="42" width="160" height="6" fill="#9E7F66" />
            <rect y="28" width="160" height="6" fill="#9E7F66" />
            <rect y="14" width="160" height="6" fill="#9E7F66" />
            <rect width="160" height="6" fill="#9E7F66" />
          </svg>
        )}

        <div className="second-deco"></div>

        <img
          srcSet={`${imageSrc} 600w,
          ${tabletImg} 1000w, ${desktopImg} 1500w`}
          alt={alt}
          src={imageSrc}
        />
      </div>
      <div className={`center ${id === 2 && 'order'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="7"
          viewBox="0 0 71 7"
          fill="none"
        >
          <rect x="15" y="3" width="56" height="1" fill="#9E7F66" />
          <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
        </svg>
        <h2>{heading}</h2>
        <p>{desc}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  color: var(--color-mirage);

  div {
    box-shadow: var(--dark-shadow);
    margin-bottom: 1.5rem;
  }

  svg,
  h2,
  p {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }

  .line-deco {
    display: none;
  }

  .second-deco {
    display: none;
    width: 35rem;
    height: 20rem;
    flex-shrink: 0;
    border-radius: 6.25rem 0rem 0rem 0rem;
    opacity: 0.0774;
    background: #5c6779;
  }

  @media screen and (min-width: 600px) {
    .line-deco {
      display: block;
      position: absolute;
      top: 50%;
      right: -50px;
    }
    .img-container {
      position: relative;
    }
  }

  .center {
    padding: 2rem;
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    h2 {
      font-size: 2.5rem;
    }
    p {
      text-align: left;
    }

    .center {
      padding: 7rem;
    }

    .order {
      order: -1;
    }
    .second-deco {
      display: block;
      position: absolute;
      z-index: 99;
      bottom: 0;
      left: -100px;
    }
  }
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`

export default SectionA
