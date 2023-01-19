import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
const slice = createSlice({
	name: 'test',
	initialState: {},
	reducers: {},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.user,
			}
		},
	},
})

export default slice.reducer
