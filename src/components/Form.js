import React from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

class Forme extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       chosenHorn: "",
  //     };
  //   }

  //   saveChosenHorn = (e) => {
  //     this.setState({ chosenHorn: e.target.value });

  //   };

  //   handelSubmit = (e) => {
  //     e.preventDefault();

  //     this.props.updateHornedBeast(this.state.chosenHorn);
  //   };

  render() {
    return (
      <div>
        <Form onChange={this.props.filterHorn}>
          <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
            <h2>
              Choose a number you want to view the beasts by the number of horns{" "}
            </h2>
          </Form.Label>
          <Form.Select
            // onChange={this.saveChosenHorn}
            className="me-sm-2"
            id="inlineFormCustomSelect"
          >
            <option value="0">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Hundred</option>
          </Form.Select>

          {/* <Button type="submit">Submit</Button> */}
        </Form>
      </div>
    );
  }
}

export default Forme;
