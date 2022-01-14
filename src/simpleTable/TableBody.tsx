import TableRow from './TableRow';
import {sort, truncate} from './utils';

const TableBody = (props: any) => {

	let rows = props.data;
	
	if (!props.showAll) {
		rows = truncate(rows,props.maxRows);
	}

	// if a column is enabled for sorting, use it
	const enabledSortInfo = props.sortInfo.filter((el: any) => el.enabled === true);
	if (typeof enabledSortInfo[0] !== 'undefined') {
		
		rows = sort(rows, enabledSortInfo[0].direction, enabledSortInfo[0].column);
		
	}

	const rowElements = rows.map((row: string, index: number) => {
		return <TableRow key={index} data={row} /> 
	});

	return <tbody>{rowElements}</tbody>;
}

export default TableBody;