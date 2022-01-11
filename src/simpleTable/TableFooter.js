const TableFooter = (props) => {
	if (props.numRows > props.maxRows && !props.showAll) {
		return (
			<button onClick={(event) => props.showAllRows(event)}>Display all rows</button>
		)
	} else {
		return null;
	}
}

export default TableFooter;