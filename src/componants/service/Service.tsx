import styled from 'styled-components'
import ServiceInfo from './ServiceInfo'
import { SectionProps, serviceLink } from '../../utils/links'

const Service = () => {
  return (
    <Wrapper>
      <div className="main-container">
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
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
        <div className="service-container">
          {serviceLink.map((links: SectionProps) => {
            return (
              <ServiceInfo
                alt={links.alt}
                imageSrc={links.imageSrc}
                tabletImg={links.tabletImg}
                heading={links.heading}
                desc={links.desc}
                key={links.id}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4.5rem 0;
  background: var(--color-cod-gray);
  color: var(--color-white);

  .service-container {
    display: grid;
    grid-row-gap: 4rem;
    margin-top: 5rem;
  }

  h2 {
    margin: 1rem 0;
  }
`

export default Service
