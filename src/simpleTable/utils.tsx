import {Direction} from './types/sortDirection';

/**Truncate data to only show desired number of rows */
export const truncate = (rows: Array<string>, numberOfRowsToShow: number, showAllRows: boolean ) => {
	if (!showAllRows) {
		return rows.slice(0,numberOfRowsToShow);
	} else {
		return rows;
	}
}

/** Sort provided rows */
export const sort = (rows: Array<string>, ascending: Direction, columnToSortBy: number) => {

	if (columnToSortBy === null) return rows; // no changes
	
	const sortedRows: string[] = rows.sort((a, b) => {
		if (ascending === Direction.Asc) {
			if (a[columnToSortBy] > b[columnToSortBy]) {
				return 1
			} else {
				return 0;
			}
		} else {
			if (a[columnToSortBy] < b[columnToSortBy]) {
				return -1;
			} else {
				return 0;
			}
		}
	});

	return sortedRows;
	
}