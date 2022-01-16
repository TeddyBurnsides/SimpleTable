import {Direction} from './sortDirection';

type IsortButtonText = {
	asc: string,
	desc: string
}

export type IsortInfo = {
	enabled: boolean, 
	column: number, 
	direction:Direction
}

export type Icolumn = {
	label: string,
	isSortable?: boolean
}

export interface IsortButtonProps {
	isSortable:boolean | undefined, // boolean for if is column sortable
	columnNumber: number
	sortInfo: IsortInfo,
	toggleSortDirection: Function,
	sortButtonText?: IsortButtonText
}

export interface ItableHeader {
	columnNames: Icolumn[],
	sortInfo: IsortInfo[],
	toggleSortDirection: Function,
	sortButtonText?: IsortButtonText	
}

export interface ItableFooter {
	numRows: number,
	maxRows?: number,
	allRowsVisible: boolean,
	showAllRows: Function
}

export interface ItableBody {
	data: string[][], 
	sortInfo: IsortInfo[],
	maxRows?: number,
	showAll: boolean,
	searchValue?: string
}

export interface ItableRow {
	data: string[]
}

interface Idata {
	columns: Icolumn[],
	rows: string[][],
	maxRows?: number,
	sortButtonText?: IsortButtonText,
	title?: string,
	enableSearch?: boolean
}

export interface Itable {
	data: Idata
}

export interface IsearchTable {
	triggerSearch: Function,
	enabled?: boolean
}