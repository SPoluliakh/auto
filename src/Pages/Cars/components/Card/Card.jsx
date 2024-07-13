import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useCardDetails } from './hooks/useCardDetails'
import * as SC from './Card.styled'


export const Card = ({
						lot_pictures_list,
						lot_year,
						lot_make,
						lot_model,
						lot_trim,
						lot_current_bid,
						lot_buy_now_price,
						lot_clear_profit,
						buy_now_clear_profit,
						lot_odometer,
						configuration,
						cylinders,
						displacement,
						hp,
						transmission_type,
						transmission_speeds,
						fuel_type,
						lot_drive_type,
						lot_location_city,
						lot_location_state_code,
						lot_title_status,
					}) => {

	const cardDetails = useCardDetails(lot_current_bid,
										lot_buy_now_price,
										lot_clear_profit,
										buy_now_clear_profit,
										lot_odometer,
										configuration,
										cylinders,
										displacement,
										hp,
										transmission_type,
										transmission_speeds,
										fuel_type,
										lot_drive_type,
										lot_location_city,
										lot_location_state_code,
										lot_title_status)

	return (
		<>
			<SC.Wrapper>
				<SC.ImageWrapper>
					<img width={'360'} height={'260'} src={lot_pictures_list} alt='' />
				</SC.ImageWrapper>
				<SC.DescriptionWrapper>
					<Header/>
					<SC.TitleListButtonsWrapper>
						<SC.Title>
							{lot_year} {lot_make} {lot_model} {lot_trim}
						</SC.Title>
						<SC.MainDescriptionWrapper>
							{cardDetails?.map(({ title, value, Icon, id_style}) => (
								<SC.InnerDescriptionWrapper 
									key={title}
								>	
									<SC.DescriptionElement>
										{<Icon size={'16px'} />}
										<span>{title}</span> 
									</SC.DescriptionElement>
									<SC.DescriptionElement>
										<SC.Value
											id_style={id_style}
										>
											{value}
										</SC.Value>
									</SC.DescriptionElement> 
								</SC.InnerDescriptionWrapper>
							))}
							{/* <Footer/> */}
						</SC.MainDescriptionWrapper>
					</SC.TitleListButtonsWrapper>
				</SC.DescriptionWrapper>
			</SC.Wrapper>
		</>
	)
}
