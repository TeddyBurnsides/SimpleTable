import TableRow from "./TableRow";

const TableBody = (props) => {

	let sortedRows = props.data;
	
	const sortedByColumn = props.sortedByColumn;
	if (sortedByColumn !== null) {
		if (props.sortAsc) {
			sortedRows.sort((a,b) => a[sortedByColumn] > b[sortedByColumn]);
		} else {
			sortedRows.sort((a,b) => a[sortedByColumn] < b[sortedByColumn]);
		}
	}

	const rows = sortedRows.map((row,index) => {
		return (
			<TableRow key={index} data={row} />
		)
	})

	return (
		<tbody>{rows}</tbody>
	)
}

export default TableBody;