// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         counter: 1
//       };
//     }
//     handleCode() {
//       console.log("HANDLE CODE THIS = ", this.state);
//     }
//     render() {
//       return <button onClick={this.handleCode}>Click Me</button>
//     }
//   }


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
     this.handleCode = this.handleCode.bind(this); //bind this function
    }
    handleCode() {
      console.log("HANDLE CODE THIS = ", this.state);
    }
    render() {
      return <button onClick={this.handleCode}> Click Me</button>;
    }
  }