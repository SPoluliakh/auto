import {createSlice} from '@reduxjs/toolkit'
import {modelGenerationsList} from '../../common/components/Filters/components/PriorityGenerationFilter/components/ModelGenerations/hooks/modelGenerationsList'


const initialState = {
	generationsList : modelGenerationsList, 
	filteredGenerationsList: []}

export const generationSlice = createSlice({
	name: 'generation',
	initialState,
	reducers: {
		filteredGenerationsList: (state, {payload}) => {
			state.filteredGenerationsList.push(payload)
			state.generationsList = state.generationsList.filter((element) => element.id !== payload.id)},
		resetFilteredGenerationsList: (state) => {
			state.filteredGenerationsList = []
			state.generationsList = initialState.generationsList
		},
		resetFilteredGeneration: (state, {payload}) => {
			const filteredGenerationsList = state.filteredGenerationsList.filter((item) => item.id !== payload.id)
			const newGenerationsList = [...state.generationsList, payload]
			const generationsList = newGenerationsList.sort((a, b) => a.id.localeCompare(b.id))
			return {generationsList, filteredGenerationsList}
			// ((element) => element.id !== payload.id
			// state.filteredGenerationsList = state.filteredGenerationsList.filter(item => item.id !== payload)}
		}}})
		
export const {filteredGenerationsList, resetFilteredGenerationsList, resetFilteredGeneration} = generationSlice.actions
export const getGenerationsList = (state) => state.generation.generationsList
export const getFilteredGenerationsList = (state) => state.generation.filteredGenerationsList