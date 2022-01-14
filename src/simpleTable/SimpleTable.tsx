import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import { useState } from 'react';
import { Direction } from './types/sortDirection';

const SimpleTable = (props: any) => {
	
	
	let initSortData = new Array(props.data.columns.length);
	for (let i=0; i<initSortData.length; i++) {
		initSortData[i] = {enabled: false, column: i, direction:Direction.Desc}
	}

	const [sortInfo, setSortInfo] = useState(initSortData);

	const [allRowsVisible, makeAllRowsVisible] = useState(false);

	const toggleSortDirection = (event: React.ChangeEvent<HTMLButtonElement>, column: number) => {
		event.preventDefault();

		let array = [...sortInfo];
		for (let i=0; i<array.length; i++) {
			if (column === i) {
				array[i].enabled = true;
				array[i].direction = (sortInfo[i].direction === Direction.Asc) ? Direction.Desc : Direction.Asc;
			} else {
				array[i].enabled = false;
			}
		}

		setSortInfo([...array])
	}
	
	const showAllRows = (event: React.ChangeEvent<HTMLButtonElement>) => {
		event.preventDefault();
		makeAllRowsVisible(!allRowsVisible);
	}

	return (
		<>
			<table>
				<TableHeader 
					columnNames={props.data.columns}
					sortInfo={sortInfo}
					toggleSortDirection={toggleSortDirection}
					sortButtonText={props.data.sortButtonText}				
				/>
				<TableBody
					data={props.data.rows} 
					sortInfo={sortInfo}
					maxRows={props.data.maxRows}
					showAll={allRowsVisible}
				/>
			</table>
			<TableFooter 
				numRows={props.data.rows.length}
				maxRows={props.data.maxRows}
				showAllRows={showAllRows}
				allRowsVisible={allRowsVisible}
			/>
		</>
	)
}

export default SimpleTable;