import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Filters } from '../Filters/Filters'
import { Container } from '../Container/Container'
import { setIsOpenFilterMake, setIsOpenFilterModel, setIsOpenFilterTrim
} from '../../../redux/filters/toggleFilters.js'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import * as SC from './Layout.styled'


export const Layout = () => {
	const dispatch = useDispatch()

	const closeFiltersByClick = (event) => {
		console.log(event.target)
		const isPriorityFilters = event.target.classList.contains('PriorityFilters');
		if (!isPriorityFilters) {
			console.log("works")
			dispatch(setIsOpenFilterMake(false))
			dispatch(setIsOpenFilterModel(false))
			dispatch(setIsOpenFilterTrim(false))
		}
	}

	useEffect(() => {
		const closeByEscape = (event) => {
			if (event.code === 'Escape') {
				dispatch(setIsOpenFilterMake(false))
				dispatch(setIsOpenFilterModel(false))
				dispatch(setIsOpenFilterTrim(false))
			}
		}
		window.addEventListener('keydown', closeByEscape)

		return () => {
			window.removeEventListener('keydown', closeByEscape)
		}}, [])

	return  <div
				onClick={closeFiltersByClick}
			>
				<Header/>
				<Container>
					<Filters/>
					<Outlet/>
				</Container>
			</div>
}