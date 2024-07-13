import { ModelGenerationElement } from './components/ModelGenerationElement/ModelGenerationElement'
import { RxCross1 } from "react-icons/rx";
import useClickedButtons from '../../../DetailFilters/components/hooks/useClickedButtons'
import * as SC from "./ModelGenerationsFilterList.styled"


export const ModelGenerationsFilterList = ({renderGenerationsList, 
                                            handleClearInput, 
                                            clickedButtons, 
                                            handleClick}) => {

	return (
        <SC.ModelGenerationsFilterList>
            <SC.InnerWrapper>
                <SC.ClearCheckedOptionsButton
                    onClick={handleClearInput}
                >
                    <SC.IconWrapper>
                        <RxCross1 size='16px'/>
                    </SC.IconWrapper>
                    <SC.Text>
                        Any
                    </SC.Text>
                </SC.ClearCheckedOptionsButton>
                <SC.PopupGenerationsList>
                    {renderGenerationsList.map(({ id, years, generation, IMG }) => (
                        <ModelGenerationElement
                            key={id}
                            id={id}
                            years={years}
                            generation={generation}
                            IMG={IMG}
                            clickedButtons={clickedButtons}
                            handleClick={handleClick}
                        />
                    ))}
                </SC.PopupGenerationsList>
            </SC.InnerWrapper>
        </SC.ModelGenerationsFilterList>)
}