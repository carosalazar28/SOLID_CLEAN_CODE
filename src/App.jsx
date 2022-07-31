import './App.css';
import { StyledButton } from './Patterns/HOC';
import { StyledText } from './Patterns/HOC';

function App() {
  return (
    <div className='App'>
      <StyledButton onClick={() => console.log('clicked')} />
      <StyledText />
    </div>
  );
}

export default App;
