import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  [key: string]: string | number
}

const initialState: InitialState = {
  name: '',
  email: '',
  month: 1,
  date: 1,
  year: 2024,
  hour: 1,
  minutes: 0,
  amOrPm: 'AM' as 'AM' | 'PM',
  numberOfUser: 1,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeNameAndEmail: (state, { payload }: PayloadAction<InitialState>) => {
      ;(state as { [key: string]: string | number })[payload.name] =
        payload.value
    },
    changeDate: (state, { payload }: PayloadAction<InitialState>) => {
      ;(state as { [key: string]: string | number })[payload.name] =
        payload.value
    },
    increase: (state) => {
      if (Number(state.numberOfUser) >= 1) {
        state.numberOfUser = Number(state.numberOfUser) + 1
      }
    },
    decrease: (state) => {
      if (Number(state.numberOfUser) > 1) {
        state.numberOfUser = Number(state.numberOfUser) - 1
      }
    },
  },
})

export const { changeNameAndEmail, changeDate, increase, decrease } =
  formSlice.actions
export default formSlice.reducer
