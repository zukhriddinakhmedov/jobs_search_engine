import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<MainSearch />} />
    <Route  path ='/:companyName' element={<CompanySearchResults />} /> 
   </Routes> 
    </BrowserRouter>
  );
}

export default App;
