# Simple Table React Component

A table component for your React JS project that allows for column sorting and searching. 

![Screenshot of Simple Table](https://github.com/theowiersema/SimpleTable/blob/main/public/screenshot2.png?raw=true)

Check out [a working demo](https://minimal-react-table.herokuapp.com/) (with added styles) or view the [component implementation code](https://github.com/theowiersema/SimpleTable/blob/main/src/App.tsx).

## How to install

```
npm install @theowiersema/minimalreacttable
```

## How to use

Add the component to your React project: 

```javascript
<SimpleTable data={tableData} />
```

Where the `tableData` variable passed to the `data` prop is an object with the following properties:

* [`columns`](#columns) (Required)
* [`rows`](#rows) (Required)
* [`maxrows`](#maxrows)
* [`sortButtonText`](#sortButtonText)
* [`enableSearch`](#enableSearch)
* [`title`](#title)

## Prop Documentation

### `columns`

**Type:** `[{label: string, sortable: boolean}]`

**Required:** Yes

An array of objects, each with a label and a sortable property. The `label` property contains the column title, and the `sortable` property indicates if the sorting button will be enabled for this columns.

Example: 

```javascript
columns: [
      {
        label: "Name",
        sortable: true
      },
      {
        label: "Email",
        sortable: false
      },
      {
        label: "Phone Number",
        sortable: true
      }
]
```

### `rows`

**Type:** `string[][]`

**Required:** Yes

A 2 dimensional array of "rows" of data, with the second level array being each row. 

Example: 

```javascript
rows: [
	["Peter Johnson", "peter@gmail.com", "3093970178"],
	["Test Person", "test@yaho.com", "1234561234"],
	["New Name", "", "1237891234"],
	["Zan","z@gmail.com","4569081234"],
	["Michael","Test@gmail.com","6096781234"]
]
```

### `maxrows`

**Type:** `number`

**Required:** No

**Default:** Displays all rows

The maximum number of rows to display in minimized mode. Leave empty to disable minimized mode and always show all rows. 

### `sortButtonText`

**Type:** `{asc: string, desc: string}`

**Required:** No

**Default:** `{asc: '▲', desc: '▼'}`

An object with properties `asc` and `desc` that contains the text that will be used for the sort buttons. This will change based on whether you are sorting *ascending* or *descending*. 

### `enableSearch`

**Type:** `boolean`

**Required:**: No

**Default:** `true`

If true, a search field will be visible to filter rows by a user-entered string. 

### `title`

**Type:** `string`

**Required:** No

**Default:** `''`

Define an `<h1>` title to be displayed above the table.
