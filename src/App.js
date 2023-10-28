
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import StBarChart from './Test/StBarChart';
import LineChart from './Test/LineChart';
import Overview from './pages/Overview';

import DtRangePicker from './components/DtRangePicker';
import TableData from './components/TableData';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Overview />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
          <Route path='/overview' element={<Overview />}></Route>
          <Route path='/ab' element={<StBarChart />}></Route>
          {/* <Route path='/sy' element={<SyncStBarchart />}></Route>
          <Route path='/ln' element={<LineChart />}></Route> */}
           <Route path='/dt' element={<DtRangePicker />}></Route>
          <Route path='/ta' element={<TableData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
