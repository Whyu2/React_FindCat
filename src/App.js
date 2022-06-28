
import './App.css';
import Header from './components/Header';
import List_card from './components/List_card';
import Search from './components/Search';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Add_post from './components/Add_post';

const App = ()=> {
  
const clicked = () =>{
  console.log("kepencet");
}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Header/><Search/><List_card/> </>}/>
        <Route path="/add_post" element={<> <Header/> <Add_post/></>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
