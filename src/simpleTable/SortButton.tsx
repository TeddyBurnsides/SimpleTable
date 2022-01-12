import {Direction} from './types/sortDirection';

const SortButton = (props: any) => {

	// populate an 'active' class when the column is being sorted by 
	const activeClass = (props.columnNumber === props.sortInfo.column) ? 'active' : '';

	if (props.isSortable) {
		return (
			<button className={activeClass} onClick={(event) => props.toggleSortDirection(event,props.columnNumber)}>
				{(props.sortInfo.direction === Direction.Asc) ? props.sortButtonText.asc : props.sortButtonText.desc}
			</button>
		)
	} else {
		return (null);
	}
}

export default SortButton;