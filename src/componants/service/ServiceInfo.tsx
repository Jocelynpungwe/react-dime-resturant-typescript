import styled from 'styled-components'

import { SectionProps } from '../../utils/links'
const ServiceInfo = ({ imageSrc, alt, heading, desc }: SectionProps) => {
  return (
    <Wrapper>
      <img src={imageSrc} alt={alt} />
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
`

export default ServiceInfo
