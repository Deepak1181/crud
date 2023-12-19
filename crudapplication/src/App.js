import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Adduser from './component/Adduser';
import Allusers from './component/Allusers';
import Home from './component/Home';
import Edituser from './component/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>
  <Routes>
    <Route path='/home' element={<Home/>}/>
 <Route path="/adduser" element={<Adduser/>} />
 <Route path="/allusers" element={<Allusers/>} />
 <Route path="/edituser/:id" element={<Edituser/>} />
  </Routes>
    </div>
  );
}

export default App;
