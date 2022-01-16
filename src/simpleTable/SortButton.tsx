import { Direction } from './types/sortDirection';
import { IsortButtonProps } from './types/interfaces';

const SortButton = ({isSortable, columnNumber, sortInfo, toggleSortDirection, sortButtonText}: IsortButtonProps) => {

	// populate an 'active' class when the column is being sorted by 
	const activeClass = (sortInfo.enabled && columnNumber === sortInfo.column) ? 'active' : '';

	const buttonText = (sortButtonText !== undefined) ? sortButtonText : {asc: '▲',desc: '▼'}

	if (isSortable) {
		return (
			<button className={activeClass + ' sortButton'} onClick={(event) => toggleSortDirection(event,columnNumber)}>
				{(sortInfo.direction === Direction.Asc) ? buttonText.asc : buttonText.desc}
			</button>
		)
	} else {
		return (null);
	}
}

export default SortButton;