import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  // constructor(props) {
  //     super(props)
  //     this.state = { data }
  // }

  render() {
    return (
      <div id="mainDiv">
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

        {/* {
                    this.props.dataJason.map(details => {
                        return (
                            < SelectedBeast
                                title={details.title}
                                description={details.description}
                                alt={details.title}
                                imageUrl={details.image_url} />
                        )
                    })
                } */}
      </div>
    );
  }
}

export default Main;
