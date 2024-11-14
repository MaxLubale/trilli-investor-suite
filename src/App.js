import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './style.css';
import Home from './components/home';
import NotFound from './components/not-found';
import Trifone from './components/trifone';
import TrillionBank from './components/trillionbank';
import Trillionit from './components/trillionit';
import Trillipay from './components/trillipay';
import Blokchain from './components/blockchain';
import Pay from './components/pay';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trillipay" element={<Trillipay />} />
      <Route path="/trillionbank" element={<TrillionBank />} />
      <Route path="/trifone" element={<Trifone />} />
      <Route path="/blokchain" element={<Blokchain />} />
      <Route path="/trillionit" element={<Trillionit />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
