import styled from 'styled-components'

import { SectionProps } from '../../utils/links'
const ServiceInfo = ({
  imageSrc,
  alt,
  heading,
  desc,
  tabletImg,
}: SectionProps) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img
          src={imageSrc}
          alt={alt}
          srcSet={`${imageSrc} 600w,
          ${tabletImg} 1000w`}
        />
        <div className="active"></div>
      </div>
      <div>
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  img,
  h3,
  p {
    margin-bottom: 0.5rem;
  }
  border-bottom: 1px solid var(--color-beaver);
  padding-bottom: 1.5rem;

  .active {
    display: none;
    width: 3rem;
    border-bottom: 3px solid var(--color-beaver);
  }

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 10.5rem 1fr;
    grid-gap: 2.5rem;
    img {
      height: 100%;
    }
    .img-container {
      position: relative;
    }
    .active {
      display: block;
      position: absolute;
      right: -40px;
      top: 30px;
    }
  }
`

export default ServiceInfo
