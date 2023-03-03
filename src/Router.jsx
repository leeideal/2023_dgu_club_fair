import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Booth from './routes/Booth';
import Main from './routes/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/booth" element={<Booth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
