import styled from "styled-components"


export const Wrapper = styled.div`
`

export const ListingFilterPanel = styled.div`
	display: flex;
	justify-content: space-between;
    margin-top: 9px;
    padding: 0 16px 24px;
`

export const InnerWrapper = styled.ul`
	padding: 0 20px 0 20px;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(12, minmax(0, 1fr));
`