interface footerProps {
	numRows: number,
	maxRows: number,
	allRowsVisible: boolean
	showAllRows: Function
}

const TableFooter = ({numRows, maxRows, allRowsVisible, showAllRows}: footerProps) => {
	
	const buttonText = (numRows > maxRows && !allRowsVisible) ? 'Display all' : 'Display less';
	
	return (
		<button className='simpleTable-showAll' onClick={(event) => showAllRows(event)}>{buttonText}</button>
	)
}

export default TableFooter;