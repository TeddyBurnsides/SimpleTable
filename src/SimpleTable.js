import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { useState } from 'react';

const SimpleTable = (props) => {
	
	const [sortedByColumn, setSortedByColumn] = useState(null);
	const [sortAsc, setSortAsc] = useState(true);

	const sortColumn = (event,column) => {
		event.preventDefault();
		console.log(column);
		setSortedByColumn(column);
		setSortAsc(!sortAsc);
	}

	return (
		<table className="pure-table pure-table-striped" >
			<TableHeader 
				data={props.data.columns} 
				sortColumn={sortColumn}
			/>
			<TableBody
				data={props.data.rows} 
				sortedByColumn={sortedByColumn}
				sortAsc={sortAsc}
			/>
		</table>
	)
}

export default SimpleTable;