import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import NavBar from "./components/NavBar"
import Favourites from "./components/Favourites"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route  path="/" element={<MainSearch />} />
    <Route path="/favourites" element={<Favourites />} />
    <Route  path ='/:companyName' element={<CompanySearchResults />} /> 
   </Routes> 
    </BrowserRouter>
  );
}

export default App;
