import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import { useState } from 'react';
import { Direction } from './types/sortDirection';

const SimpleTable = (props: any) => {
	
	const [sortInfo, setSortInfo] = useState({enabled: false, column:0, direction:Direction.Desc});
	const [allRowsVisible, makeAllRowsVisible] = useState(false);

	const toggleSortDirection = (event: React.ChangeEvent<HTMLButtonElement>, column: number) => {
		event.preventDefault();
		setSortInfo({
			enabled:true,
			column: column,
			direction: (sortInfo.direction === Direction.Asc) ? Direction.Desc : Direction.Asc
		})
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
				showAll={allRowsVisible}
			/>
		</>
	)
}

export default SimpleTable;