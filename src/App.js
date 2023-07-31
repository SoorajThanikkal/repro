import React from 'react'
import NavBar from './components/NavBar/NavBar';
import './App.css'
import { action, originals} from './urls'
import Banner from './components/Banner/Banner';
import RawPost from './components/RawPost/RawPost';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RawPost url={originals} title='Netflix originals'/>
        <RawPost url={action} title='Action' isSmall/>
        <RawPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;

