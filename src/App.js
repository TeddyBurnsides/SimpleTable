import SimpleTable from './simpleTable/SimpleTable';
import './App.css';

const App = () => {
  const tableData = {
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
    ],
    rows: [
      ["Theodore", "theo.ew@gmail.com", "3093970178"],
      ["Test Person", "test@yaho.com", "1234561234"],
      ["New Name", "", "1237891234"],
      ["Zan","z@gmail.com","4569081234"],
      ["Michael","Test@gmail.com","6096781234"]
    ]
    ,
    maxRows: 4
  }
  return <SimpleTable data={tableData} />
}

export default App;