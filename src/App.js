import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import dataJason from "./assets/data.json";
import SelectedBeast from "./components/SelectedBeast ";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJason,
      show: false,
      selectedData: {},
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (data) => {
    this.setState({
      show: true,
      selectedData: data,
    });
  };

  

  render() {
    return (
      <div>
        <Header />
        <Main dataJason={this.state.data} handleShow={this.handleShow} />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          selectedData={this.state.selectedData}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
