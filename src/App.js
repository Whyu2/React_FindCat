
import './App.css';
import Header from './components/Header';
import List_card from './components/List_card';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Add_post from './components/Add_post';

const App = ()=> {
  
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<><Login/></>}/>
      <Route path="/register" element={<><Register/></>}/>
        <Route path="/home" element={<>   <Header/><List_card/> </>}/>
        <Route path="/add_post" element={<> <Header/> <Add_post/></>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
