import React from "react";
import HornedBeast from "./HornedBeast";
// import Forme from "./Form";

class Main extends React.Component {
  // constructor(props) {
  //     super(props)
  //     this.state = { data }
  // }

  // updateHornedBeast = (newHornedBeast) => {
  //   this.setState({
  //     dataJason: newHornedBeast,
  //   });
  // };

  render() {
    return (
      <div id="mainDiv">
        {/* <Forme updateHornedBeast={this.updateHornedBeast} /> */}
        {this.props.dataJason.map((items) => {
          return (
            <HornedBeast
              title={items.title}
              description={items.description}
              alt={items.title}
              imageUrl={items.image_url}
              handleShow={this.props.handleShow}
              data={items}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
