import SortButton from "./SortButton";

const TableHeader = (props) => {

	const columns = props.data.map((column,index) => {
		return (
			<th key={index}>
				{column.label}
				<SortButton 
					sortable={column.sortable} 
					columnNumber={index} 
					sortColumn={props.sortColumn}
				/>
			</th>
		)
	})

	return (
		<thead><tr>
			{columns}
		</tr></thead>
	)
}

export default TableHeader;