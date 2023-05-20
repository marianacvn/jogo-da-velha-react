import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import CheckBox from './objects/Checkbox';

const App = () => (
    <main className="app">
      <Header />
      <Hashtag />
      <CheckBox id="show" value="show" type="checkbox" content="Mostrar eventos"/>
    </main>
 
  );

export default App;
