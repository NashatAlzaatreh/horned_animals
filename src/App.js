import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import dataJason from "./assets/data.json";
import SelectedBeast from "./components/SelectedBeast ";
import Forme from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJason,
      show: false,
      selectedData: {},
      selectedHorne: [],
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

  // selectedHorne = dataJason.filter((value) => {
  //   return value.horns === chosenHorn;
  // });

  // updateHornedBeast = (newHornedBeast) => {
  //   this.setState({
  //     dataJason: newHornedBeast,
  //   });
  // };

  filterHorn = (event) => {
    let numHorns = parseInt(event.target.value);
    console.log(numHorns);

    let selectedHorne = dataJason.filter((value) => {
      return value.horns === numHorns;
    });
    // console.log(selectedHorne);
    this.setState({
      data: selectedHorne,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Forme filterHorn={this.filterHorn} />
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
