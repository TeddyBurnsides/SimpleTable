import { useState } from "react";
import { IsearchTable } from "./types/interfaces";

const SearchTable = ({triggerSearch, enabled}: IsearchTable) => {

	const [searchValue, setSearchValue] = useState('');

	const triggerSearchWrapper = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
		triggerSearch(event.target.value);
	}

	if (enabled || typeof enabled === 'undefined') {
		return (
			<input 
				type="Search" 
				value={searchValue}
				placeholder="Search..."
				onChange={event => triggerSearchWrapper(event)}
			/>
		)
	} else {
		return null;
	}
}

export default SearchTable;