import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import Label from './objects/Label';
import Input from './objects/Input/index';

const App = () => (
    <main className="app">
      <Header />
      <Hashtag />
      <Input />
      <Label content="Mostrar eventos"/>
    </main>
 
  );

 
export default App;
