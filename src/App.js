import { Route, Routes } from 'react-router-dom';
import Netflix from './component/index';
import Sign_in from './component/Sign_in';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path='/' element={<Netflix/>}/>
        <Route path='/sign_in' element={<Sign_in/>}/>
      </Routes>
    </div>
  );
}

export default App;
