import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Booth from './routes/Booth';
import Main from './routes/Main';
import Introduction from './routes/Introduction';
import BoothDetail from './routes/BoothDetail';
import BoothAdd from './routes/BoothAdd';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/booth" element={<Booth />} />
        <Route path="/booth/:str" element={<BoothDetail />} />
        <Route path="/introduction" element={<Introduction />}/>
        <Route path="/boothAdd" element={<BoothAdd/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
