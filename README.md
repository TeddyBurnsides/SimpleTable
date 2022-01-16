# Simple Table React Component

A simple table component for your React JS project that allows for column sorting. 

![Screenshot of Simple Table](https://github.com/theowiersema/SimpleTable/blob/main/public/screenshot.png?raw=true)

Open [the demo](https://minimal-react-table.herokuapp.com/) to see a working example or browse to [/src/App.tsx](https://github.com/theowiersema/SimpleTable/blob/main/src/App.tsx) in this repository to see the code in action.

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

#### `columns`

**Type:** `{label: string, sortable: boolean}`

**Required:** Yes

An array of column names and a boolean flag that indicates if the columns should allow sorting. 

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

#### `rows`

**Type:** `string[][]`

**Required:** Yes

A 2 dimensional array of "rows" of data, with the second level of array being each row. 

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

#### `maxrows`

**Type:** `number`

**Required:** No

**Default:** Displays all rows

The maximum number of rows to display in minimized mode. Leave empty to disable minimized mode and always show all rows. 

#### `sortButtonText`

**Type:** `{asc: string, desc: string}`

**Required:** No

**Default:** `{asc: '▲', desc: '▼'}`

An object with properties `asc` and `desc` that contains the text that will be used for the sort buttons. This will change based on whether you are sorting *ascending* or *descending*. 

#### `enableSearch`

**Type:** `boolean`

**Required:**: No

**Default:** `true`

If true, a search field will be visible to filter rows by a user-entered string. 

#### `title`

**Type:** `string`

**Required:** No


**Default:** `''`

Define an `<h1>` title to be displayed above the table.