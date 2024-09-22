import styled from 'styled-components'

type InputProps = {
  name: string
  label: string

  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectInput = ({
  name,
  label,

  handleChange,
}: InputProps) => {
  return (
    <Wrapper>
      <select
        name={name}
        className="form-input"
        onChange={handleChange}
        aria-label={label}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-input {
    width: 100%;
    height: 2.6875rem;
    padding: 0 0 0.94rem 1rem;
    color: #111;
    font-family: 'League Spartan';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 140% */
    border: none;
    border-bottom: 1px solid #8e8e8e;
    margin-bottom: 2rem;
  }
`

export default SelectInput
