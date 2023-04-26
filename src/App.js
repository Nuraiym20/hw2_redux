import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import NotFound from './components/NotFound';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/about/:id' element={<AboutPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
