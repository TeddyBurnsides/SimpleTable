import TableRow from './TableRow';
import {sort, truncate} from './utils';
import { ItableBody, IsortInfo } from './types/interfaces';

const TableBody = ({data, sortInfo, maxRows, showAll}: ItableBody) => {

	let rows = data;
	
	if (!showAll) {
		rows = truncate(rows,maxRows);
	}

	// if a column is enabled for sorting, use it
	const enabledSortInfo = sortInfo.filter((el: IsortInfo) => el.enabled === true);
	if (typeof enabledSortInfo[0] !== 'undefined') {
		
		rows = sort(rows, enabledSortInfo[0].direction, enabledSortInfo[0].column);
		
	}

	const rowElements = rows.map((row: string[], index: number) => {
		return <TableRow key={index} data={row} /> 
	});

	return <tbody>{rowElements}</tbody>;
}

export default TableBody;