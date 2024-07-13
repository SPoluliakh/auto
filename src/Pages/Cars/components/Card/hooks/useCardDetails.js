import { BsFuelPumpFill } from 'react-icons/bs'
import { FaCircleDollarToSlot, FaDiceThree } from 'react-icons/fa6'
import { FcStatistics } from 'react-icons/fc'
import { IoLocationSharp } from 'react-icons/io5'
import { LuGauge } from 'react-icons/lu'
import { MdSubtitles } from 'react-icons/md'
import { PiEngineThin } from 'react-icons/pi'
import { TbManualGearbox, TbSteeringWheel } from 'react-icons/tb'
import { IoMdPricetag } from "react-icons/io";


export const useCardDetails = (
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
							) => {
								
	const cardDetails = [
			{
				title: "Buy now price",
				value: lot_buy_now_price,
				id_style: 0,
				Icon: IoMdPricetag,
			},
			{
				title: "Clear profit",
				value: buy_now_clear_profit,
				id_style: 1,
				Icon: FaCircleDollarToSlot,
			},
			{
				title: "IMV",
				value: 10000,
				id_style: 2,
				Icon: FcStatistics,
			},
			{
				title: "Odometer",
				value: lot_odometer,
				id_style: 3,
				Icon: LuGauge,
			},
			{
				title: "Engine",
				value: [
							configuration,
							cylinders,
							displacement,
							hp
						].join(" "),
				id_style: 4,
				Icon: PiEngineThin,
			},
			{
				title: "Transmission",
				value: [
							transmission_type,
							transmission_speeds
						].join(" "),
				id_style: 5,
				Icon: TbManualGearbox,
			},
			{
				title: "Fuel",
				value: fuel_type,
				id_style: 6,
				Icon: BsFuelPumpFill,
			},
			{
				title: "Drive type",
				value: lot_drive_type,
				id_style: 7,
				Icon: TbSteeringWheel,
			},
			{
				title: "Location",
				value: [
							lot_location_city,
							lot_location_state_code,
						].join(" "),
				id_style: 7,
				Icon: IoLocationSharp,
			},
			{
				title: "Title",
				value: lot_title_status,
				id_style: 8,
				Icon: MdSubtitles,
			}
	]
	// const cardDetails = data.lots.reduce((acc, item) => {
	// acc[0] = {
	// 	title: "Buy now price",
	// 	value: item.lot_auction_data.lot_bid_dict.lot_buy_now_price,
	// 	id_style: 0,
	// 	Icon: IoMdPricetag,
	// };
	// acc[1] = {
	// 	title: "Clear profit",
	// 	value: item.lot_auction_data.lot_bid_dict.buy_now_clear_profit,
	// 	id_style: 1,
	// 	Icon: FaCircleDollarToSlot,
	// };
	// acc[2] = {
	// 	title: "IMV",
	// 	value: 10000,
	// 	id_style: 2,
	// 	Icon: FcStatistics,
	// };
	// acc[3] = {
	// 	title: "Odometer",
	// 	value: item.car_data.lot_odometer,
	// 	id_style: 3,
	// 	Icon: LuGauge,
	// };
	// acc[4] = {
	// 	title: "Engine",
	// 	value: Object.values(item.car_data.lot_engine_dict).join(" "),
	// 	id_style: 4,
	// 	Icon: PiEngineThin,
	// };
	// acc[5] = {
	// 	title: "Transmission",
	// 	value: Object.values(item.car_data.lot_transmission).join(" "),
	// 	id_style: 5,
	// 	Icon: TbManualGearbox,
	// };
	// acc[6] = {
	// 	title: "Fuel",
	// 	value: item.car_data.lot_engine_dict.fuel_type,
	// 	id_style: 6,
	// 	Icon: BsFuelPumpFill,
	// };
	// acc[7] = {
	// 	title: "Drive type",
	// 	value: item.car_data.lot_drive_type,
	// 	id_style: 7,
	// 	Icon: TbSteeringWheel,
	// };
	// acc[8] = {
	// 	title: "Location",
	// 	value: [
	// 		item.location_dict.lot_location_dict.lot_location_city,
	// 		item.location_dict.lot_location_dict.lot_location_state_code,
	// 	].join(" "),
	// 	id_style: 7,
	// 	Icon: IoLocationSharp,
	// };
	// acc[9] = {
	// 	title: "Title",
	// 	value: item.car_data.lot_title_status,
	// 	id_style: 8,
	// 	Icon: MdSubtitles,
	// };
	// return acc;
	// }, []);

	return cardDetails;
};

