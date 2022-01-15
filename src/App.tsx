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
        label: 'Email',
        isSortable: false
      },
      {
        label: 'Phone Number',
        isSortable: true
      }
    ],
    rows: [
      ['Teddy Burnsides', 'theodore@gmail.com', '3098900178'],
      ['Test Person', 'test@yaho.com', '1234561234'],
      ['New Name', '', '1237891234'],
      ['Zan','z@gmail.com','4569081234'],
      ['Michael','Test@gmail.com','6096781234'],
      ['Bobby', 'bob@gmail.com', ''],
      ['T-rex', 'tyrex@gmail.com', '9997891234']
    ],
    maxRows: 3,
    sortButtonText: {
      asc: '▲',
      desc: '▼'
    }
  }
  return (
    <>
      <h1>Simple Table Demo</h1>
      <SimpleTable data={tableData} />
    </>
  );
}

export default App;