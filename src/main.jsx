import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './common/theme/theme.js'
import { Layout } from '../src/common/components/Layout/Layout'
import { HomePage } from '../src/Pages/HomePage/HomePage'
import { Cars } from '../src/Pages/Cars/Cars'
import { Statistics } from '../src/Pages/Statistics/Statistics'
import { Provider} from 'react-redux'
import { store } from './redux/store'


const router = createBrowserRouter([
	{
		element: <Layout/>,
		children: [
			{
				path:"/",
				element: <HomePage/>
			},
			{
				path:"/cars",
				element: <Cars/>
			},
			{
				path:"/statistics",
				element: <Statistics/>
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider
			store={store}
		>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router}/>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
