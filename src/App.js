import './App.css';
import Formulario from './components/Formulario';

function App({label, passwords, span}) {
  return (
    <div className="App">
      <Formulario
      label='Insert your name'
      passwords='Insert your password'
      span='This information will not appear to other people'
      />
    </div>
  );
}

export default App;
