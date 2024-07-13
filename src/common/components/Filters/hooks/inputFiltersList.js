import { CiCalendarDate } from "react-icons/ci";
import { LuGauge } from "react-icons/lu";
import { IoMdPricetag } from "react-icons/io";
import productionYears from "../../../data/productionYears.json"


export const inputFiltersList = [
	{
		id: 1,
		title: "Year",
		Icon: CiCalendarDate,
		step: 1,
		min: productionYears,
		max: productionYears
	},
	{
		id: 2,
		title: "Odometer",
		Icon: LuGauge,
		step: 1000,
		min: 0,
		max: 300000
	},
	{
		id: 3,
		title: "Price",
		Icon: IoMdPricetag,
		step: 500,
		min: 1000,
		max: 300000
	}
]

