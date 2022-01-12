import TableRow from './TableRow';
import {sort, truncate} from './utils';

const TableBody = (props: any) => {

	let rows = truncate(props.data,props.maxRows,props.showAll); // trim off extra rows

	rows = sort(rows,props.sortInfo.direction,props.sortInfo.column); // sort rows

	const rowElements = rows.map((row: string, index: number) => {
		return <TableRow key={index} data={row} /> 
	});

	return <tbody>{rowElements}</tbody>;
}

export default TableBody;