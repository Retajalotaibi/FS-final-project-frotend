import React from "react";
import Card from "./card";

class YourName extends React.Component {
  state = {
    name: {},
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="Yourname-div">
          <h1>لدينا هدية لك !</h1>
          <h1>اكتب اسمك باللغة العربية </h1>
          <input
            onChange={this.handleChange}
            name="name"
            className="input-name"
            type="text"
            placeholder="اكتب حروف اسمك..."
          ></input>
          <div>
            <Card inputAlph={this.state.name} />
          </div>
        </div>
      </>
    );
  }
}

export default YourName;
