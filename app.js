//React 2 | Check n Check
// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);

//------------------------------------------------------------------------

//React 3 | Is It a Function
// const Container = () => {
//   return React.createElement(
//     `div`,
//     null,
//     `Hey Kalvians! Welcome to React Learning`,
//     React.createElement(`div`, null, `Let's rock and roll`)
//   );
// };
// const container = document.getElementById("react-container");
// ReactDOM.render(React.createElement(Container), container);

//------------------------------------------------------------------------

//REACT 4 | NOW IT'S CLASS TIME
class ReactContainer extends React.Component {
  render() {
    return React.createElement(
      `div`,
      null,
      `Hey Kalvians`,
      React.createElement(`div`, null, `Let's rock and roll with classes`)
    );
  }
}
const container = document.getElementById("react-container");
ReactDOM.render(React.createElement(ReactContainer), container);
