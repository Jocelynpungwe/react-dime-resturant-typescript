import styled from 'styled-components'
const Reservaction = () => {
  return (
    <Wrapper className="reservation-container">
      <h2>Ready to make a reservation?</h2>
      <button className="primary-button">BOOK A TABLE</button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  color: var(--color-white);
  h2 {
    margin-bottom: 1rem;
  }
`

export default Reservaction
