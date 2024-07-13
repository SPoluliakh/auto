import {createSlice} from '@reduxjs/toolkit'
import trimsList from '../../common/data/trims.json'


const initialState = {
	trimsList, 
	filteredTrimsList: []
}

export const trimSlice = createSlice({
	name: 'trim',
	initialState,
	reducers: {
	filteredTrimsList: (state, {payload}) => {
		state.filteredTrimsList.push(payload)
		state.trimsList = state.trimsList.filter((element) => element.id !==payload.id)
	},
	resetFilteredTrimsList: (state) => {
			state.filteredTrimsList = []
			state.trimsList = initialState.trimsList
		},
	resetFilteredTrim: (state, {payload}) => {
			const filteredTrimsList = state.filteredTrimsList.filter(item => item.id !== payload.id)
			const newTrimsList = [...state.trimsList, payload]
			const trimsList = newTrimsList.sort((a, b) => a.model.localeCompare(b.model))
			return {trimsList, filteredTrimsList}
		}
	}
})

export const {filteredTrimsList, resetFilteredTrimsList, resetFilteredTrim} = trimSlice.actions
export const getTrimsList = (state) => state.trim.trimsList
export const getFilteredTrimsList = (state) => state.trim.filteredTrimsList