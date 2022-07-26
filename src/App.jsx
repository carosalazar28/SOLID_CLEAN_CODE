import "./App.css";

function withStyles(Component) {
  return (props) => {
    console.log("here", <Component />);
    const style = { padding: "0.2rem", color: "blue" };
    return <Component style={style} {...props} />;
  };
}

const Button = () => <button>Click me!</button>;
const Text = () => <p>Hello World!</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

function App() {
  return (
    <div className="App">
      <StyledButton />
      <StyledText />
    </div>
  );
}

export default App;
