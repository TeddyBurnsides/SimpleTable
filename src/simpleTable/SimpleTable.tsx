import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import SearchField from './SearchField';
import { useState } from 'react';
import { Itable } from './types/interfaces';
import { debounce, initColumnSortData, resetSortInfo } from './utils';

const SimpleTable = ({data}: Itable) => {
	
	
	const initSortData = initColumnSortData(data.columns.length);
	const [sortInfo, setSortInfo] = useState(initSortData);

	const [allRowsVisible, makeAllRowsVisible] = useState(false);

	const toggleSortDirection = (event: React.ChangeEvent<HTMLButtonElement>, columnToSortByNow: number) => {
		event.preventDefault();
		let newSortInfo = resetSortInfo(sortInfo, columnToSortByNow)
		setSortInfo([...newSortInfo])
	}
	
	const showAllRows = (event: React.ChangeEvent<HTMLButtonElement>) => {
		event.preventDefault();
		makeAllRowsVisible(!allRowsVisible);
	}

	const [ searchValue, setSearchValue ] = useState<string | undefined>(undefined);

	const triggerSearch = debounce((value: string) => {
		setSearchValue(value);
	}, 200); // 200 ms

	return (
		<>
			<div id="tools">
				<h1>{data.title}</h1>
				<SearchField
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