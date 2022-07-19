import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ListingPage } from './pages/ListingPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <HomePage />
            </div>
          }
        />
        <Route path='/listing' element={<ListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
