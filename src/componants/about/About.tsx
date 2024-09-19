import styled from 'styled-components'
import SectionA from './SectionA'
import { type SectionProps, aboutLink } from '../../utils/links'

const About = () => {
  return (
    <Wrapper className="main-container">
      <div className="container">
        {aboutLink.map((links: SectionProps) => {
          return (
            <div
              className={`${links.id === 1 ? 'section-a' : 'section-b'}`}
              key={links.id}
            >
              <SectionA
                imageSrc={links.imageSrc}
                tabletImg={links.tabletImg}
                heading={links.heading}
                desc={links.desc}
                alt={links.desc}
              />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 6rem 0;
  .container {
    margin-top: -190px;
  }
  .section-a {
    margin-bottom: 5rem;
  }
`

export default About
