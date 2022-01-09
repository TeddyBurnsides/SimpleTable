

import SimpleTable from './SimpleTable';
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
        sortable: true
      },
      {
        label: "Phone Number",
        sortable: false
      }
    ],
    rows: [
      ["Theodore", "theo.ew@gmail.com", "3093970178"],
      ["Test Person", "test@yaho.com", "1234561234"],
      ["New Name", "", "1237891234"],
      ["Zan","z@gmail.com","4569081234"]
    ]
  }
  return (
    <div className="App">
      <h1>Simple table</h1>
      <SimpleTable data={tableData} />
    </div>
  );
}

export default App;
