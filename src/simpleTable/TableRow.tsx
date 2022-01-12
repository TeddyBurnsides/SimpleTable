const TableRow = (props: any) => {

	const row = props.data.map((cell: string, index: number ) => {
		return (
			<td key={index}>{cell}</td>
		)
	})

	return (
		<tr>{row}</tr>
	)
}

export default TableRow;