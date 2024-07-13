import { GrLocationPin } from "react-icons/gr"
import SingleInputFilters from '../SingleInputFilters/SingleInputFilters'
import zipcodes from 'zipcodes'
import { getDistance } from 'geolib'
import { useState } from 'react'
import * as SC from './InputOption.styled'


export const InputOption = () => {

	const [zipCode, setZipCode] = useState('')
	const [distance, setDistance] = useState('')
	const [result, setResult] = useState([])

	const zipCodeChange = (event) => {
		const {value} = event.target
		setZipCode(value)
	}

	const distanceChange = (event) => {
		const {value} = event.target
		setDistance(value)
	}

	const formSubmit = (event) => {
		event.preventDefault()

		if (zipCode && distance){
			const targetLocation = zipcodes.lookup(zipCode)
			if (targetLocation && targetLocation.country === 'US'){
				const allZipCodes = Object.keys(zipcodes.codes).map((code) => {
					const location = zipcodes.lookup(code)
					if (location && location.latitude && location.longitude && location.country === 'US'){
						return {...location, distance: getDistance(
							{
								latitude: targetLocation.latitude, longitude: targetLocation.longitude
							},
							{
								latitude: location.latitude, longitude: location.longitude
							}
						) / 1600}}
					return null
				}).filter(location => location !== null)
				const filteredZipCodes = allZipCodes.filter(location => location.distance <= 
					parseFloat(distance))
					setResult(filteredZipCodes)
			}
		}
	}
	
	return 	<form
				onSubmit={formSubmit}
			>
				<SC.InputWrapper>
					<SC.TitleWrapper>
						<SC.IconWrapper>
							<GrLocationPin/>
						</SC.IconWrapper>
						<SC.Title>
							Location
						</SC.Title>
					</SC.TitleWrapper>
					<SC.Input 
						type="text"
						value={zipCode}
						onChange={zipCodeChange}
					/>
				</SC.InputWrapper>
				<SingleInputFilters
					distanceChange={distanceChange}
					distance={distance}
				/>
			<button
				type='submit'
			>
				submit
			</button>
			</form>
}