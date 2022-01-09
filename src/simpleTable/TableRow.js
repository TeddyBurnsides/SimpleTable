const TableRow = (props) => {

	const row = props.data.map((cell,index) => {
		return (
			<td key={index}>{cell}</td>
		)
	})

	return (
		<tr>{row}</tr>
	)
}

export default TableRow;