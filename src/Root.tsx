/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage/HomePage';

const Root = () => {
  return (
    <Routes>
       <Route path="/" element={<App />}>
       
       </Route>
       <Route path="/home" element={<HomePage />}/>
    </Routes>
  );
};

export default Root;
