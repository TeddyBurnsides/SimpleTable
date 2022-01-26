import {Direction} from './types/sortDirection';
import {IsortInfo} from './types/interfaces';

/**Truncate data to only show desired number of rows */
export const truncate = (rows: string[][], numberOfRowsToShow?: number) => {
	return rows.slice(0,numberOfRowsToShow);
}

/** Sort provided rows */
export const sort = (rows: string[][], direction: Direction, columnToSortBy: number) => {

	const sortedRows = rows.sort((a, b) => {
		
		if (direction === Direction.Asc) {
			return (a[columnToSortBy] > b[columnToSortBy]) ? 1 : -1;
		} else {
			return (a[columnToSortBy] < b[columnToSortBy]) ? 1 : -1;
		}
	});

	return sortedRows;
	
}

export const rowContainsValue = (row: string[], value: string | undefined): boolean => {

	if (typeof value === 'undefined') return false;

	let quit = false;
	for (let i=0; i<row.length&&!quit; i++) {
		if (row[i].toLowerCase().includes(value.toLowerCase())) quit=true;
	}
	return quit;
}

export const findMatchingValueIndexes = (text: string,search: string) => {

	let indexes=[]; // an array that contains the beginning index of each matching string

	// loop through phrase letter by letter
	for (let textPos=0; textPos<text.length; textPos++) {

		let beginPos=null;
		let moveToNextLetter=false

		// loop through search phrase
		for (let searchPos=0; searchPos<search.length&&!moveToNextLetter; searchPos++) {

			// if value does not match, move to next letter in phrase to continue searching for string
			if (text[textPos+searchPos].toLowerCase() !== search[searchPos].toLowerCase()) {
				moveToNextLetter=true; 
				break;
			}

			// if this is true, all values in search string match something in phrase
			if (searchPos === search.length-1) beginPos=textPos;
		}	

		// if these are both not null, we found a match
		if (beginPos !== null) indexes.push(beginPos);
	}

	// build an array where each element represents whether or not a character should be highlighted
	let array: boolean[] = [];
	for (let i=0; i<indexes.length; i++) {
		for (let j=0; j<search.length; j++) {
			array[indexes[i]+j]=true;
		}
	}

	return array;

}

export const buildHighlightedText = (array: boolean[], string: string) => {

	let highlightedText='';

	for (let i=0; i<string.length; i++) {
		if (array[i] === true) {
			highlightedText=highlightedText + '<b>'+ string[i] + '</b>';
		} else {
			highlightedText=highlightedText + string[i];
		}
	}

	return highlightedText;
}

export const debounce = (func: Function, timeout: number) => {
	let timer: ReturnType<typeof setTimeout>;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => { 
			func.apply(this, args); 
		}, timeout);
	};
}

export const initColumnSortData = (numberOfColumns: number): IsortInfo[] => {
	let initSortData = new Array(numberOfColumns);
	for (let i=0; i<initSortData.length; i++) {
		initSortData[i] = {enabled: false, column: i, direction:Direction.Desc}
	}
	return initSortData;
}

export const resetSortInfo = (sortInfo: IsortInfo[], columnToSortByNow: number) => {
	let array = [...sortInfo];
	for (let i=0; i<array.length; i++) {
		if (columnToSortByNow === i) {
			array[i].enabled = true;
			array[i].direction = (sortInfo[i].direction === Direction.Asc) ? Direction.Desc : Direction.Asc;
		} else {
			array[i].enabled = false;
		}
	}
	return array
}

export const valueEmpty = (value: string | undefined) => {
	if (typeof value === 'undefined' || value === '') {
		return true;
	} else {
		return false;
	}
}