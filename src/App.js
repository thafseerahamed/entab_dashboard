
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Overview from './pages/Overview';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Overview />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
