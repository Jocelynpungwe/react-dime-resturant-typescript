import styled from 'styled-components'

type InputProps = {
  name: string
  label: string
  type: string
  placeholder: string
  value: string | number
  min?: string
  max?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
  name,
  type,
  label,
  value,
  placeholder,
  min,
  max,
  handleChange,
}: InputProps) => {
  if (name === 'am') {
    return (
      <Wrapper>
        <input
          type={type}
          name={name}
          aria-label={label}
          value={value}
          onChange={handleChange}
          className="form-input"
          required
          placeholder={placeholder}
          min={min}
          max={max}
        />
      </Wrapper>
    )
  }

  if (type === 'number') {
    return (
      <Wrapper>
        <input
          type={type}
          name={name}
          aria-label={label}
          value={value}
          onChange={handleChange}
          className="form-input"
          required
          placeholder={placeholder}
          min={min}
          max={max}
        />
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <input
        type={type}
        name={name}
        aria-label={label}
        value={value}
        onChange={handleChange}
        className="form-input"
        required
        placeholder={placeholder}
      />
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

export default InputText
