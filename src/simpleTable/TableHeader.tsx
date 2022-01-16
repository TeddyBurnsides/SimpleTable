import SortButton from './SortButton';
import { ItableHeader , Icolumn} from './types/interfaces';

const TableHeader = ({columnNames, sortInfo, toggleSortDirection, sortButtonText}: ItableHeader) => {

	const columnHeaders = columnNames.map((column: Icolumn, index: number) => {
		return (
			<th key={index}>
				{column.label}
				<SortButton 
					isSortable={column.isSortable}
					columnNumber={index} 
					sortInfo={sortInfo[index]}
					toggleSortDirection={toggleSortDirection}
					sortButtonText={sortButtonText}
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