const withStyles = (Component) => (props) => {
  const style = { padding: '0.2rem', color: 'blue' };
  return <Component style={style} {...props} />;
};

const Button = (props) => <button {...props}>Click me!</button>;
const Text = (props) => <p {...props}>Hello World!</p>;

export const StyledButton = withStyles(Button);
export const StyledText = withStyles(Text);
