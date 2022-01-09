const SortButton = (props) => {
	if (props.sortable) {
		return (
			<button onClick={(event) => props.sortColumn(event,props.columnNumber)}>Sort</button>
		)
	} else {
		return (null);
	}
}

export default SortButton;