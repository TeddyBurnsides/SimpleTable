import { ItableRow } from './types/interfaces';
import {buildHighlightedText, findMatchingValueIndexes} from './utils';

const TableRow = ({data, searchValue}: ItableRow) => {

	const row = data.map((cellValue: string, index: number ) => {	

		if ((typeof searchValue === 'undefined') || (searchValue === '')) {

			return <td key={index}>{cellValue}</td>;
		

		} else {

			const indexes=findMatchingValueIndexes(cellValue,searchValue)
			const text = buildHighlightedText(indexes,cellValue)
			return <td key={index} dangerouslySetInnerHTML={{__html: text}}/>;
			
		}
	})

	return (
		<tr>{row}</tr>
	)
}

export default TableRow;