
import "./App.css";
import Button from "./components/Button/Button";
import Input from './components/Input/Input'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Input />

        <p>
          Learning to use Storybook 
        </p>
       
      </header>
    </div>
  );
}

export default App;
