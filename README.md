# Simple Table React Component

Adds a functional table component to your React application using a simple component. 

Simply add the Simple Table component like so:

```javascript
<SimpleTable data={tableData} />
```

Where the `tableData` prop is an object with the following properties:

## `columns`: This is an array of column names and a boolean flag that indicates if the columns should allow sorting. 

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

## `rows`: A 2 dimensional array of "rows" of data, with the second level of array being each row. 

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

Open `/src/App.js` for a working example. 