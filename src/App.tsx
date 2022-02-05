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
      ['Rufus Garrett ', '123 Alice Way', 'rufus@simpletable.com', '309-789-1234'],
      ['Ramona Parker', '345 Testing Ave', 'test@yaho.com', '123-456-1234'],
      ['Freda Watson', '445 Segway', '', '123-789-1234'],
      ['Jeff Peters ','124 Willow Pathway', 'jeff@simpletable.com','456-908-1234'],
      ['Jessica Fowler','12 Route 5', 'jessica@simpletable.com','609-678-1234'],
      ['Terrell Kennedy ', '77 Oak Street', 'terrell@simpletable.com', ''],
      ['Alonzo Curtis', '', 'tyrex@simpletable.com', '999-789-1234']
    ],
    maxRows: 3,
    sortButtonText: {
      asc: '▲',
      desc: '▼'
    },
    enableSearch: true,
    title: 'Simple Table Demo',
    debounce: 200
  }
  return (
    <SimpleTable data={tableData} />
  );
}

export default App;