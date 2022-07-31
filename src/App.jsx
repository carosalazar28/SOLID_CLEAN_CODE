import './App.css';

const withStyles = (Component) => (props) => {
  console.log('props', props);
  const style = { padding: '0.2rem', color: 'blue' };
  return <Component style={style} {...props} />;
};

const Button = (props) => <button {...props}>Click me!</button>;
const Text = (props) => <p {...props}>Hello World!</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

function App() {
  return (
    <div className='App'>
      <StyledButton onClick={() => console.log('clicked')} />
      <StyledText />
    </div>
  );
}

export default App;
