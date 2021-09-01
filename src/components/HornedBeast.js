import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  votingCounter = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
    this.props.handleShow(this.props.data);
  };

  // handleShowFun = () => this.props.handleShow(this.props.data);

  render() {
    return (
      <div id="honorDiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            onClick={this.votingCounter}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button onClick={this.votingCounter}>
              {" "}
              My Favorite <Card.Text>❤️ {this.state.votes}</Card.Text>
            </Button>
          </Card.Body>
        </Card>
        {/* <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.imageUrl} alt={this.props.alt} />
                <button onClick={this.votingCounter}>My Favorite</button>
                <h4> ❤️  {this.state.votes}</h4> */}
      </div>
    );
  }
}

export default HornedBeast;
