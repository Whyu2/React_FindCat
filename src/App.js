
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

const App = ()=> {
  
const clicked = () =>{
  console.log("kepencet");
}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Header/><Search/><List_card clicked={clicked}/> </>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
