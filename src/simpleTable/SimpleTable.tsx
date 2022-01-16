import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import SearchTable from './SearchTable';
import { useState } from 'react';
import { Direction } from './types/sortDirection';
import { Itable } from './types/interfaces';

const SimpleTable = ({data}: Itable) => {
	
	
	let initSortData = new Array(data.columns.length);
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

	const [ searchValue, setSearchValue ] = useState<string | undefined>(undefined);

	const triggerSearch = (value: string) => {
		setSearchValue(value);
	}

	return (
		<>
			<div id="tools">
				<h1>{data.title}</h1>
				<SearchTable
					triggerSearch={triggerSearch}
					enabled={data.enableSearch}
				/>
			</div>
			<table>
				<TableHeader 
					columnNames={data.columns}
					sortInfo={sortInfo}
					toggleSortDirection={toggleSortDirection}
					sortButtonText={data.sortButtonText}				
				/>
				<TableBody
					data={data.rows} 
					sortInfo={sortInfo}
					maxRows={data.maxRows}
					showAll={allRowsVisible}
					searchValue={searchValue}
				/>
			</table>
			<TableFooter 
				numRows={data.rows.length}
				maxRows={data.maxRows}
				showAllRows={showAllRows}
				allRowsVisible={allRowsVisible}
			/>
		</>
	)
}

export default SimpleTable;