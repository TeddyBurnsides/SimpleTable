import SortButton from './SortButton';
import { columnDefs } from './types/columnsDefs';

const TableHeader = (props: any) => {

	const columnHeaders = props.columnNames.map((column: columnDefs, index: number) => {
		return (
			<th key={index}>
				{column.label}
				<SortButton 
					isSortable={column.isSortable}  // boolean for if is column sortable
					columnNumber={index} 
					sortInfo={props.sortInfo[index]}
					toggleSortDirection={props.toggleSortDirection}
					sortButtonText={props.sortButtonText}
				/>
			</th>
		)
	})

	return (
		<thead>
			<tr>{columnHeaders}</tr>
		</thead>
	)
}

export default TableHeader;