import TableRow from './TableRow';
import {sort, truncate, rowContainsValue} from './utils';
import { ItableBody, IsortInfo } from './types/interfaces';

const TableBody = ({data, sortInfo, maxRows, showAll, searchValue}: ItableBody) => {

	let rows = data;
	
	if (!showAll) {
		rows = truncate(rows,maxRows);
	}

	// if a column is enabled for sorting, use it
	const enabledSortInfo = sortInfo.filter((el: IsortInfo) => el.enabled === true);
	if (typeof enabledSortInfo[0] !== 'undefined') {
		
		rows = sort(rows, enabledSortInfo[0].direction, enabledSortInfo[0].column);
		
	}

	// return rows, filtered by search value
	const rowElements = rows.map((row: string[], index: number) => {
		if (typeof searchValue === 'undefined' || searchValue === '' || rowContainsValue(row,searchValue)) {
			
			return <TableRow key={index} data={row} searchValue={searchValue} /> 
		} else {
			return null;
		}
	});

	return <tbody>{rowElements}</tbody>;
}

export default TableBody;