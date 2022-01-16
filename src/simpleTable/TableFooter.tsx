import { ItableFooter } from "./types/interfaces";

const TableFooter = ({numRows, maxRows, allRowsVisible, showAllRows}: ItableFooter) => {

	// no need to show a button if all rows should be shown all the time
	if (maxRows !== undefined) {
	
		const buttonText = (numRows > maxRows && !allRowsVisible) ? 'Display all' : 'Display less';
		
		return (
			<button className='simpleTable-showAll' onClick={(event) => showAllRows(event)}>{buttonText}</button>
		)

	} else {
		return null;
	}
}

export default TableFooter;