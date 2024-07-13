import { MdInvertColors } from 'react-icons/md'
import { TbColorSwatch } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { PiCarSimpleThin } from "react-icons/pi";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiEngineThin } from "react-icons/pi";
import { DiHackernews } from "react-icons/di";
import { VscHistory } from "react-icons/vsc";
import { FaGears } from "react-icons/fa6";


export const detailFiltersDataList = [
	{ icon: MdInvertColors, text: 'Exterior Color' },
	{ icon: TbColorSwatch, text: 'Interior Color' },
	{ icon: GiGearStickPattern, text: 'Transmission' },
	{ icon: PiCarSimpleThin, text: 'Body style' },
	{ icon: BsFuelPumpFill, text: 'Fuel type' },
	{ icon: PiEngineThin, text: 'Engine' },
	{ icon: DiHackernews, text: 'New/Used/CPO' },
	{ icon: VscHistory, text: 'Vehicle history' },
	{ icon: FaGears, text: 'Drivetrain' },
]