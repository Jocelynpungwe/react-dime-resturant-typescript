import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit'

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
  value: string
}

const initialState: InitialState = {
  name: '',
  email: '',
  month: 0,
  date: 0,
  year: 2024,
  hour: 0,
  minutes: 0,
  amOrPm: 'AM',
  numberOfUser: 1,
  value: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeNameAndEmail: (state, { payload }: PayloadAction<InitialState>) => {
      console.log('the state is', current(state))
      console.log(payload)
    },
  },
})

export const { changeNameAndEmail } = formSlice.actions
export default formSlice.reducer
