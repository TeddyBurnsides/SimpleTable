import {Direction} from './types/sortDirection';

/**Truncate data to only show desired number of rows */
export const truncate = (rows: Array<string>, numberOfRowsToShow: number) => {
	return rows.slice(0,numberOfRowsToShow);
}

/** Sort provided rows */
export const sort = (rows: Array<string>, direction: Direction, columnToSortBy: number) => {

	const sortedRows = rows.sort((a, b) => {
		
		if (direction === Direction.Asc) {
			return (a[0] > b[0]) ? 1 : -1;
		} else {
			return (a[0] < b[0]) ? 1 : -1;
		}
	});

	return sortedRows;
	
}