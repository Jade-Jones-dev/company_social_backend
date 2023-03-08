
import { BrowserRouter } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routing from '../Routing/Routing';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div classname='App'>
      <Header/>
     <Routing/>
      <Footer/>
    </div>
    </BrowserRouter>
     
  );
}

export default App;
