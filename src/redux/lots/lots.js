import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const lotsApi = createApi({
	reducerPath: 'lots',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api'}),
	endpoints: (builder) => ({
		getAllLots: builder.query({
			query: (make) => ({
				url: make ? `lots/${make.join(',')}`: 'lots/all', 
				method: 'GET'
			})
		}),
	})
})

export const { useGetAllLotsQuery } = lotsApi