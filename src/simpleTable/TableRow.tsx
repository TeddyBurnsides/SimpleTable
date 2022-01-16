import { ItableRow } from './types/interfaces';

const TableRow = ({data}: ItableRow) => {

	const row = data.map((cell: string, index: number ) => {	
		return (
			<td key={index}>{cell}</td>
		)
	})

	return (
		<tr>{row}</tr>
	)
}

export default TableRow;