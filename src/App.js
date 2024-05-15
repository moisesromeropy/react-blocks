import Header from './Header/Header';
import Row from './Row/Row';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Subcontent from './Subcontents/Subcontents';
import Advertisement from './Advertisement/Advertisement';
function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Navigation />
        <Main>
          <Row>
            <Subcontent />
            <Subcontent />
            <Subcontent />
          </Row>  
          <Advertisement />
        </Main> 
      </Row>
    </div>
  );
}

export default App;
