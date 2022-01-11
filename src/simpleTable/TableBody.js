import TableRow from "./TableRow";

const TableBody = (props) => {

	let rows = truncate(props.data,props.maxRows,props.showAll); // trim off extra rows

	rows = sort(rows,props.sortAsc,props.columnToSortBy); // sort rows

	rows = rows.map((row,index) => <TableRow key={index} data={row} /> );

	return <tbody>{rows}</tbody>;
}

/**Truncate data to only show desired number of rows */
const truncate = (rows, numberOfRowsToShow,showAllRows) => {
	if (!showAllRows) {
		return rows.slice(0,numberOfRowsToShow);
	} else {
		return rows;
	}
}

/** Sort provided rows */
const sort = (rows,ascending,columnToSortBy) => {

	if (columnToSortBy === null) return rows; // no changes
	
	const sortedRows = rows.sort((a,b) => {
		return (ascending) ? a[columnToSortBy] > b[columnToSortBy] : a[columnToSortBy] < b[columnToSortBy];
	});

	return sortedRows;
	
}

export default TableBody;