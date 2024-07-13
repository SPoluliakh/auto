import {createSlice} from '@reduxjs/toolkit'


const initialState = {	
						isOpenFilterMake: false, 
						isOpenFilterModel: false, 
						isOpenFilterTrim: false, 
						isOpenFilterGeneration: false, 
					}

export const toggleFiltersSlice = createSlice({
	name: 'toggleFilters',
	initialState,
	reducers: {
		toggleFilterMake: (state) => {
			state.isOpenFilterMake = !state.isOpenFilterMake
		},
		setIsOpenFilterMake: (state, {payload}) => {
			state.isOpenFilterMake = payload
		},

		toggleFilterModel: (state) => {
			state.isOpenFilterModel = !state.isOpenFilterModel
		},
		setIsOpenFilterModel: (state, {payload}) => {
			state.isOpenFilterModel = payload
		},

		toggleFilterTrim: (state) => {
			state.isOpenFilterTrim = !state.isOpenFilterTrim
		},
		setIsOpenFilterTrim: (state, {payload}) => {
			state.isOpenFilterTrim = payload
		},

		toggleFilterGeneration: (state) => {
			state.isOpenFilterGeneration = !state.isOpenFilterGeneration
		},
		setIsOpenFilterGeneration: (state, {payload}) => {
			state.isOpenFilterGeneration = payload
		},
	}
})

export const {toggleFilterMake, setIsOpenFilterMake, toggleFilterModel, setIsOpenFilterModel, toggleFilterTrim, setIsOpenFilterTrim, toggleFilterGeneration, setIsOpenFilterGeneration} = toggleFiltersSlice.actions
export const getToggleFilterModel = (state) => state.toggleFilters.isOpenFilterModel 
export const getToggleFilterMake = (state) => state.toggleFilters.isOpenFilterMake
export const getToggleFilterTrim = (state) => state.toggleFilters.isOpenFilterTrim
export const getToggleFilterGeneration = (state) => state.toggleFilters.isOpenFilterGeneration
