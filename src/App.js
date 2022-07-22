
import './App.css';

import Home from './Home';
import Page from './Page2';
import { Routes ,Route } from 'react-router-dom';
import Know from './Know';

function App() {

  return (
    <Routes>
   
      <Route path='/' element={<Home/>}></Route>
      <Route path='know' element={<Know/>}></Route>
      <Route path='page' element={<Page/>}></Route>

    </Routes>
  );
}

export default App;
