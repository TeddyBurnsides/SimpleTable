import SimpleTable from './simpleTable/SimpleTable';
import './App.css';

const App = () => {
  const tableData = {
    columns: [
      {
        label: 'Name',
        isSortable: true
      },
      {
        label: 'Address',
        isSortable: true
      },
      {
        label: 'Email',
        isSortable: false
      },
      {
        label: 'Phone Number',
        isSortable: true
      }
    ],
    rows: [
      ['Teddy Burnsides', '123 Bobs Way', 'theodore@gmail.com', '3098900178'],
      ['Test Person', '345 Testing Ave', 'test@yaho.com', '1234561234'],
      ['New Name', '445 Segway', '', '1237891234'],
      ['Zan','', 'z@gmail.com','4569081234'],
      ['Michael','12 Route 13', 'Test@gmail.com','6096781234'],
      ['Bobby', '', 'bob@gmail.com', ''],
      ['T-rex', '', 'tyrex@gmail.com', '9997891234']
    ],
    maxRows: 3,
    sortButtonText: {
      asc: '▲',
      desc: '▼'
    },
    enableSearch: true,
    title: 'Simple Table Demo'
  }
  return (
    <SimpleTable data={tableData} />
  );
}

export default App;