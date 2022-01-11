import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import { useState } from 'react';

const SimpleTable = (props) => {
	
	const [sortedByColumn, setSortedByColumn] = useState(null);
	const [sortAsc, setSortAsc] = useState(true);
	const [showAll, setShowAll] = useState(false);

	const sortColumn = (event,column) => {
		event.preventDefault();
		setSortedByColumn(column);
		setSortAsc(!sortAsc);
	}
	
	const showAllRows = (event) => {
		event.preventDefault();
		setShowAll(true);
	}

	return (
		<>
			<table className="pure-table pure-table-striped" >
				<TableHeader 
					data={props.data.columns} 
					sortColumn={sortColumn}
					sortAsc={sortAsc}
				/>
				<TableBody
					data={props.data.rows} 
					columnToSortBy={sortedByColumn}
					sortAsc={sortAsc}
					maxRows={props.data.maxRows}
					showAll={showAll}
				/>
			</table>
			<TableFooter 
				numRows={props.data.rows.length}
				maxRows={props.data.maxRows}
				showAllRows={showAllRows}
				showAll={showAll}
			/>
		</>
	)
}

export default SimpleTable;