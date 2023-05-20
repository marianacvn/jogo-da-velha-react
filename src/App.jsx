import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import Input from './objects/Input/index';

const App = () => (
    <main className="app">
      <Header />
      <Hashtag />
      <Input id="show" value="show" content="Mostrar eventos"/>
    </main>
 
  );

 
export default App;
