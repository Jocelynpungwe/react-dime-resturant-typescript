import styled from 'styled-components'

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const Form = ({ children, handleSubmit }: FormProps) => {
  return (
    <Wrapper id="booking">
      <form onSubmit={handleSubmit}>{children}</form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  form {
    padding: 2rem;
    background: #fff;
    box-shadow: 0px 75px 100px -50px rgba(56, 66, 85, 0.5);
    max-width: 33.75rem;
    width: 80vw;
    margin: 0 auto;
    transform: translateY(-20%);
  }

  @media screen and (min-width: 1000px) {
    form {
      transform: translateY(-40%);
    }
  }
`

export default Form
