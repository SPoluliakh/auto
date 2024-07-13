import { useGetAllLotsQuery } from '../../redux/lots/lots'
import { Card } from './components/Card/Card'
import { ListingFilterPanel } from './components/ListingFilterPanel/ListingFilterPanel'
import { useSelector } from 'react-redux'
import { getFilteredMakesList } from '../../redux/filters/makes'
import { getFilteredModelsList } from '../../redux/filters/models'
import * as SC from './Cars.styled'


export const Cars = () => {

	const filteredMakesList = useSelector(getFilteredMakesList)
	const filteredModelsList = useSelector(getFilteredModelsList)
	const { data } = useGetAllLotsQuery(filteredModelsList.length && filteredModelsList || filteredMakesList.length && filteredMakesList)
	
	return 	<SC.Wrapper>
				<ListingFilterPanel/>
				<SC.InnerWrapper>
					{
						data?.lots.map(({
							car_data: 	{lot_make, 
										lot_model, 
										lot_trim, 
										lot_year,
										lot_odometer,
										lot_drive_type,
										lot_title_status,
							lot_pictures: {lot_pictures_list},
							lot_engine_dict: {configuration, cylinders, displacement, hp, fuel_type},
							lot_transmission: {transmission_type,transmission_speeds}
							},
							lot_auction_data: {lot_bid_dict: {lot_current_bid, lot_buy_now_price, lot_clear_profit, buy_now_clear_profit}},location_dict: {lot_location_dict: {lot_location_city, lot_location_state_code}}
							}) => 	<Card
										data={data}
										lot_pictures_list = {lot_pictures_list[0]}
										lot_year={lot_year}
										lot_make={lot_make}
										lot_model={lot_model} 
										lot_trim={lot_trim}
										lot_current_bid={lot_current_bid} 
										lot_buy_now_price={lot_buy_now_price}
										lot_clear_profit={lot_clear_profit}
										buy_now_clear_profit={buy_now_clear_profit}
										configuration={configuration}
										cylinders={cylinders}
										displacement={displacement}
										hp={hp}
										transmission_type={transmission_type}
										transmission_speeds={transmission_speeds}
										fuel_type={fuel_type}
										lot_drive_type={lot_drive_type}
										lot_location_city={lot_location_city}
										lot_location_state_code={lot_location_state_code}
										lot_title_status={lot_title_status}
										lot_odometer={lot_odometer}
									/>)}			
				</SC.InnerWrapper>
			</SC.Wrapper>
}