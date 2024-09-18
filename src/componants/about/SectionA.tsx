import styled from 'styled-components'
import { type SectionProps } from '../../utils/links'

const SectionA = ({ imageSrc, heading, desc, alt }: SectionProps) => {
  return (
    <Wrapper>
      <div>
        <img src={imageSrc} alt={alt} />
      </div>
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
`

export default SectionA
