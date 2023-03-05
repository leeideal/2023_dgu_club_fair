import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Booth from './routes/Booth';
import Main from './routes/Main';
import ClubDetail from './routes/ClubDetail';
import BoothAdd from './routes/BoothAdd';
import Introduction from './routes/Introduction';
import { LinkContext } from './context/LinkContext';
import { useState } from 'react';

function Router() {
  const [idParams, setIdParams] = useState(0);
  return (
    <BrowserRouter>
      <LinkContext.Provider value={{ idParams, setIdParams }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/booth" element={<Booth />} />
          <Route path="/booth/:str" element={<ClubDetail />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/boothAdd" element={<BoothAdd />} />
        </Routes>
      </LinkContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
