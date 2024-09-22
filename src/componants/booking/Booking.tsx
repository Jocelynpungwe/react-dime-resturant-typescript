import styled from 'styled-components'
import Form from './Form'
import InputText from './InputText'
import {
  changeNameAndEmail,
  changeDate,
  increase,
  decrease,
} from '../../reducer/formSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

import SelectInput from './SelectInput'

type InitialState = {
  name: string
  email: string
  month: number
  date: number
  year: number
  hour: number
  minutes: number
  amOrPm: 'AM' | 'PM'
  numberOfUser: number
}

const Booking = () => {
  const dispatch = useAppDispatch()
  const dataValue = useAppSelector((store) => store.form)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (dataValue.name === '' || dataValue.email === '') {
      alert('Please provide name and email')
      return
    }

    if (
      Number(dataValue.month) < 1 ||
      Number(dataValue.month) > 12 ||
      dataValue.month.toString().startsWith('0')
    ) {
      alert('Month has to be between 1 and 12')
      return
    }

    if (
      Number(dataValue.date) < 1 ||
      Number(dataValue.date) > 31 ||
      dataValue.date.toString().startsWith('0')
    ) {
      alert('Month has to be between 1 and 31')
      return
    }

    if (
      Number(dataValue.hours) < 0 ||
      Number(dataValue.hours) > 12 ||
      dataValue.hours.toString().startsWith('0')
    ) {
      alert('Month has to be between 1 and 12')
      return
    }

    if (Number(dataValue.minutes) < 0 || Number(dataValue.minutes) > 60) {
      alert('Month has to be between 0 and 60')
      return
    }

    alert(
      `${dataValue.name} ${dataValue.email} date: ${dataValue.date}/${dataValue.month}/${dataValue.year}  time: ${dataValue.hour} : ${dataValue.minutes}${dataValue.amOrPm} Guests: ${dataValue.numberOfUser}`
    )
  }

  return (
    <Wrapper>
      <div className="deco">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="76"
          viewBox="0 0 160 76"
          fill="none"
          className="second-deco"
        >
          <rect y="70" width="160" height="6" fill="#ac6124" />
          <rect y="56" width="160" height="6" fill="#ac6124" />
          <rect y="42" width="160" height="6" fill="#ac6124" />
          <rect y="28" width="160" height="6" fill="#ac6124" />
          <rect y="14" width="160" height="6" fill="#ac6124" />
          <rect width="160" height="6" fill="#ac6124" />
        </svg>
      </div>
      <Form handleSubmit={handleSubmit}>
        <InputText
          name="name"
          value={dataValue.name}
          type="text"
          label="name"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(
              changeNameAndEmail({
                name: e.target.name,
                value: e.target.value,
              })
            )
          }
          placeholder="Name"
        />
        <InputText
          name="email"
          value={dataValue.email}
          type="text"
          label="email"
          placeholder="Email"
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(
              changeNameAndEmail({
                name: e.target.name,
                value: e.target.value,
              })
            )
          }
        />
        <section>
          <label className="label">Pick a date</label>
          <div className="grid">
            <InputText
              name="month"
              value={dataValue.month}
              type="number"
              label="month"
              placeholder="MM"
              max="12"
              min="1"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  changeDate({ name: e.target.name, value: e.target.value })
                )
              }
            />
            <InputText
              name="date"
              value={dataValue.date}
              type="number"
              label="date"
              min="1"
              max="31"
              placeholder="DD"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  changeDate({ name: e.target.name, value: e.target.value })
                )
              }
            />
            <InputText
              name="year"
              value={dataValue.year}
              type="number"
              label="year"
              placeholder="YYY"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(changeDate({ name: e.target.name, value: 2024 }))
              }
            />
          </div>
        </section>
        <section>
          <label className="label">Pick a time</label>
          <div className="grid">
            <InputText
              name="hour"
              value={dataValue.hour}
              type="number"
              label="hour"
              placeholder="09"
              max="12"
              min="1"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  changeDate({ name: e.target.name, value: e.target.value })
                )
              }
            />{' '}
            <InputText
              name="minutes"
              value={dataValue.minutes}
              type="number"
              label="minutes"
              placeholder="00"
              max="60"
              min="0"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  changeDate({ name: e.target.name, value: e.target.value })
                )
              }
            />
            <SelectInput
              name="am"
              label="am"
              handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                dispatch(
                  changeNameAndEmail({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
          </div>
        </section>
        <section className="amount-section">
          <svg
            onClick={() => dispatch(decrease())}
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="3"
          >
            <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z" />
          </svg>
          <div>
            {dataValue.numberOfUser}{' '}
            {Number(dataValue.numberOfUser) > 1 ? 'people' : 'person'}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            onClick={() => dispatch(increase())}
          >
            <path
              fill="#9E7F66"
              d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"
            />
          </svg>
        </section>
        <button type="submit" className="secondary-button">
          MAKE RESERVATION
        </button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: #111;
  .label {
    display: block;
    margin-bottom: 1rem;
    text-align: left;
  }

  .deco {
    display: none;
    border-radius: 0rem 0rem 6.25rem 0rem;
    opacity: 0.0774;
    background: #5c6779;
    position: relative;
  }
  .second-deco {
    display: none;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  button {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .amount-section {
    display: flex;
    justify-content: space-between;
    padding: 0 1.06rem 1.06rem 1.06rem;
    border-bottom: 1px solid #8e8e8e;
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .deco {
      display: block;
    }
    .second-deco {
      display: block;
      position: absolute;
      bottom: 50%;
      right: -80px;
    }
  }
`

export default Booking
