import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Booth from './routes/Booth';
import Main from './routes/Main';
import ClubDetail from './routes/ClubDetail';
import BoothAdd from './routes/BoothAdd';
import Introduction from './routes/Introduction';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/booth" element={<Booth />} />
        <Route path="/booth/:str" element={<ClubDetail />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/boothAdd" element={<BoothAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
