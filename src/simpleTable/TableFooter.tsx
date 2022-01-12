const TableFooter = (props: any) => {
	
	const buttonText = (props.numRows > props.maxRows && !props.showAll) ? 'Display all rows' : 'Display first ' + props.maxRows + ' rows';
	
	return (
		<button className='simpleTable-showAll' onClick={(event) => props.showAllRows(event)}>{buttonText}</button>
	)
}

export default TableFooter;